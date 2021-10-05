import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
class Edit extends Component {
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
 /*
  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person's Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.person_level === "Intern"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Junior"
                checked={this.state.person_level === "Junior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Senior"
                checked={this.state.person_level === "Senior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Senior</label>
            </div>
          </div>
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}*/
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 // This following section will display the form that takes the input from the user.
 render() {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Edit Record</h3>
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




export default withRouter(Edit);