import React from 'react';
import { useState } from 'react';
import {
  registrationHandler,
  getToken
} from '../../../utils/handlers/authenticationHandlers';
import CreateAccountForm from './CreateAccountForm';
import validateCreateAccountForm from './createAccountValidation';

function CreateAccount() {
  const [state, setState] = useState({
    username: '',
    password: '',
    isAdmin: false,
    errors: {},
    createAccount: false,
    message: ''
  });

  const handleChange = (e, { name, value }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
      message: '',
      errors: {}
    }));
  };

  const checkboxChange = (e, { name, checked }) => {
    setState(prevState => ({ ...prevState, isAdmin: checked }));
  };

  const handleSubmit = async () => {
    setState(prevState => {
      return {
        ...prevState,
        createAccount: true
      };
    });

    const credential = {
      username: state.username,
      password: state.password
    };

    const { errors, isValid } = await validateCreateAccountForm(credential);

    if (!isValid) {
      return setState(prevState => ({
        ...prevState,
        errors,
        createAccount: false
      }));
    }

    const response = await registrationHandler({
      username: state.username,
      password: state.password,
      isAdmin: state.isAdmin,
      token: getToken()
    });

    if (Array.isArray(response)) {
      const [errors] = response;
      delete errors.key;
      return setState(prevState => ({
        ...prevState,
        createAccount: true,
        errors: [errors]
      }));
    } else if (response && response.message === 'username already exists') {
      return setState(prevState => ({
        ...prevState,
        createAccount: true,
        errors: [response]
      }));
    } else if (response === 'New user created') {
      return setState(prevState => ({
        ...prevState,
        message: 'New user created',
        username: '',
        password: '',
        isAdmin: false,
        errors: {},
        createAccount: false
      }));
    }
  };

  return (
    <CreateAccountForm
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      checkboxChange={checkboxChange}
    />
  );
}

export default CreateAccount;
