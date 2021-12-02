import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
import config from "../config";

class Create extends Component {
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
      item_checked_out: "",
      person_checked_out: "",
      item_keywords: "",
      item_notes: "",
      item_temp: "",
    };

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
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const new_item = {
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
 
    axios
      .post(config.url + "record/add", new_item)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      item_name: "",
      item_picture_url: "",
      item_id_numbers: "",
      item_storage_loc: "",
      item_checked_out: "",
      person_checked_out: "",
      item_keywords: "",
      item_notes: "",
      item_temp: "",
    });
    
    alert("Item created successfully.");
    this.props.history.push("/equipment");
  }
 
  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div  style={{ marginTop: -10,marginLeft: 25, paddingBottom: 100}}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
        <span><em>*required</em></span>
        <div>
          <br/>
          <label><b>*Name :</b> </label>
          <input
            required
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
          <label><b> *Storage Location :</b></label>
          <input
            required
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
          <label><b>Notes : </b> </label>
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
          <label><b>Checked Out By :</b> </label>
          <input
            className="form-control"
            value={this.state.person_checked_out}
            onChange={this.onChangePerson}/> </div>
        {/*}
        <div>
          <label><b>Item's TEMP:  </b></label>
          <input
            className="form-control"
            value={this.state.item_temp}
            onChange={this.onChangeItemTemp}/></div>
     {*/}
          <div >
            <label><b>*Checked out? </b></label>
          </div>

          <div><input
            required 
            type="radio" name="my-input" id="yes" className="form-check-input"
            style={{marginRight: 5}}
            value={this.state.item_checked_out}
            onChange={this.onChangeItemCheckedOut}
          />
         <label>Yes</label></div>
          <div><input
            type="radio" name="my-input" id="no" className="form-check-input"
            style={{marginRight: 5}}
            value={this.state.item_checked_out}
            onChange={this.onChangeItemCheckedIn}
          />
         <label>No</label></div>

          <div style={{marginTop: 5}}className="form-group">
            <input
              type="submit"
              value="Create Item"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);