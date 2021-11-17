import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login({ setUser }) {
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form[0].value,
      password: form[1].value
    }

    axios({
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      url: '/login',
      data: {
        email: user.email,
        password: user.password
      }
    })
    .then(data => {
      if (data.data.message === "Success") {
        // Set token to manage state in application
        localStorage.setItem("token", data.data.token)

        // Get user data from login bearer token
        axios.get("/isUserAuth", {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        })
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
          history.push("/home");
        });
      }
    })
  }

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
      </form>
  )
}

export default Login;