import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

import validateResetPassword from './resetPasswordValidation';
import PasswordResetForm from './PasswordResetForm';
import axiosWithHeader from '../../../utils/axiosWithHeaders';
import { pathObj } from '../../../utils/generalVariables';

const PasswordReset = props => {
  const [state, updateState] = useState({
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

    const { newPassword, confirmNewPassword } = state;

    const { errors, isValid } = await validateResetPassword({
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

    axiosWithHeader()
      .put(`${pathObj.changePasswordPath}`, { password: state.newPassword })
      .then(res => {
        toast.success('Password reset successfully');

        updateState(prevState => ({
          ...prevState,
          errors: {},
          resetting: false
        }));

        localStorage.removeItem('tokenTiemeNdo');

        props.history.push('/');
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
