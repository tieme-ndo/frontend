export const setHeaders = token => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  };
};
