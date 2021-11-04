import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";
import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';

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

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState();
  
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
    <div>
      <Navbar loggedIn={loggedIn}/>
      <div style={{width: 1250, margin: "auto"}}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/Home" component={Home} />
        
        <Route exact path="/" >
          <Redirect to="/home" />
        </Route>

        <Route path="/edit/:id" component={Edit} />
        
        <Route path="/create">
          <Create />
        </Route>
        
        <Route path="/item/:id" component={Item} />
        
        <Route path="/system">
          <System />
        </Route>

        <Route path="/equipment">
          <Equipment />
        </Route>
      </div>
    </div>
  );
};

export default App;