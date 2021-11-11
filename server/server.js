require("dotenv").config({ path: "./config.env" });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");

const app = express();

const cors = require("cors");
const dbo = require("./db/conn");
const port = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
  app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  });
}).catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

app.post("/register", async (req, res) => {
  const user = req.body;

  const takenEmail = await User.findOne({email: user.email});

  if (takenEmail) {
    res.json({message: "Email has already been taken."});
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    console.log(user);
    const dbUser = new User({
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name
    });

    dbUser.save();

    res.json({message: "Success"});
  }
});

app.post("/login", (req, res) => {
  const userLoggingIn = req.body;

  User.findOne({email: userLoggingIn.email}).then(dbUser => {
    if (!dbUser) {
      return res.json({
        message: "Invalid Email or Password"
      });
    }
    bcrypt.compare(userLoggingIn.password, dbUser.password).then(isCorrect => {
      if (isCorrect) {
        const payload = {
          id: dbUser._id,
          email: dbUser.email,
          first_name: dbUser.first_name,
          last_name: dbUser.last_name
        }
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {expiresIn: '30d'},
          (err, token) => {
            if (err) return res.json({message: err});
            return res.json({
              message: "Success",
              token: "Bearer " + token
            });
          }
        )
      } else {
        return res.json({
          message: "Invalid Email or Password"
        });
      }
    });
  })
});

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"]?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if (err) return res.json({
        isLoggedIn: false,
        message: "Failed to Authenticate"
      })
      req.user = {};
      req.user.id = decoded.id;
      req.user.email = decoded.email;
      req.user.first_name = decoded.first_name;
      req.user.last_name = decoded.last_name;
      next();
    })
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false});
  }
}

app.get("/isUserAuth", verifyJWT, (req, res) => {
  return res.json({isLoggedIn: true, email: req.user.email, first_name: req.user.first_name, last_name: req.user.last_name});
})


