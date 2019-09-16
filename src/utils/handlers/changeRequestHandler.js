import axios from 'axios';
import { pathObj } from '../generalVariables';
import { setHeaders } from '../requestHeaders';
import { getToken } from './authenticationHandlers';

export const getAllChangeRequests = () => {
  const token = getToken();
  return axios
    .get(`${pathObj.getEdits}`, setHeaders(token))
    .then(res => {
      if (res.data) {
        return res.data.changeRequests;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const getChangeRequestsById = requestId => {
  const token = getToken();
  if (!requestId || typeof requestId !== 'string') {
    return new Error("Make sure you're passing an edit id!");
  }

  return axios
    .get(`${pathObj.getEdits}/${requestId}`, setHeaders(token))
    .then(res => {
      if (res.data) {
        return res.data;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const approveChangeRequest = (requestId, history) => {
  const token = getToken();
  const headers = setHeaders(token);
  console.log(token);
  console.log(headers);
  return axios
    .post(`${pathObj.getEdits}/${requestId}/approve`, {}, setHeaders(token))
    .then(res => {
      if (res.data)
      {
        history.push('/')
        return res.data;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const rejectChangeRequest = (requestId, history) => {
  console.log('Here2');
  const token = getToken();
  return axios
    .post(`${pathObj.getEdits}/${requestId}/approve`, setHeaders(token))
    .then(res => {
      if (res.data)
      {
        history.push('/')
        return res.data;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};
