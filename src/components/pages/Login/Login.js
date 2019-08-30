import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  loginHandler,
  getUser,
  isLoggedIn
} from '../../../utils/handlers/authenticationHandlers';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import validateLoginForm from './loginValidation';

function Login({ setUser, ...props}) {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: {},
    loginIn: false
  });


  const handleChange = (e, { name, value }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    setState(prevState => {
      return {
        ...prevState,
        loginIn: true
      };
    });

    const credential = {
      username: state.username,
      password: state.password
    };

    const { errors, isValid } = await validateLoginForm(credential);

    if (!isValid) {
      return setState(prevState => ({
        ...prevState,
        errors,
        loginIn: false
      }));
    }

    const receivedUser = await loginHandler({
        username: state.username,
        password: state.password
    });

    // if the response has token => successful login
    if (receivedUser.hasOwnProperty('token')) {
        setUser(getUser());

        props.history.push('/');
    } else {
        setState(prevState => ({
            ...prevState,
            errors: [{ error: receivedUser.message }],
            loginIn: false
        }))
    }
}

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
