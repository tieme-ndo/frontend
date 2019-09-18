import axios from "axios";
import { pathObj, tokenKey } from "../generalVariables";
import { setHeaders } from "../requestHeaders";
import jwtDecode from "jwt-decode";

export const loginHandler = ({ username, password }) => {
  // With the finalization of the database schema, more checks can be implemented (with separate error-messages)
  if (
    !username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string" ||
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
        return res.data;
      } else {
        throw new Error("Oh no, there was no token returned by the database!");
      }
    })
    .catch(error => {
      throw new Error(error.response.data)
    });
};

// There is no `addUserHandler` since the only avenue for adding new users should be when an admin registers a new user
// Therefore, whenever a new user is added, this method should be used. In essence, it replicates the CRUD functionality.
export const registrationHandler = ({ username, password, isAdmin }) => {
  // Once database schema is finalized, this conditional check could be refactored into a separate utility function.
  return axios
    .post(
      `${pathObj.registrationPath}`,
      {
        username,
        password,
        isAdmin
      },
      setHeaders()
    )
    .then(res => {
      if (res.data.success) {
        return res.data.message;
      }
    })
    .catch(error => {
      delete error.response.data.errors.status;
      throw new Error(error.response.data.errors)
    });
};

export const checkAndStoreToken = token => {
  // More token validation and checking can be added later
  if (typeof token !== "string") {
    throw new Error("The token is supposed to be a string!");
  } else {
    localStorage.setItem(tokenKey, token);
  }
};

export const logout = () => {
  if (getToken()) {
    localStorage.removeItem(tokenKey);
  }
};

export const getUser = () => {
  const token = getToken();
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem(tokenKey);
      return false;
    }
    return decodedToken;
  } else {
    return false;
  }
};

export const getToken = () => {
  return window.localStorage.getItem(tokenKey);
};

export const isLoggedIn = (token = getToken()) => {
  // TODO: This needs to be improved checking the token with decryption, checking payload for expiration
  // Returns a boolean if a valid token is found in the localStorage
  if (token) {
    const tokenIsCorrectlyFormatted = token.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
    return !!token && !!tokenIsCorrectlyFormatted;
  }
  return false;
};
// DEBATE: adding a separate logoutHandler to account for clearing localStorage, as well as the user objects.
// However, since we do not use Redux, the use-case for this is limited. Will discuss during stand-up.
