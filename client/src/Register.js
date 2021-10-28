import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';

function Register() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState();

  function handleRegister(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form[0].value,
      password: form[1].value
    }

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
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
      if (data.isLoggedIn) {
        history.push("/home");
        setLoggedIn(true);
      }
    })
  }, [history]);

  return (
    <form onSubmit={event => handleRegister(event)}>
      <input required type="email"/>
      <input required type="password"/>
      <input type="submit" value="Register"/>
      {loggedIn ? <Redirect to="/home" /> : null }
    </form>
  )
}

export default Register;