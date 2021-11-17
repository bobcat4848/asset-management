import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({user, children, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} > 
          {(user && user.isLoggedIn) ?
            <div>
              {children}
            </div>
          :
            <Redirect to="/login"/>
          }
        </Route>
    )
}
export default PrivateRoute;