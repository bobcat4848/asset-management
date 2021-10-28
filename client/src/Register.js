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
      password: form[1].value,
      first_name: form[2].value,
      last_name: form[3].value
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
    <div style={{width: 500}}>
      <label htmlFor="emailInput" className="form-label">Email address</label>
      <input type="email" required className="form-control" id="emailInput" placeholder="name@example.com" />
      <br/>
      <label htmlFor="passwordInput" className="form-label">Password</label>
      <input type="password" required className="form-control" id="passwordInput" placeholder="123" />
      <br/>
      <label htmlFor="firstNameInput" className="form-label">First Name</label>
      <input type="text" required className="form-control" id="firstNameInput" placeholder="John" />
      <br/>
      <label htmlFor="lastNameInput" className="form-label">Last Name</label>
      <input type="text" required className="form-control" id="lastNameInput" placeholder="Doe" />
    </div>
    <br/>
    <button type="submit" className="btn btn-primary">Submit</button>
    {loggedIn ? <Redirect to="/home" /> : null }
  </form>
  )
}

export default Register;