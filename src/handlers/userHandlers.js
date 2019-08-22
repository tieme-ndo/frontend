import axios from 'axios';
import { pathObj } from './../utils/generalVariables';

export const getUserHandler = (token, userId) => {
  if (!userId || typeof userId !== "string") {
    return new Error("Make sure you're passing a valid username address and a password that's at least 8 characters long")
  }

  return axios.get(`${pathObj.getUserHandler}/${userId}`, { 
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

export const changePasswordHandler = (token, userId, newPassword) => {
  if (!username || typeof username !== "string") {
    return new Error("Make sure you're passing a valid username and a password that's at least 8 characters long")
  }

  return axios.put(`${pathObj.changePasswordPath}/${userId}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, { newPassword })
    .then(res => {
      if (res.data) {
        return res.data.successMessage
      }
    })

    .catch(error => {
      return new Error(error)
    })
}

export const deleteUserHandler = (userId ,token) => {
  return axios.delete(`${pathObj.deleteUserPath}/${userId}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      if (res.data.successMessage) {
        return res.data.successMessage
      }
    })

    .catch(error => {
      return new Error(error)
    })
}