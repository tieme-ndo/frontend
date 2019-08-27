/* eslint-disable react/display-name */
import React from 'react';

const withRestrictionToNonLoggedIn = (
  BaseComponent,
  onlyForAdmin = false
) => props => {
  return <BaseComponent {...props} />;
};

export default withRestrictionToNonLoggedIn;
