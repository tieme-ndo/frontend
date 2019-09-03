import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

import validateResetPassword from './resetPasswordValidation';
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

  const handleSubmit = async () => {
    updateState(prevState => {
      return {
        ...prevState,
        resetting: true
      };
    });

    const { oldPassword, newPassword, confirmNewPassword } = state;

    const { errors, isValid } = await validateResetPassword({
      oldPassword,
      newPassword,
      confirmNewPassword
    });

    if (!isValid) {
      toast.error('All fields are required', {
        position: toast.POSITION.TOP_CENTER
      });

      return updateState(prevState => ({
        ...prevState,
        errors,
        resetting: false
      }));
    }
  };

  return (
    <PasswordResetForm
      state={state}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default PasswordReset;
