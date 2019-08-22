import React from 'react';

const CreateAccount = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const isAdminRef = React.useRef();

  const [errorMessage, setErrorMessage] = React.useState(undefined);
  const [message, setMessage] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);

  const onCreate = event => {
    event.preventDefault();
    setLoading(true);
    // To make request using client
    // if success, setMessage(message)
    // if error, setErrorMessage(error)
    // setLoading(false);
  };

  return (
    <div>
      <h2>Create New Account</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {message && <div className="message">{message}</div>}
      <form onSubmit={onCreate}>
        <div>
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} id="username" name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="is-admin">Is Admin?</label>
          <input
            ref={isAdminRef}
            type="checkbox"
            id="is-admin"
            name="is-admin"
          />
        </div>
        {loading ? (
          <button type="submit" disabled>
            Loading...
          </button>
        ) : (
          <button type="submit">Create Account</button>
        )}
      </form>
    </div>
  );
};

export default CreateAccount;
