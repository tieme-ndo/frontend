import React from 'react';
import { useState } from 'react';

import PasswordResetForm from './PasswordResetForm';

const PasswordReset = props => {
  const [state, updateState] = useState({
    newPassword: '',
    errors: {},
    resetting: false
  });

  const handleInputChange = (e, { name, value }) => {
    updateState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {};

  // const { errors, isValid } = await validateLoginForm(credential);

  return (
    <PasswordResetForm
      state={state}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default PasswordReset;
