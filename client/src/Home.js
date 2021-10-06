import React from "react";
import PieChart from "./components/chart";
//Compenent for the homepage of the web app.



const Home = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Home Dashboard <br /><PieChart /></h1>
         
      </div>
    );
  };
  
  export default Home;