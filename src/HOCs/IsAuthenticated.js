import React from "react";
import { Redirect } from "react-router-dom";

const IsAuthenticated = WrappedComponent => {

  const HOCComponent = props => {
    let tokenInPlace = localStorage.getItem('token')
    // if (!tokenInPlace) {
    //   return <Redirect to="/" />;
    // } else {
    //   return <WrappedComponent {...props} />;
    // }
    if (!tokenInPlace) {
      return null
    } else {
      return <WrappedComponent {...props} />
    }
  };
};

export default IsAuthenticated;