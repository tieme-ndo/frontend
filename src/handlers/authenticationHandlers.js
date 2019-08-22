import axios from 'axios';

import { pathObj } from './../utils/generalVariables';

export const loginHandler = ({ username, password }) => {
  // With the finalization of the database schema, more checks can be implemented (with separate error-messages)
  if (!username || !password || typeof username !== "string" || typeof password !== "string" || password.length < 8 ) {
    return new Error("Make sure you're passing a valid username and a password that's at least 8 characters long")
  }

  return axios.post(`${pathObj.loginPath}`, { 
    username, 
    password,
  })
    .then(res => {
      if (res.token) {
        checkAndStoreToken(res.data.token);
        return res.data.user
      } else {
        return new Error('Oh no, there was no token returned by the database!')
      }
    })
    .catch(error => {
      return new Error(error)
    })
}

// There is no `addUserHandler` since the only avenue for adding new users should be when an admin registers a new user
// Therefore, whenever a new user is added, this method should be used. In essence, it replicates the CRUD functionality.
export const registrationHandler = ({ username, password }) => {
  // Once database schema is finalized, this conditional check could be refactored into a separate utility function.
  if (!username || !password || typeof username !== "string" || typeof password !== "string" || password.length < 8 ) {
    return new Error("Make sure you're passing a valid username and a password that's at least 8 characters long")
  }
  
  return axios.post(`${pathObj.registrationPath}`, { 
    username, 
    password,
  })
    .then(res => {
      if (res.data) {
        checkAndStoreToken(res.data.token);
        return res.data.user
      } else {
        return new Error('Something went wrong with your registration. Please try again.')
      }
    })
    .catch(error => {
      return new Error('The request failed. There might be something wrong with your connection.')
    })
}

export const checkAndStoreToken = (token) => {
  // More token validation and checking can be added later
  if (typeof token !== "string") {
    return new Error('The token is supposed to be a string!')
  } else {
    localStorage.setItem('token', token)
  }
}

// DEBATE: adding a separate logoutHandler to account for clearing localStorage, as well as the user objects.
// However, since we do not use Redux, the use-case for this is limited. Will discuss during stand-up.