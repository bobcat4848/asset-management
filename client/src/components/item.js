import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"; 
 
class Item extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.state = {
      item_name: "",
      item_picture_url: "",
      item_id_numbers: "",
      item_storage_loc: "",
      item_checked_out: "",
      person_checked_out:"",
      item_keywords: "",
      item_notes: "",
      records: [],
      item_temp: "",
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          item_name: response.data.item_name,
          item_picture_url: response.data.item_picture_url,
          item_id_numbers: response.data.item_id_numbers,
          item_storage_loc: response.data.item_storage_loc,
          item_checked_out: response.data.item_checked_out,
          person_checked_out: response.data.person_checked_out,
          item_keywords: response.data.item_keywords,
          item_notes: response.data.item_notes,
          item_temp: response.data.item_temp,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 // This following section will display the form that takes the input from the user.
 render() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  
  return (
    <div style={{marginTop: -10, marginLeft: 25, paddingBottom: 100,}}>
    <h1 style={{ }}> {this.state.item_name} </h1>
   
    <div style={{  display: 'flex',  flexDirection: "row" }}>
      <div><form style={{ flex: 3, backgroundColor: "white" }} class="flex-item">
        {/*} <div class="col"><label>Name : </label></div>{*/}
        {this.state.item_id_numbers !=="" && <div class="col"><label>ID Number : </label></div>}
        {this.state.item_storage_loc !=="" && <div classname="col"><label>Storage Location : </label></div>}
        {this.state.item_notes !=="" && <div class="column"><label>Notes : </label></div>}
        {this.state.item_keywords !=="" && <div class="col"><label>Search Keywords : </label></div>}
        <div class="col"><label>Checked out? :</label> </div>
        {this.state.item_checked_out === "true" && <div class="col"><label>Being Used by :</label></div>}
        <Link to={"/edit/" + this.props.match.params.id}>Edit</Link>
      </form></div>

      <div>
      <form style={{paddingLeft: 50 }} class="flex-item">
        {this.state.item_id_numbers !=="" && <div ><label><b> {this.state.item_id_numbers}</b> </label></div>} 
        {this.state.item_storage_loc !=="" && <div ><label><b> {this.state.item_storage_loc}</b> </label></div>}
        {this.state.item_notes !=="" && <div class="col-auto"><label><b> {this.state.item_notes}</b> </label></div> }
        {this.state.item_keywords !=="" && <div class="col-auto"><label><b> {this.state.item_keywords}</b> </label></div> }
        {this.state.item_checked_out === "true" && <label><b> Yes</b></label>}
        {this.state.item_checked_out === "true" && <div><label>{this.state.person_checked_out}</label></div>}
         {this.state.item_checked_out !== "true" && <label><b> No </b></label>}
      </form></div>  
      <img  style={{height: 200 }} src= "https://cdn11.bigcommerce.com/s-ufhcuzfxw9/images/stencil/500x659/products/11439/16934/MI-4100LXL__63851.1568214592.jpg?c=2"></img>
    </div>
    
    </div>
  );
}
}


export default withRouter(Item);