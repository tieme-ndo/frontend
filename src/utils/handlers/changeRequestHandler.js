import axios from 'axios';
import { toast } from 'react-toastify';
import { pathObj } from '../generalVariables';
import { setHeaders } from '../requestHeaders';

export const getAllChangeRequests = () => {
  return axios
    .get(`${pathObj.getEdits}`, setHeaders())
    .then(res => {
      if (res.data) {
        return res.data.changeRequests;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};

export const getChangeRequestById = requestId => {
  if (!requestId || typeof requestId !== 'string') {
    return new Error("Make sure you're passing an edit id!");
  }

  return axios
    .get(`${pathObj.getEdits}/${requestId}`, setHeaders())
    .then(res => {
      if (res.data) {
        return res.data;
      }
    })
    .catch(error => {
      throw new Error(error.response.data.message);
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
        history.push('/');
        appStateShouldUpdate(true);
        return res.data;
      }
    })
    .catch(error => {
      return new Error(error);
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
        history.push('/');
        appStateShouldUpdate(true);
        return res.data;
      }
    })
    .catch(error => {
      return new Error(error);
    });
};
