import React from "react";
import RecordList from "./components/recordList";
//Compenent for the homepage of the web app.

const Home = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Home Dashboard</h3>
        <iframe
    style={{
      background: "#21313C",
      border: "none",
      borderRadius: 2,
      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
    }}
    title="BarChart"
    width={320}
    height={240}
    src="https://charts.mongodb.com/charts-project-0-gjoqf/embed/charts?id=f3964ef1-d3d6-409d-82e8-f16d2aec435f&maxDataAge=3600&theme=dark&autoRefresh=true"
  />
  <iframe
    style={{
      background: "#21313C",
      border: "none",
      borderRadius: 2,
      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
    }}
    title="PieChart"
    width={320}
    height={240}
    src="https://charts.mongodb.com/charts-project-0-gjoqf/embed/charts?id=55872d97-b4c1-4c64-ae35-d3905d939a73&maxDataAge=3600&theme=dark&autoRefresh=true"
  />
        <RecordList />
      </div>
    );
  };
  
  export default Home;