import axios from 'axios';
import tokenKey from './generalVariables';

const axiosWithHeader = () => {
  const token = localStorage.getItem(tokenKey);

  const axiosInstance = axios.create({
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  });

  return axiosInstance;
};

export default axiosWithHeader;
