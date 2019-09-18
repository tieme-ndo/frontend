import axios from 'axios';
import { toast } from 'react-toastify';
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
      throw new Error(error);
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
      throw new Error(error);
    });
};

export const approveChangeRequest = (
  requestId,
  history,
  appStateShouldUpdate
) => {
  return axios
    .post(`${pathObj.getEdits}/${requestId}/approve`, {}, setHeaders())
    .then(res => {
      if (res.data) {
        toast.success('Farmer record approved');
        appStateShouldUpdate(true);
        history.push('/');
        return res.data;
      }
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const rejectChangeRequest = (
  requestId,
  history,
  appStateShouldUpdate
) => {
  return axios
    .post(`${pathObj.getEdits}/${requestId}/decline`, {}, setHeaders())
    .then(res => {
      if (res.data) {
        toast.success('Farmer record rejected');
        appStateShouldUpdate(true);
        history.push('/');
        return res.data;
      }
    })
    .catch(error => {
      throw new Error(error);
    });
};
