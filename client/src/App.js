import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";
import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import axios from "axios";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Home from "./Home";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Item from "./components/item";
import System from "./components/system";
import Equipment from "./components/equipment";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./components/PrivateRoute";
import { Link } from "react-router-dom";

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.isLoggedIn) {
        // If user is logged in, set user start to server-provided data
        setUser(response.data);

        // Redirect to home page if user is logged in already
        if (window.location.pathname === "/login") history.push("/home");
      }
    });
  }, [history]);

  return (
    <div>
      <Navbar loggedIn={user}/>

      <div style={{width: 1250, margin: "auto"}}>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route exact path="/register">
          <Register/>
        </Route>

        <PrivateRoute user={user} exact path="/home">
          <Home user={user} />
        </PrivateRoute>

        <PrivateRoute user={user} exact path="/">
          <Redirect to="/home" />
        </PrivateRoute>
        
        <PrivateRoute user={user} path="/edit/:id">
          <Edit />
        </PrivateRoute>

        <PrivateRoute user={user} path="/create">
          <Create />
        </PrivateRoute>
        
        <PrivateRoute user={user} path="/item/:id">
          <Item />
        </PrivateRoute>

        <PrivateRoute user={user} exact path="/system">
          <System />
        </PrivateRoute>

        <PrivateRoute user={user} exact path="/equipment">
          <Equipment />
        </PrivateRoute>
      </div>
    </div>
  );
};

export default App;