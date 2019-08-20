import React, { useState } from "react";
import { Redirect /* , Link  */ } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [credentials, changeCredentials] = useState({
    email: "",
    password: ""
  });

  const [status, changeStatus] = useState({
    loading: false,
    error: false
  });

  const submitLogin = event => {
    event.preventDefault();
    changeStatus({ ...status, loading: true });
    axios
      .put("https://tieme-ndo-backend-production.herokuapp.com/", {
        email: credentials.email,
        password: credentials.password
      })
      .then(res => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          changeStatus({ ...status, error: false });
        }
      })
      .catch(err => {
        changeStatus({ ...status, error: true });
      })
      .finally(changeStatus({ ...status, loading: false }));
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={submitLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={credentials.email}
          onChange={e =>
            changeCredentials({ ...credentials, email: e.target.value })
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
        <input type="submit" value={status.loading ? "Loading..." : "Log In"} />
        {status.error && <div>Wrong email or password, please try again</div>}
      </form>
    </div>
  );
}

export default Login;
