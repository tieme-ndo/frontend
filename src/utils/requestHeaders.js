import { getToken } from './handlers/authenticationHandlers';

export const setHeaders = () => {
  const token = getToken()

  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  };
};
