import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
export default class Create extends Component {
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
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const new_item = {
      item_name: this.state.item_name,
      item_picture_url: this.state.item_picture_url,
      item_id_numbers: this.state.item_id_numbers,
      item_storage_loc: this.state.item_storage_loc,
      item_checked_out: this.state.item_checked_out,
      item_keywords: this.state.item_keywords,
      item_notes: this.state.item_notes,
    };
 
    axios
      .post("http://localhost:5000/record/add", new_item)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      item_name: "",
      item_picture_url: "",
      item_id_numbers: "",
      item_storage_loc: "",
      item_checked_out: false,
      item_keywords: "",
      item_notes: "",
    });
  }
 
  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name of the item (required): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_name}
              onChange={this.onChangeItemName}
            />
          </div>
          <div className="form-group">
            <label>Item's Picture URL (optional): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_picture_url}
              onChange={this.onChangeItemPictureUrl}
            />
          </div>
          <div className="form-group">
            <label>Item's ID Numbers (optional, separate with comma): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_id_numbers}
              onChange={this.onChangeItemIdNumbers}
            />
          </div>
          <div className="form-group">
            <label>Item's Storage Location (required): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_storage_loc}
              onChange={this.onChangeItemStorageLocation}
            />
          </div>

          <div className="form-group">
            <label>Item's Keywords (optional, separate with comma): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_keywords}
              onChange={this.onChangeItemKeywords}
            />
          </div>

          <div className="form-group">
            <label>Item's Notes (optional): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_notes}
              onChange={this.onChangeItemNotes}
            />
          </div>

          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              value={this.state.item_checked_out}
              onChange={this.onChangeItemCheckedOut}
            />
            <label>Checked out? </label>
          </div>

          <div className="form-group">
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