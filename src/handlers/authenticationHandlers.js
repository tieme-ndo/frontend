import axios from "axios";
import { pathObj } from "./../utils/generalVariables";
import { setHeaders } from "./../utils/requestHeaders";

import { pathObj, tokenKey } from './../utils/generalVariables';
import { setHeaders } from './../utils/requestHeaders';

export const loginHandler = ({ username, password }) => {
  // With the finalization of the database schema, more checks can be implemented (with separate error-messages)
  if (
    !username ||
    !password ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    password.length < 6
  ) {
    throw new Error(
      "Make sure you're passing a valid username and a password that's at least 8 characters long"
    );
  }

  return axios
    .post(`${pathObj.loginPath}`, {
      username,
      password
    })
    .then(res => {
      if (res.data.token) {
        checkAndStoreToken(res.data.token);
        return res.data.user;
      } else {
        return new Error('Oh no, there was no token returned by the database!');
      }
    })
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};

// There is no `addUserHandler` since the only avenue for adding new users should be when an admin registers a new user
// Therefore, whenever a new user is added, this method should be used. In essence, it replicates the CRUD functionality.
export const registrationHandler = ({ username, password, isAdmin, token }) => {
  // Once database schema is finalized, this conditional check could be refactored into a separate utility function.
  if (
    !username ||
    !password ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    password.length < 6
  ) {
    throw new Error(
      "Make sure you're passing a valid username and a password that's at least 8 characters long"
    );
  }

  return axios
    .post(
      `${pathObj.registrationPath}`,
      {
        username,
        password,
        isAdmin
      },
      setHeaders(token)
    )
    .then(res => {
      if (res.data.success) {
        return res.data.message;
      } else {
        return new Error(
          'Something went wrong with your registration. Please try again.'
        );
      }
    })
    .catch(error => {
      throw error.response.data.message;
    });
};

export const checkAndStoreToken = token => {
  // More token validation and checking can be added later
  if (typeof token !== 'string') {
    return new Error('The token is supposed to be a string!');
  } else {
    localStorage.setItem(tokenKey, token);
  }
};

export const logout = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
};

export const isLoggedIn = () => {
  // This needs to be improved checking the token with decryption, checking payload for expiration
  // Returns a boolean if a valid token is found in the localStorage
  return tokenKey in window.localStorage;
};

export const getToken = () => {
  return window.localStorage.getItem(tokenKey);
};

// DEBATE: adding a separate logoutHandler to account for clearing localStorage, as well as the user objects.
// However, since we do not use Redux, the use-case for this is limited. Will discuss during stand-up.
