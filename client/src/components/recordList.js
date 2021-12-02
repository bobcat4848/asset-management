import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Record = (props) => (

  <tr>
    <td>{props.record.item_name}</td>
    <td>{props.record.item_id_numbers}</td>
    <td>{props.record.item_storage_loc}</td>
    <td>{props.record.item_checked_out}</td>
    <td>{props.record.person_checked_out}</td>
    <td style={{display:"none"}}>{props.record.item_keywords}</td>
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
          alert("Item deleted successfully.")
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
    this.state = { records: [], direction: 'asc' };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("/record")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //this method searched the records by a user search
  
  searchItem() {
    // Declare variables
    
    var input, filter, table, tr, td1, i, itemName,td2,td3,td4,id,storageLoc,checkedOut,td5,whoHas,td6,keyWords;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {

      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[2];
      td4 = tr[i].getElementsByTagName("td")[3];
      td5 = tr[i].getElementsByTagName("td")[4];
      td6 = tr[i].getElementsByTagName("td")[5];
      if (td1) {
        itemName = td1.textContent || td1.innerText;
        id = td2.textContent || td2.innerText;
        storageLoc = td3.textContent || td3.innerText;
        checkedOut = td4.textContent || td4.innerText;
        whoHas = td5.textContent || td5.innerText;
        keyWords = td6.textContent || td6.innerText;
        if (itemName.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else if(id.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
        }
        else if(storageLoc.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
        }
        else if(checkedOut.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
        }
        else if(whoHas.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
        }
        else if(keyWords.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
    }
    }
    
    
  }
  //this method sorts the records by name, in ascending order.
  sortRecords(fieldName){
    this.state.direction === 'asc' ? this.setState({direction: 'desc'}) : this.setState({direction: 'asc'})
    this.setState({
      record: this.state.records.sort((a, b) => {
        if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
          return this.state.direction === 'asc' ? -1 : 1;
        }
        if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
          return this.state.direction === 'asc' ? 1 : -1;
        }
        return 0;
      })  
    })
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("/" + id).then((response) => {
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
        <h3 style={{padding: 10}}>Equipment</h3>

        <div className="format-search">
        <input
          type="text"
          id="myInput"
          onKeyUp={() => {this.searchItem();}}
          placeholder="Search for items.."
          style={{paddingLeft: 35}}
        />     
        <span><FontAwesomeIcon icon={faSearch} className="fa-styling"/></span>
        </div> 
        
        <table id= "myTable" className="table table-striped" style={{ marginTop: 20, marginBottom: 150 }}>
          <thead>
            <tr>
              <th role="button" 
              onClick={() => {this.sortRecords('item_name');}}
                >Item <FontAwesomeIcon icon={faSort} className="fa-icon"/></th>
              <th role="button" 
              onClick={() => {this.sortRecords('item_id_numbers');}}
              >ID Numbers <FontAwesomeIcon icon={faSort} className="fa-icon"/></th>
              <th role="button" 
              onClick={() => {this.sortRecords('item_storage_loc');}}
              >Storage Location <FontAwesomeIcon icon={faSort} className="fa-icon"/></th>
              <th role="button" 
              onClick={() => {this.sortRecords('item_checked_out');}}
              >Checked Out <FontAwesomeIcon icon={faSort} className="fa-icon"/></th>
               <th role="button" 
              onClick={() => {this.sortRecords('person_checked_out');}}>By Who <FontAwesomeIcon icon={faSort} className="fa-icon"/> </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}