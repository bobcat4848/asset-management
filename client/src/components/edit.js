import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
import config from "../config";

/*
cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'dvhjabwzc', 
  api_key: '963632584978256', 
  api_secret: 'FTwB1KeFrtmdjGrZxUB1XfvPdO8' 
});
*/
class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemPictureUrl = this.onChangeItemPictureUrl.bind(this);
    this.onChangeItemIdNumbers = this.onChangeItemIdNumbers.bind(this);
    this.onChangeItemStorageLocation = this.onChangeItemStorageLocation.bind(this);
    this.onChangeItemCheckedOut = this.onChangeItemCheckedOut.bind(this);
    this.onChangeItemCheckedIn = this.onChangeItemCheckedIn.bind(this);
    this.onChangeItemKeywords = this.onChangeItemKeywords.bind(this);
    this.onChangeItemNotes = this.onChangeItemNotes.bind(this);
    this.onChangePerson = this.onChangePerson.bind(this);

    this.onChangeItemTemp = this.onChangeItemTemp.bind(this);

    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      item_name: "",
      item_picture_url: "",
      item_id_numbers: "",
      item_storage_loc: "",
      item_checked_out_old: "",
      person_checked_out: "",
      item_keywords: "",
      item_notes: "",
      records: [],
      item_temp: "",
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get(config.url + "record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          item_name: response.data.item_name,
          item_picture_url: response.data.item_picture_url,
          item_id_numbers: response.data.item_id_numbers,
          item_storage_loc: response.data.item_storage_loc,
          item_checked_out_old: response.data.item_checked_out,
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
        item_checked_out: "true",
      
    });
  }

  onChangeItemCheckedIn(e) {
    this.setState({
        item_checked_out: "false",
      
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

  onChangeItemTemp(e) {
    this.setState({
      item_temp: e.target.value,
    });
  }
  onChangePerson(e) {
    this.setState({
      person_checked_out: e.target.value,
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
      person_checked_out: this.state.person_checked_out,
      item_keywords: this.state.item_keywords,
      item_notes: this.state.item_notes,
      item_temp: this.state.item_temp,
    };
    console.log(newEditedperson);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        config.url + "update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/item/"+ this.props.match.params.id);
  }
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 // This following section will display the form that takes the input from the user.
 render() {

  return (
    <div style={{ marginTop: -10,marginLeft: 25, paddingBottom: 100}}>
      <h3>Edit Record</h3>
      <form onSubmit={this.onSubmit}>
        <div>
          <label><b>Name :</b> </label>
          <input
            className="form-control"
            value={this.state.item_name}
            onChange={this.onChangeItemName}/></div>
        <div>
          <label><b>ID Numbers : </b></label>
          <input
            className="form-control"
            value={this.state.item_id_numbers}
            onChange={this.onChangeItemIdNumbers}/> </div>
        <div>
          <label><b> Storage Location : </b></label>
          <input
            className="form-control"
            value={this.state.item_storage_loc}
            onChange={this.onChangeItemStorageLocation}/> </div>

        <div>
          <label><b>Search Keywords :</b> </label>
          <input
            className="form-control"
            value={this.state.item_keywords}
            onChange={this.onChangeItemKeywords}/> </div>
        <div>
          <label><b>Notes :</b></label>
          <input
            className="form-control"
            value={this.state.item_notes}
            onChange={this.onChangeItemNotes}/> </div>
        <div>
          <label><b>Picture URL :</b> </label>
          <input
            className="form-control"
            value={this.state.item_picture_url}
            onChange={this.onChangeItemPictureUrl}/> </div>
        <div>
          <label><b>Who Has It :</b> </label>
          <input
            className="form-control"
            value={this.state.person_checked_out}
            onChange={this.onChangePerson}/> </div>
        <div>
          {/*}
          <label><b>Item's TEMP:  </b></label>
          <input
            className="form-control"
            value={this.state.item_temp}
            onChange={this.onChangeItemTemp}/></div>
            <div>
        {*/}
        
          <label style={{paddingRight : 5}}><b>Currently checked out? </b></label>
          {this.state.item_checked_out_old === "true" && <label> Yes</label>}
          {this.state.item_checked_out_old !== "true" && <label> No </label>}
          <div> <input 
            type="radio" name="my-input" id="yes"
            value={this.state.item_checked_out}
            onChange={this.onChangeItemCheckedOut}
            checked = {this.state.item_checked_out === "true"}/>
            <label>Yes</label></div>
          <div> <input
            type="radio" name="my-input" id="no"
            value={this.state.item_checked_out}
            onChange={this.onChangeItemCheckedIn}
            checked = {this.state.item_checked_out === "false"}/>
           <label>No</label></div></div>
        <div style={{marginTop: 5}} className="form-group">
          <input
            type="submit"
            value="Finish Edit"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
}




export default withRouter(Edit);