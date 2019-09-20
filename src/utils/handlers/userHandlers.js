import axios from "axios";
import { pathObj } from "../generalVariables";
import { setHeaders } from "../requestHeaders";

export const getUserHandler = (userId) => {
  if (!userId || typeof userId !== 'string') {
    throw new Error("Make sure you're passing a valid user ID!");
  }

  return axios
    .get(`${pathObj.getUserHandler}/${userId}`, 
      setHeaders()
    )
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
    .put(`${pathObj.changePasswordPath}`, 
      {currentPassword, newPassword},
      setHeaders(), 
    )
    .then(res => {
      if (res.data) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      throw new Error(error);
    });
};

export const deleteUserHandler = (userId) => {
  return axios
    .delete(`${pathObj.deleteUserPath}/${userId}`, 
      setHeaders()
    )
    .then(res => {
      if (res.data.successMessage) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      throw new Error(error);
    });
};
