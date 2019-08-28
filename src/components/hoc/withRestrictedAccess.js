/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router';
import { isLoggedIn } from '../../utils/handlers/authenticationHandlers';

const withRestrictedAccess = (BaseComponent, onlyForAdmin = false) => props => {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }

 /*
      TODO: Until admin validation is ready, all the users will be treated as admins
 */
 const isAdmin = true;

  if (onlyForAdmin && !isAdmin) {
    return <Redirect to="/" />;
  }

  return <BaseComponent {...props} />;
};

export default withRestrictedAccess;
