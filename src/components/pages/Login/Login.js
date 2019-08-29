import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  loginHandler,
//   getToken
} from '../../../utils/handlers/authenticationHandlers';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import validateLoginForm from './loginValidation';

function Login({ setUser }) {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: {},
    loginIn: false
  });

//   const [status, changeStatus] = useState({
//     loading: false,
//     error: false
//   });

//   const submitLogin = async event => {
//     event.preventDefault();
//     changeStatus({ ...status, loading: true });
//     try {
//       const receivedUser = await loginHandler({
//         username: credentials.username,
//         password: credentials.password
//       });
//       changeStatus({ error: false, loading: false });
//       setUser(receivedUser);
//       return <Redirect to="/" />;
//     } catch (err) {
//       changeStatus({ error: true, loading: false });
//     }
//   };

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
        setUser(receivedUser);
        setState(prevState => ({
            ...prevState,
            loginIn: false
          }));

        return <Redirect to="/" />;
    } else {
        setState(prevState => ({
            ...prevState,
            errors: { error: receivedUser.message },
            loginIn: false
        }))
    }

}



//   if (getToken()) {
//     return <Redirect to="/" />;
//   }

  return (
    <LoginForm
    state={state}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
  />
    // <div>
    //   <div>
    //     <h1>Log In</h1>
    //     <form onSubmit={submitLogin}>
    //       <input
    //         className="ui field"
    //         type="username"
    //         placeholder="Enter Username"
    //         value={credentials.username}
    //         onChange={e =>
    //           changeCredentials({ ...credentials, username: e.target.value })
    //         }
    //       />
    //       <input
    //         type="password"
    //         placeholder="Enter Password"
    //         value={credentials.password}
    //         onChange={e =>
    //           changeCredentials({ ...credentials, password: e.target.value })
    //         }
    //       />
    //       {status.loading ? (
    //         <input type="submit" value="Loading..." disabled />
    //       ) : (
    //         <Button content="Primary" primary />
    //       )}
    //       {status.error && (
    //         <div>Wrong username or password, please try again</div>
    //       )}
    //     </form>
    //   </div>
    // </div>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;
