import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

import validateResetPassword from './resetPasswordValidation';
import PasswordResetForm from './PasswordResetForm';
import { changePasswordHandler } from '../../../utils/handlers/userHandlers';

const PasswordReset = ({ history }) => {
  const [state, updateState] = useState({
    currentPassword: '',
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

    const { currentPassword, newPassword, confirmNewPassword } = state;

    const { errors, isValid } = await validateResetPassword({
      currentPassword,
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

    try {
      const responseMessage = await changePasswordHandler(
        currentPassword,
        newPassword
      );

      if (responseMessage) {
        toast.success(responseMessage);

        updateState(prevState => ({
          ...prevState,
          errors: {},
          resetting: false
        }));
        history.push('/');
      } else {
        updateState(prevState => ({
          ...prevState,
          resetting: false
        }));
      }
    } catch (error) {
      updateState(prevState => ({
        ...prevState,
        errors: error,
        resetting: false
      }));
      toast.error(error.message);
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
