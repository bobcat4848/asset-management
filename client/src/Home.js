import React from "react";
import Charts from "./components/Charts";
import RecordList from "./components/recordList";
//Compenent for the homepage of the web app.



const Home = () => {
    return (
      <div>
        <h1 style={{position: 'relative', color:'black',stroke:'20px',textShadow: '1px 1px salmon',textAlign:'center'}}>Home Dashboard</h1>
        <Charts />
        <RecordList />
      </div>
    );
  };
  
  export default Home;