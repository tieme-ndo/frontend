import React from 'react';
import { useState } from 'react';

import { registrationHandler } from '../../../utils/handlers/authenticationHandlers';
import AddStaffForm from './AddStaffForm';
import validateAddStaffForm from './AddStaffValidation';
import { toast } from 'react-toastify';

function AddStaff() {
  const [state, updateState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    createAccount: false,
    errors: {}
  });

  const handleChange = (e, { name, value }) => {
    updateState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const checkboxChange = (e, { name, checked }) => {
    updateState(prevState => ({ ...prevState, isAdmin: checked }));
  };

  const handleSubmit = async () => {
    updateState(prevState => {
      return {
        ...prevState,
        createAccount: true
      };
    });

    const credential = {
      username: state.username,
      password: state.password,
      confirmPassword: state.confirmPassword
    };

    const { errors, isValid } = await validateAddStaffForm(credential);

    if (!isValid) {
      return updateState(prevState => ({
        ...prevState,
        createAccount: false,
        errors
      }));
    }

    if (state.password !== state.confirmPassword) {
      return updateState(prevState => ({
        ...prevState,
        createAccount: false,
        password: '',
        confirmPassword: '',
        errors: [{ password: 'Passwords do not match' }]
      }));
    }

    try {
      const response = await registrationHandler({
        username: state.username,
        password: state.password,
        isAdmin: state.isAdmin
      });
      if (Array.isArray(response)) {
        const [errors] = response;

        toast.error(errors.message);

        return updateState(prevState => ({
          ...prevState,
          createAccount: false
        }));
      } else if (response && response.message === 'username already exists') {
        toast.error('username already exists');

        return updateState(prevState => ({
          ...prevState,
          createAccount: false,
          errors: {}
        }));
      } else if (response === 'New user created') {
        toast.success('New user created');

        return updateState(prevState => ({
          ...prevState,
          username: '',
          password: '',
          confirmPassword: '',
          isAdmin: false,
          createAccount: false
        }));
      }
    } catch (error) {
      updateState(prevState => ({
        ...prevState,
        createAccount: false
      }));
    }
  };

  return (
    <AddStaffForm
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      checkboxChange={checkboxChange}
    />
  );
}

export default AddStaff;
