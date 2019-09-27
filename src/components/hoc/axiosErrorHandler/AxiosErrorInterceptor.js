import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AxiosErrorInterceptor = WrappedComponent => {
  return function Handler() {
    useEffect(() => {
      const reqIn = axios.interceptors.request.use(req => req);
      const resIn = axios.interceptors.response.use(
        function(response) {
          return response;
        },
        function(error) {
          if (error.message === 'Network Error') {
            toast.error('Network error, please check your internet connection');
          }
          return Promise.reject(error);
        }
      );
      return () => {
        axios.interceptors.request.eject(reqIn);
        axios.interceptors.response.eject(resIn);
      };
    }, []);
    return <WrappedComponent />;
  };
};

export default AxiosErrorInterceptor;
