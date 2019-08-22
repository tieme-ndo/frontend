import React from 'react';

const CreateAccount = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const isAdminRef = React.useRef();

  return (
    <div>
      <h2>Create New Account</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} id="username" name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} id="password" name="password" type="password" />
        </div>
        <div>
          <label htmlFor="is-admin">Is Admin?</label>
          <input ref={isAdminRef} type="checkbox" id="is-admin" name="is-admin" />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
