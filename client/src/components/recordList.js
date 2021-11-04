import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.item_name}</td>
    <td>{props.record.item_id_numbers}</td>
    <td>{props.record.item_storage_loc}</td>
    <td>{props.record.item_checked_out}</td>
    <td>
      <Link to={"/edit/" + props.record._id} className="btn btn-outline-primary">Edit</Link>
      
      <a
        href="/"
        className="btn btn-outline-secondary"
        role="button"
        style={{marginLeft:5}}
        onClick={() => {
          if(window.confirm('Are you sure you want to delete this item?')){
          props.deleteRecord(props.record._id);
          }
        }}
      >
        Delete 
      </a>
      <Link to={"/item/" + props.record._id} className="btn btn-outline-primary" style={{marginLeft:5}}>Details</Link>
    </td>
  </tr>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }
 
  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Equipment List</h3>
        <table className="table table-striped" style={{ marginTop: 20, marginBottom: 150 }}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Identification Numbers</th>
              <th>Storage Location</th>
              <th>Checked Out?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}