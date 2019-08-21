import axios from 'axios';

import { URL } from './../utils/generalVariables';

export const loginHandler = ({ email, password }) => {
  if (!email || !password || typeof email !== "string" || typeof password !== "string" || password.length < 8 ) {
    return new Error("Make sure you're passing a valid email address and a password that's at least 8 characters long")
  }

  axios.post(`${URL}/login`, { 
      email, 
      password,
    })
    .then(res => {
      if (res.token) {
        return checkAndStoreToken(res.data.token);
      } else {
        return new Error('Oh no, there was no token returned by the database!')
      }
    })
    .catch(error => {
      return new Error(error)
    })
}

export const registrationHandler = ({ email, password }) => {
  if (!email || !password || typeof email !== "string" || typeof password !== "string" || password.length < 8 ) {
    return new Error("Make sure you're passing a valid email address and a password that's at least 8 characters long")
  }
  
  axios.post(`${URL}/register`, { 
    email, 
    password,
  })
  .then(res => {
    if (res.data) {
      
      // Calls login 
      loginHandler({
        email, 
        password,
      })
    } else {
      return new Error('Something went wrong with your registration. Please try again.')
    }
  })
  .catch(error => {
    return new Error('The request failed. There might be something wrong with your connection.')
  })
}

export const checkAndStoreToken = (token) => {
  if (typeof token !== "string") {
    return new Error('The token is supposed to be a string!')
  } else {
    localStorage.setItem('token', token)
  }
}