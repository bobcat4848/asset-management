import React, { Component } from "react";
//import { StyleSheet, Text, View } from "react-native";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"; 
 
class Item extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemPictureUrl = this.onChangeItemPictureUrl.bind(this);
    this.onChangeItemIdNumbers = this.onChangeItemIdNumbers.bind(this);
    this.onChangeItemStorageLocation = this.onChangeItemStorageLocation.bind(this);
    this.onChangeItemCheckedOut = this.onChangeItemCheckedOut.bind(this);
    this.onChangeItemKeywords = this.onChangeItemKeywords.bind(this);
    this.onChangeItemNotes = this.onChangeItemNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      item_name: "",
      item_picture_url: "",
      item_id_numbers: "",
      item_storage_loc: "",
      item_checked_out: false,
      item_keywords: "",
      item_notes: "",
      records: [],
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
          item_keywords: response.data.item_keywords,
          item_notes: response.data.item_notes,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // These methods will update the state properties.
  onChangeItemName(e) {
    this.setState({
      item_name: e.target.value,
    });
  }

  onChangeItemPictureUrl(e) {
    this.setState({
      item_picture_url: e.target.value,
    });
  }

  onChangeItemIdNumbers(e) {
    this.setState({
      item_id_numbers: e.target.value,
    });
  }

  onChangeItemStorageLocation(e) {
    this.setState({
      item_storage_loc: e.target.value,
    });
  }

  onChangeItemCheckedOut(e) {
    this.setState({
      item_checked_out: e.target.value,
    });
  }

  onChangeItemKeywords(e) {
    this.setState({
      item_keywords: e.target.value,
    });
  }

  onChangeItemNotes(e) {
    this.setState({
      item_notes: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      item_name: this.state.item_name,
      item_picture_url: this.state.item_picture_url,
      item_id_numbers: this.state.item_id_numbers,
      item_storage_loc: this.state.item_storage_loc,
      item_checked_out: this.state.item_checked_out,
      item_keywords: this.state.item_keywords,
      item_notes: this.state.item_notes,
    };
    console.log(newEditedperson);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5000/update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/");
  }
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 // This following section will display the form that takes the input from the user.
 render() {
  return (
    <div>
    <h3 style={{ paddingLeft: 50}}>Item Details</h3>
    <div style={{ paddingLeft: 50, display: 'flex', marginTop: 20, flexDirection: "row" }}>
      <div><form style={{ paddingRight: 10,flex: 3, backgroundColor: "lightgrey" }} class="col">
        <div class="col"><label>Name : </label></div>
        <div class="col"><label>Picture : </label></div>  
        <div class="col"><label>ID Number : </label></div>
        <div class="col"><label>Location : </label></div>
        <div class="col"><label>Notes : </label></div>
        <div class="col"><label>Keywords : </label></div>
        <div class="col"><label>Checked out? : </label></div>
         </form></div>
      <div>
      <form style={{paddingLeft: 50 , flex: 4, }} class="col">
       <div class="col-auto"><label><b> {this.state.item_name}</b> </label></div>
        <div class="col"><label><b> {this.state.item_picture_url}</b> </label></div> 
        <div class="col-auto"><label><b> {this.state.item_id_numbers}</b> </label></div> 
        <div class="col-auto"><label><b> {this.state.item_storage_loc}</b> </label></div>
        <div class="col-auto"><label><b> {this.state.item_keywords}</b> </label></div> 
        <div class="col-auto"><label><b> {this.state.item_notes}</b> </label></div> 
        <div class="col-auto"><label><b> {this.state.item_checked_out}</b> </label></div> 
      </form>
      </div>  
    </div>
    
    </div>
  );
}
}


export default withRouter(Item);