import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Home from "./Home";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Item from "./components/item";
import System from "./components/system";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{width: 1250, margin: "auto"}}>
        <Route exact path="/Home" component={Home} />
        
        <Route exact path="/">
          <RecordList />
        </Route>
        
        <Route path="/edit/:id" component={Edit} />
        
        <Route path="/create">
          <Create />
        </Route>
        
        <Route path="/item">
          <Item />
        </Route>
        <Route path="/system">
          <System />
        </Route>
      </div>
    </div>
  );
};

export default App;