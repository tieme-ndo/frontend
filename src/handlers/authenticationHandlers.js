import axios from 'axios';

import { pathObj } from './../utils/generalVariables';

export const loginHandler = ({ username, password }) => {
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

export const registrationHandler = ({ username, password }) => {
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
  if (typeof token !== "string") {
    return new Error('The token is supposed to be a string!')
  } else {
    localStorage.setItem('token', token)
  }
}