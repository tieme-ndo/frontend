import axios from 'axios';
import { pathObj } from '../generalVariables';
import { setHeaders } from '../requestHeaders';

export const getUserHandler = userId => {
  if (!userId || typeof userId !== 'string') {
    throw new Error("Make sure you're passing a valid user ID!");
  }

  return axios
    .get(`${pathObj.getUserHandler}/${userId}`, setHeaders())
    .then(res => {
      if (res.data) {
        return res.data.user;
      }
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const changePasswordHandler = (currentPassword, newPassword) => {
  return axios
    .put(
      `${pathObj.changePasswordPath}`,
      { currentPassword, password: newPassword },
      setHeaders()
    )
    .then(res => {
      if (res.data) {
        return res.data.message;
      }
    })
    .catch(error => {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      // "else" is already handled by HOC intercepting network errors, all other erros have response.
    });
};

export const deleteUserHandler = userId => {
  return axios
    .delete(`${pathObj.deleteUserPath}/${userId}`, setHeaders())
    .then(res => {
      if (res.data.successMessage) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      throw new Error(error);
    });
};
