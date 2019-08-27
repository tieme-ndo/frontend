// Retrieving URL from environment - compatible with deployment context
// When running on a local machine, the URL will default to REACT_APP_API_URL - provided the app is run using `yarn start`
// When hosted on Netlify, it'll retrieve the requisite environmental URL and target the appropriate API
export const URL = process.env.REACT_APP_API_URL || "https://tieme-ndo-backend-staging1.herokuapp.com";
const API_VERSION = '/api/v1';

// Path contains the 'base' of the URL but does not includes params
// These will have to be included separately in the Axios request
export const pathObj = {
         getUserPath: `${URL}${API_VERSION}/user`,
         loginPath: `${URL}${API_VERSION}/user/login`,
         changePasswordPath: `${URL}${API_VERSION}/user/change-password`,
         registrationPath: `${URL}${API_VERSION}/user/signup`,
         deleteUserPath: `${URL}${API_VERSION}/user`,

         getFarmersPath: `${URL}${API_VERSION}/farmers`,
         addFarmerPath: `${URL}${API_VERSION}/farmers`,
         updateFarmerPath: `${URL}${API_VERSION}/farmers`,
         deleteFarmerPath: `${URL}${API_VERSION}/farmers`
       };

export const tokenKey = 'tokenTiemeNdo';
