import axios from 'axios';

const axiosWithHeader = () => {
  const tokenFromBrowser = localStorage.getItem('tokenTiemeNdo');

  const token = tokenFromBrowser ? tokenFromBrowser : false;

  const axiosInstance = axios.create({
    headers: {
      Authorization: token
    }
  });

  return axiosInstance;
};

export default axiosWithHeader;
