import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"; 
import config from "../config";

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
      .get(config.url + "record/" + this.props.match.params.id)
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

  const renderId = () =>{
    if(this.state.item_id_numbers   !==""){
     return (<div class="row">
      <div class="col-2"><label>ID Number :</label></div>
      <div class="col-2"><label><b>{this.state.item_id_numbers}</b></label></div></div>);}
    else return; }
  
  const renderLoc = () =>{
    if(this.state.item_storage_loc   !==""){
     return (<div class="row">
      <div class="col-2"><label>Storage Location :</label></div>
      <div class="col-2"><label><b>{this.state.item_storage_loc}</b></label></div></div>);}
    else  return; }

  const renderNotes = () =>{
    if(this.state.item_notes   !==""){
     return (<div class="row">
      <div class="col-2"><label>Notes :</label></div>
      <div class="col-2"><label><b>{this.state.item_notes}</b></label></div></div>);}
    else return; }

  const renderKeywords = () =>{
    if(this.state.item_keywords   !==""){
     return (<div class="row">
      <div class="col-2"><label>Search Keywords :</label></div>
      <div class="col-2"><label><b>{this.state.item_keywords}</b></label></div></div>);}
     else return; }

  const renderChecked = () =>{
    if(this.state.item_checked_out  === "true"){
     return (<div>
      <div class="row">
      <div class="col-2"><label>Checked out? :</label> </div>
      <div class="col-2"><label><b>Yes</b></label> </div></div></div>);}
    else if(this.state.item_checked_out  !== "true"){
     return (<div><div class="row">
      <div class="col-2"><label>Checked out? :</label> </div>
      <div class="col-2"><label><b>No</b></label> </div></div></div>);}
    else return;} 
    
  const renderWho = () =>{
     if(this.state.item_checked_out  === "true" && this.state.person_checked_out  !==""){
      return (<div class="row">
      <div class="col-2"><label>Being Used by :</label></div>
      <div class="col-2"><label><b>{this.state.person_checked_out}</b></label></div></div>);}
     else if(this.state.item_checked_out  === "true" && this.state.person_checked_out  ===""){
        return (<div class="row">
        <div class="col-2"><label>Being Used by :</label></div>
        <div class="col-2"><label><b>Unknown</b></label></div></div>);}
    else
        return; }  
      
  return (
    
  <div class="container" >
    <div class="row">
      <div class="col-4"></div>
      <div class="col"><form>
        {this.state.item_keywords !=="" && <img  style={{height: 150,marginTop: 50,position: "absolute"}} src= {this.state.item_picture_url}></img>}
        {this.state.item_keywords ==="" && <img  style={{height: 150,marginTop: 50,position: "absolute"}} 
          src= {"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"}>
            </img>}</form></div></div>

    <div class="row">
      <div class="col" style={{border: 100}} >
        <div class="row"><h1> {this.state.item_name} </h1></div>
        {renderId()}
        {renderLoc()}
        {renderNotes()}
        {renderKeywords()}
        {renderChecked()}
        {renderWho()}
        <Link to={"/edit/" + this.props.match.params.id}>Edit</Link>
        </div></div>
{/*}

    <div>
      <div class="row"><h1> {this.state.item_name} </h1></div>
    
    <div style={{  display: 'flex',  flexDirection: "row", }}>
      <div><form class="flex-item">
        {this.state.item_id_numbers   !=="" && <div class="col">    <label>ID Number : </label></div>}
        {this.state.item_storage_loc  !=="" && <div classname="col"><label>Storage Location : </label></div>}
        {this.state.item_notes        !=="" && <div class="column"> <label>Notes : </label></div>}
        {this.state.item_keywords     !=="" && <div class="col">    <label>Search Keywords : </label></div>}
        {this.state.checkedOut        !=="" && <div class="col">    <label>Checked out? :</label> </div>}
        {this.state.item_checked_out  === "true" &&<div class="col"><label>Being Used by :</label></div>}
        <Link to={"/edit/" + this.props.match.params.id}>Edit</Link>
      </form></div>
      <div style={{ flex:2,}}>
      <form style={{paddingLeft: 50, flex:1}} class="flex-item">
        {this.state.item_id_numbers   !=="" && <div ><label><b> {this.state.item_id_numbers}</b> </label></div>} 
        {this.state.item_storage_loc  !=="" && <div ><label><b> {this.state.item_storage_loc}</b> </label></div>}
        {this.state.item_notes        !=="" && <div ><label><b> {this.state.item_notes}</b> </label></div> }
        {this.state.item_keywords     !=="" && <div ><label><b> {this.state.item_keywords}</b> </label></div> }
        {this.state.item_checked_out  === "true" && <div><label><b>Yes</b></label></div>}
        {this.state.item_checked_out  === "true" && <div><label>{this.state.person_checked_out}</label></div>}
        {this.state.item_checked_out  !== "true" && <div><label><b>No </b></label></div>}
      </form></div>  
      
    </div>
    {this.state.item_keywords !=="" && <img  style={{height: 150, marginLeft: 20}} src= {this.state.item_picture_url}></img>}
      {this.state.item_keywords ==="" && <img  style={{height: 150, marginLeft: 20}} 
          src= {"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"}>
            </img>}
    
    </div>
{*/}

    </div>
  );
}
}


export default withRouter(Item);