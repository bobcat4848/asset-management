import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

class System extends Component{
  render(){
    return(
      <div>
          <h1>Administrator Actions</h1>
          <br/>
          
          <form>
          <label>User Actions<br/>
          <input type="text" name="usersearch" placeholder="enter username" /><br/>
          <label>Action:</label><br/>
          <input type="radio" name="actionset" value="reset password" />
          <label for="reset password"> Reset Password</label><br/>
          <input type="radio" name="actionset" value="restrict"/>
          <label for="restrict">Restrict User</label><br/>
          <button type="submit">Submit</button>
          </label>
          </form>
          <br/>
          <form>
            <label>Restrict User Access*<br/>
            <input type="text" name="restrictuser" placeholder="enter username(s)"/>
            <button type="submit">Submit</button>
            </label>
            <p>*Multiple users can be entered with a space in between the usernames.</p>
          </form>
          <br/>
          <form>
            <p>Add User</p>
            <label>Username:
              <input type="text" name="newuser"/>
            </label>
            <br/>
            <label>Password: 
              <input type="password" name="newpassword" />
            </label><br/><br/>
            <button type="submit">Create User</button>
          </form>
          <br/><br />
          <form>
            <button type="button">Restore from Backup</button>
          </form>
          <br/>
      </div>
    );
  }
}
  
export default System;
  