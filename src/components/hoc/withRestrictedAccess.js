/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router';
import { isLoggedIn } from '../../utils/handlers/authenticationHandlers';

const withRestrictedAccess = (BaseComponent, onlyForAdmin = false, user) => props => {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }

 let isAdmin;

 if (user) isAdmin = user.isAdmin;

  if (onlyForAdmin && !isAdmin) {
    return <Redirect to="/" />;
  }

  return <BaseComponent {...props} />;
};

export default withRestrictedAccess;
