import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

import validateResetPassword from './resetPasswordValidation';
import PasswordResetForm from './PasswordResetForm';
import { changePasswordHandler } from '../../../utils/handlers/userHandlers';

const PasswordReset = ({ logOut }) => {
  const [state, updateState] = useState({
    prevPassword: '',
    newPassword: '',
    confirmNewPassword: '',
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

    const { prevPassword, newPassword, confirmNewPassword } = state;

    const { errors, isValid } = await validateResetPassword({
      prevPassword,
      newPassword,
      confirmNewPassword
    });

    if (!isValid) {
      return updateState(prevState => ({
        ...prevState,
        errors,
        resetting: false
      }));
    }

    changePasswordHandler({ prevPassword: prevPassword, password: newPassword })
      .then(res => {
        toast.success('Password changed successfully');

        updateState(prevState => ({
          ...prevState,
          errors: {},
          resetting: false
        }));

        logOut();
      })
      .catch(error => {
        updateState(prevState => ({
          ...prevState,
          errors: error,
          resetting: false
        }));
      });
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
