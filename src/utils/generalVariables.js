// Retrieving URL from environment - compatible with deployment context
export const URL = process.env.API_URL || process.env.REACT_APP_API_URL;

// Path contains the 'base' of the URL but does not includes params
// These will have to be included separately in the Axios request
export const pathObj = {
  loginPath: `${URL}/login`,
  registrationPath: `${URL}/register`,

  getUserPath: `${URL}/users`,
  changePasswordPath: `${URL}/users/change-password`,
  deleteUserPath: `${URL}/users`,

  getFarmersPath: `${URL}/farmers`,
  addFarmerPath: `${URL}/farmers`,
  updateFarmerPath: `${URL}/farmers`,
  deleteFarmerPath: `${URL}/farmers`,
}