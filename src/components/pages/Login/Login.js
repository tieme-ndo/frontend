import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  loginHandler,
  getUser
} from '../../../utils/handlers/authenticationHandlers';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import validateLoginForm from './loginValidation';

function Login({ setUser, ...props }) {
  const [state, updateState] = useState({
    username: '',
    password: '',
    errors: {},
    loading: false
  });

  const handleChange = (e, { name, value }) => {
    updateState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    updateState(prevState => {
      return {
        ...prevState,
        loading: true
      };
    });

    const credential = {
      username: state.username,
      password: state.password
    };

    const { errors, isValid } = await validateLoginForm(credential);
    // if validation fails, stop loading and render error msg
    if (!isValid) {
      return updateState(prevState => ({
        ...prevState,
        errors,
        loading: false
      }));
    }
    try {
      // send request to server
      const receivedUser = await loginHandler({
        username: state.username,
        password: state.password
      });
      // if the response has token => successful login
      if (receivedUser.hasOwnProperty('token')) {
        setUser(getUser());

        props.history.push('/');
      } else {
        // on unsuccessful login, render server error message
        updateState(prevState => ({
          ...prevState,
          errors: [{ error: receivedUser.message }],
          loading: false
        }));
      }
    } catch (error) {
      updateState(prevState => ({
        ...prevState,
        errors: {},
        loading: false
      }));
    }
  };
  // check if user already exists, if yes (logged in), redirect to root
  if (getUser()) {
    return <Redirect to="/" />;
  }

  return (
    <LoginForm
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;
