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

export const cleanFarmersData = farmers => {
  let cleanedData = farmers.map(farmer => {
    const farmerData = {
      id: farmer._id,
      name: `${farmer.personalInfo.first_name} ${farmer.personalInfo.surname}`,
      communityName: farmer.personalInfo.community_name,
      farmLocation: farmer.farmInfo.location_of_farm,
      phoneNumber: farmer.personalInfo.Phone_1,
      guarantorName: `${farmer.guarantor.grt_first_name} ${farmer.guarantor.grt_surname}`,
      guarantorPhoneNumber: farmer.guarantor.grt_phone
    };
    return farmerData;
  });
  return cleanedData;
};

export const getIndividualFarmerHandler = farmerId => {
  const token = getToken();
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
    .patch(
      `${pathObj.updateFarmerPath}/${farmerId}/update`,
      changes,
      setHeaders(token)
    )
    .then(res => {
      if (res.data.success) {
        return res.data;
      }
    })
    .catch(error => {
      throw error;
    });
};

export const deleteFarmerHandler = farmerId => {
  const token = getToken();
  return axios
    .delete(`${pathObj.deleteFarmerPath}/${farmerId}/delete`, setHeaders(token))
    .then(res => {
      if (res.data.successMessage) {
        return res.data.successMessage;
      }
    })

    .catch(error => {
      return new Error(error);
    });
};
