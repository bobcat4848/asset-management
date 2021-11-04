import React from "react";
import RecordList from "./recordList";
//Compenent for the homepage of the web app.



const Equipment = () => {
    return (
      <div>
        <form>
            <h5>Search<em>(in development)</em></h5>
            <input className="form-control" type="text" name="search" id="search" placeholder="search for an item"style={{width: 400}}/>
        </form>

        
        <br/>
        <RecordList />
      </div>
    );
  };
  
  export default Equipment;