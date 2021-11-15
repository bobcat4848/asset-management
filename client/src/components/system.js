import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

class System extends Component{
  render(){
    return(
      <div style={{marginLeft:25}}>
          <h3>Administrator Actions</h3>
          <br/>
          <form>
          <h5>User Actions</h5>
          <input type="text" name="usersearch"
                 autoComplete="off"
                 placeholder="enter username" 
                 className="form-control"
                 style={{width: 230}}/>
          <label>Action:</label>
          <div class="form-check">
            <input className="form-check-input" type="radio" name="actionset" value="reset" id="pword" />
            <label className="form-check-label" for="pword">Reset Password</label>
          </div>
          <div class="form-check">
            <input className="form-check-input" type="radio" name="actionset" value="restrict" id="restrict"/>
            <label className="form-check-label" for="restrict">Restrict User</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        
          <br/>
          
          <form>
            <h5>Register User</h5>
            <div className="form-group">
              <label for="newuser">Username: </label>
              <input autocomplete="off" className="form-control" name="newuser" id="newuser" type="text" style={{width: 230}}/>
            </div>
            <div className="form-group">
              <label for="newpword">Password: </label>
              <input className="form-control" name="newpword" id="newpword" type="text" style={{width: 230}}/>
            </div>
            <div className="form-group">
              <label for="newfname">First Name: </label>
              <input className="form-control" name="newfname" id="newfname" type="text" style={{width: 230}}/>
            </div>
            <div className="form-group">
              <label for="newlname">Last Name: </label>
              <input className="form-control" name="newlname" id="newlname" type="text" style={{width: 230}}/>
            </div>
            <button className="btn btn-primary" type="submit" style={{marginTop: 5}}>Submit</button>
          </form>
          <br/><br />

          <form>
            <button className="btn btn-secondary" type="button">Restore from Backup</button>
          </form>
          <br/>
      </div>
    );
  }
}
  
export default System;
  