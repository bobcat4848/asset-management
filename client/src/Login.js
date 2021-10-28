import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';

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
        setLoggedIn(true);
      }
    })
    return () => {
      setLoggedIn({}); // remove warnings from 
    };
  }, [history]);

  return (
    <form onSubmit={event => handleLogin(event)}>
      <input required type="email"/>
      <input required type="password"/>
      <input type="submit" value="Submit"/>
      {loggedIn ? <Redirect to="/home" /> : null }
    </form>
  )
}

export default Login;