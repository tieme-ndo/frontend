// Retrieving URL from environment - compatible with deployment context
// When running on a local machine, the URL will default to REACT_APP_API_URL - provided the app is run using `yarn start`
// When hosted on Netlify, it'll retrieve the requisite environmental URL and target the appropriate API
export const URL = process.env.REACT_APP_API_URL || "https://tieme-ndo-backend-staging1.herokuapp.com";

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
