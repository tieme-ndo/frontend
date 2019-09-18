import axios from 'axios';
import { pathObj } from '../generalVariables';
import { setHeaders } from '../requestHeaders';

export const getFarmersHandler = () => {
  return axios
    .get(`${pathObj.getFarmersPath}`, 
      setHeaders())
    .then(res => {
      if (res.data) {
        return res.data.farmers;
      }
    })
    .catch(error => {
      throw new Error(error);
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
  if (!farmerId || typeof farmerId !== 'string') {
    throw new Error("Make sure you're passing a farmer id!");
  }

  return axios
    .get(`${pathObj.getFarmersPath}/${farmerId}`, 
      setHeaders())
    .then(res => {
      if (res.data) {
        return res.data.farmer;
      }
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const addFarmerHandler = (newFarmer) => {
  // Add separate function to exhaustively check all incoming inputs from the farmers form.
  // I.e. check for every single piece of data that's required in the form.
  if (!newFarmer) {
    throw new Error(
      "Make sure you're passing an object that contains the relevant information for the new farmer!"
    );
  }

  return axios
    .post(`${pathObj.addFarmerPath}`, 
      newFarmer,
      setHeaders(), 
    )
    .then(res => {
      if (res.data.successMessage) {
        return res.data;
      }
    })
    .catch(error => {
      // Note that this *should* not throw a new Error, but rather return the error array. 
      // This gets used to generate the toasts on the form itself.
      throw error;
    });
};

export const updateFarmerHandler = (changes, farmerId) => {
  // Once again, add a separate function to exhaustively check all incoming inputs
  if (!changes) {
    throw new Error("Make sure you're passing valid changes!");
  }

  return axios.patch(`${pathObj.updateFarmerPath}/${farmerId}/update`,
    changes,
    setHeaders(),
  )
    .then(res => {
      if (res.data.success) {
        return res.data;
      }
    })
    .catch(error => {
      // Note that this *should* not throw a new Error, but rather return the error array. 
      // This gets used to generate the toasts on the form itself.
      throw error;
    });
};

export const deleteFarmerHandler = (farmerId) => {
  return axios
    .delete(`${pathObj.deleteFarmerPath}/${farmerId}/delete`, 
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

export const uploadImageHandler = (imageFile) => {
  return axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      imageFile
    )
    .then(res => {
      return res
    })
    .catch(error => {
      throw new Error(error);
    });
}

export const getfarmerStatisticsHandler = () => {
  return axios
    .get(pathObj.getFarmersStatistic, 
      setHeaders()
    )
    .then(res => res.data)
    .catch(error => {
      throw new Error(error);
    });
};
