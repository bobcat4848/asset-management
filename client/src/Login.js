import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState();

  function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form[0].value,
      password: form[1].value
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      history.push("/home");
      setLoggedIn(true);
    });
  }

  useEffect(() => {
    fetch("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.isLoggedIn) {
        history.push("/home");
        addSignOutButton();
        setLoggedIn(true);
      }
    })
    return () => {
      setLoggedIn({}); // remove warnings from 
    };
  }, [history]);

  return (
      <form onSubmit={event => handleLogin(event)}>
        <div style={{width: 500}}>
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input type="email" required className="form-control" id="emailInput" placeholder="name@example.com" />
          <br/>
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input type="password" required className="form-control" id="passwordInput" placeholder="123" />
        </div>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
        <button type="submit" className="btn btn-primary">Submit</button>
        {loggedIn ? <Redirect to="/home" /> : null }
      </form>
  )
}

function addSignOutButton() {
  var elem = document.getElementById("signout");
  elem.style.display = "block";
}

export default Login;