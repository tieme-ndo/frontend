import axios from 'axios';
import { URL } from './../utils/generalVariables';

export const getUserHandler = (token, username) => {
  if (!username || typeof username !== "string") {
    return new Error("Make sure you're passing a valid username address and a password that's at least 8 characters long")
  }

  return axios.get(`${URL}/users/${username}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      if (res.data) {
        return res.data.user
      }
    })
    .catch(error => {
      return new Error(error)
    })
}

export const changePasswordHandler = (token, newPassword) => {
  if (!username || typeof username !== "string") {
    return new Error("Make sure you're passing a valid username and a password that's at least 8 characters long")
  }

  return axios.put(`${URL}/me/reset-password`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, { newPassword })
    .then(res => {
      // What should I return here?
    })

    .catch(error => {
      return new Error(error)
    })
}

export const deleteUserHandler = (token) => {

}