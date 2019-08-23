/**
 * @TODO Add environment variable with URL based on environment
 */
const URL = 'https://tieme-ndo-backend-staging1.herokuapp.com/api/v1';

// Path contains the 'base' of the URL but does not includes params
// These will have to be included separately in the Axios request
export const pathObj = {
  getUserPath: `${URL}/user`,
  loginPath: `${URL}/user/login`,
  changePasswordPath: `${URL}/user/change-password`,
  registrationPath: `${URL}/user/signup`,
  deleteUserPath: `${URL}/user`,

  getFarmersPath: `${URL}/farmers`,
  addFarmerPath: `${URL}/farmers`,
  updateFarmerPath: `${URL}/farmers`,
  deleteFarmerPath: `${URL}/farmers`
};

export const tokenKey = 'tokenTiemeNdo';
