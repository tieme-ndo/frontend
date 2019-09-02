import React from 'react';
import { useState } from 'react';

import PasswordResetForm from './PasswordResetForm';

const PasswordReset = () => {
  const [state, updateState] = useState({
    newPassword: '',
    confirmNewPassword: '',
    oldPassword: '',
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
