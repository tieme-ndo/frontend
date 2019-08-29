import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.jsx';
import validateLoginForm from '../../../validations/login';
import { BASE_API_URL } from '../../../constants/constants';

const Login = props => {
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

    axios
      .post(`${BASE_API_URL}/user/login`, credential)
      .then(res => {
        setState(prevState => {
          return {
            ...prevState,
            loginIn: false,
            errors: {}
          };
        });

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        props.history.push('/dashboard');
      })
      .catch(error => {
        setState(prevState => ({
          ...prevState,
          errors: { error: 'Could not log user in' },
          loginIn: false
        }));
      });
  };

  return (
    <LoginForm
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default Login;
