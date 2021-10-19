import React from "react";
import Charts from "./components/Charts";
import RecordList from "./components/recordList";
//Compenent for the homepage of the web app.



const Home = () => {
    return (
      <div>
        <h1 style={{position: 'absolute', left: '40%', top: '15%', color:'black',stroke:'20px',textShadow: '1px 1px salmon'}}>Home Dashboard</h1>
        <div style={{border: '2px solid black'}}>
        <Charts />
        </div>
        <RecordList />
        
      </div>
    );
  };
  
  export default Home;