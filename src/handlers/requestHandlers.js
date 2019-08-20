import axios from 'axios';
import { URL } from './../utils/generalVariables';

export const loginHandler = (credentials) => {

  axios
    .post(URL, {
      email: credentials.email,
      password: credentials.password
    })
    .then(res => {
      if (res.token) {
        localStorage.setItem("token", res.token);
        changeStatus({ ...status, error: false });
      }
    })
    .catch(err => {
      changeStatus({ ...status, error: true });
    })
}


