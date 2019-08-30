import axios from 'axios';
import { pathObj } from '../generalVariables';
import { setHeaders } from '../requestHeaders';
import { getToken } from './authenticationHandlers';

export const getFarmersHandler = () => {
  const token = getToken();
  return axios
    .get(`${pathObj.getFarmersPath}`, setHeaders(token))
    .then(res => {
      if (res.data) {
        return res.data.farmers;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const getIndividualFarmerHandler = (farmerId, token) => {
  if (!farmerId || typeof farmerId !== 'string') {
    return new Error("Make sure you're passing a farmer id!");
  }

  return axios
    .get(`${pathObj.getFarmersPath}/${farmerId}`, setHeaders(token))
    .then(res => {
      if (res.data) {
        return res.data.farmer;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const addFarmerHandler = (newFarmer, token) => {
  // Add separate function to exhaustively check all incoming inputs from the farmers form.
  // I.e. check for every single piece of data that's required in the form.
  if (!newFarmer) {
    return new Error(
      "Make sure you're passing an object that contains the relevant information for the new farmer!"
    );
  }

  return axios
    .post(`${pathObj.addFarmerPath}`, setHeaders(token), newFarmer)
    .then(res => {
      if (res.data.successMessage) {
        return res.data;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const updateFarmerHandler = (changes, farmerId, token) => {
  // Once again, add a separate function to exhaustively check all incoming inputs
  if (!changes) {
    return new Error("Make sure you're passing valid changes!");
  }

  return axios
    .put(`${pathObj.updateFarmerPath}/${farmerId}`, setHeaders(token), {
      changes
    })
    .then(res => {
      if (res.data.successMessage) {
        return res.data;
      }
    })

    .catch(error => {
      return new Error(error);
    });
};

export const deleteFarmerHandler = (farmerId, token) => {
  return axios
    .delete(`${pathObj.deleteFarmerPath}/${farmerId}`, setHeaders(token))
    .then(res => {
      if (res.data.successMessage) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      return new Error(error);
    });
};