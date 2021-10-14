import React from "react";
import Charts from "./components/chart";
import Chart2 from "./components/chart2";
import RecordList from "./components/recordList";
//Compenent for the homepage of the web app.



const Home = () => {
    return (
      <div>
        <h1 style={{position: 'absolute', left: '40%', top: '10%', color:'black',stroke:'20px',textShadow: '1px 1px salmon'}}>Home Dashboard</h1>
        <Charts />
        <Chart2 />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <RecordList />
      </div>
    );
  };
  
  export default Home;