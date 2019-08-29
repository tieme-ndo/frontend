/**
 * Format error to be array of object
 *
 * @param {Array} err
 */
const errorFormatter = err => {
  const errors = err.errors.map(error => {
    const key = error.split(' ')[0];

    return {
      [key]: error
    };
  });

  const isValid = false;

  return { errors, isValid };
};

export default errorFormatter;
