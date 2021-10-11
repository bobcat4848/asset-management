import React from "react";
import Charts from "./components/chart";
//Compenent for the homepage of the web app.



const Home = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'center',width: '100%'}}>
        <h1 style={{width: '100%'}}>Home Dashboard</h1>
        <br />
        <Charts />
         
      </div>
    );
  };
  
  export default Home;