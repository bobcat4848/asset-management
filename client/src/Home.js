import React from "react";
import Charts from "./components/Charts";
import RecordList from "./components/recordList";
//Compenent for the homepage of the web app.

const Home = () => {
    return (
      <div>
        <h3>Home Dashboard</h3>
        <Charts />
        <RecordList />
      </div>
    );
  };
  
  export default Home;