import React from 'react';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  loginHandler,
  getToken
} from '../../../utils/handlers/authenticationHandlers';
import PropTypes from 'prop-types';

function Login(props) {
  const [credentials, changeCredentials] = useState({
    username: '',
    password: ''
  });

  const [status, changeStatus] = useState({
    loading: false,
    error: false
  });

  const submitLogin = async event => {
    event.preventDefault();
    changeStatus({ ...status, loading: true });
    try {
      const receivedUser = await loginHandler({
        username: credentials.username,
        password: credentials.password
      });
      changeStatus({ error: false, loading: false });
      props.setUser(receivedUser);
      return <Redirect to="/" />;
    } catch (err) {
      changeStatus({ error: true, loading: false });
    }
  };

  if (getToken()) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div>
        <h1>Log In</h1>
        <form onSubmit={submitLogin}>
          <input
            className="ui field"
            type="username"
            placeholder="Enter Username"
            value={credentials.username}
            onChange={e =>
              changeCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={e =>
              changeCredentials({ ...credentials, password: e.target.value })
            }
          />
          {status.loading ? (
            <input type="submit" value="Loading..." disabled />
          ) : (
            <Button content="Primary" primary />
          )}
          {status.error && (
            <div>Wrong username or password, please try again</div>
          )}
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;
