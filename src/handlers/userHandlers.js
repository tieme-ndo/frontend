import axios from "axios";
import { pathObj } from "./../utils/generalVariables";
import { setHeaders } from "./../utils/requestHeaders";
import * as jwt_decode from "jwt-decode";

export const getUserHandler = (token, userId) => {
  if (!userId || typeof userId !== 'string') {
    return new Error("Make sure you're passing a valid user ID!");
  }

  return axios
    .get(`${pathObj.getUserHandler}/${userId}`, setHeaders(token))
    .then(res => {
      if (res.data) {
        return res.data.user;
      }
    })
    .catch(error => {
      throw error;
    });
};

export const changePasswordHandler = (token, userId, newPassword) => {
  if (!userId || typeof userId !== 'string') {
    return new Error("Make sure you're passing a valid user ID!");
  }

  return axios
    .put(`${pathObj.changePasswordPath}/${userId}`, setHeaders(token), {
      newPassword
    })
    .then(res => {
      if (res.data) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      throw error;
    });
};

export const deleteUserHandler = (userId, token) => {
  return axios
    .delete(`${pathObj.deleteUserPath}/${userId}`, setHeaders(token))
    .then(res => {
      if (res.data.successMessage) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      return new Error(error);
    });
};

export const getUser = () => {
  let token = localStorage.getItem("tokenTiemeNdo");
  if (token) {
    token = jwt_decode(token);
    if (token.exp < Date.now()) {
      localStorage.removeItem("tokenTiemeNdo");
      return false;
    }
    return token;
  }
  else{
    return false;
  }
};
