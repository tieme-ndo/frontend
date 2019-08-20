import React from "react";
import { Redirect } from "react-router-dom";
// const jwt = require('jsonwebtoken');

const IsAuthenticated = WrappedComponent => {

  const HOCComponent = props => {
    // Retrieve token from Local Storage
    let token = localStorage.getItem('token')
    
      if (token) {
        // jwt.verify(token, PROCESS.ENV.SECRET, (err, decodedToken) => {
          if (err) {
            // Redirect
          } else {
            // Return Wrapped Component
          }
        // });
      } else {
        // Redirect
      }
  }
};

export default IsAuthenticated;