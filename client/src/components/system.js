import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

class System extends Component{
  render(){
    return(
      <div>
          <div className="display-4">Administrator Actions</div>
          <br/>
          <form>
          <h5>User Actions</h5>
          <input type="text" name="usersearch"
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
            <h5>Restrict User Access*</h5>
            <input className="form-control" type="text" name="restrictuser" 
                   placeholder="enter username(s)"
                   style={{width: 230}}/>
            <button className="btn btn-primary" type="submit" style={{marginTop: 5}}>Submit</button>
            <p>*Multiple users can be entered with a space in between the usernames.</p>
          </form>
          
          
          <form>
            <h5>Create User</h5>
            <div class="form-group">
              <label for="newuser">Username: </label>
              <input className="form-control" name="newuser" id="newuser" type="text" style={{width: 230}}/>
            </div>
            <div className="form-group">
              <label for="newpword">Password: </label>
              <input className="form-control" name="newpword" id="newpword" type="password" style={{width: 230}}/>
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
  