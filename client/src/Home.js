import React from "react";
import RecordList from "./components/recordList";
//Compenent for the homepage of the web app.

const Home = ({ user }) => {
    return (
      <div>
        <div id="dashboard" style={{textAlign: "center"}}>
          <h3>Home Dashboard</h3>
          <h6>Welcome back, {user.first_name}  {user.last_name}</h6>
          <iframe
            style={{
              background: "#21313C",
              border: "none",
              borderRadius: 2,
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
            }}
            title="ColumnChart"
            width={640}
            height={420}
            src="https://charts.mongodb.com/charts-project-0-usumc/embed/charts?id=34971c88-5c8c-4dfc-a9da-d1408a5af85e&maxDataAge=3600&theme=dark&autoRefresh=true"
          />
          <br/>
          <iframe
            style={{
              background: "#21313C",
              border: "none",
              borderRadius: 2,
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              marginRight:5
            }}
            title="BarChart"
            width={320}
            height={240}
            src="https://charts.mongodb.com/charts-project-0-usumc/embed/charts?id=85709959-3971-4317-9285-50e1c87f1317&maxDataAge=3600&theme=dark&autoRefresh=true"
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
            src="https://charts.mongodb.com/charts-project-0-usumc/embed/charts?id=49011550-3f5c-4962-a9ef-6212e5fbe441&maxDataAge=3600&theme=dark&autoRefresh=true"
          />
        </div>
        
        <RecordList /> 
      </div>
    );
  };
  
  export default Home;