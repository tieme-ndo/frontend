import React, { useState } from "react";
import { Redirect /* , Link  */ } from "react-router-dom";

function Login(props) {
  const [credentials, changeCredentials] = useState({
    email: "",
    password: ""
  });

  const submitLogin = event => {
    event.preventDefault();
    props.loginUser(credentials).then(res => {
      if (res.status === 200) props.history.push("/home");
    });
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/home" />;
  }

  return (
    <form display={localStorage.getItem("token") ? "none" : "block"}>
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
            value={state.password}
            onChange={e =>
              changeCredentials({ ...credentials, password: e.target.value })
            }
          />
          <input type="submit" value={props.loading ? "Loading..." : "LOGIN"} />
          {props.error && <div>Wrong email or password, please try again</div>}
        </form>
        {/* <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span> */}
      </div>
    </form>
  );
}

export default Login;
