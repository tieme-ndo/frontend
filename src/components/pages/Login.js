import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  BackgroundDiv,
  FormContainer,
  StyledH1,
  StyledInput
} from "../styles/styledlogin.js";

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
        } else {
          changeStatus({ ...status, error: true });
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
    <BackgroundDiv>
      <FormContainer>
        <StyledH1>Log In</StyledH1>
        <form onSubmit={submitLogin}>
          <StyledInput
            type="email"
            placeholder="Enter Email"
            value={credentials.email}
            onChange={e =>
              changeCredentials({ ...credentials, email: e.target.value })
            }
          />
          <StyledInput
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={e =>
              changeCredentials({ ...credentials, password: e.target.value })
            }
          />
          <StyledInput
            type="submit"
            value={status.loading ? "Loading..." : "Log In"}
          />
          {status.error && <div>Wrong email or password, please try again</div>}
        </form>
      </FormContainer>
    </BackgroundDiv>
  );
}

export default Login;
