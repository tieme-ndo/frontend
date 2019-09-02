import * as yup from 'yup';

// reset password schema
const resetPasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(6)
    .required(),
  newPassword: yup
    .string()
    .min(6)
    .required(),
  confirmNewPassword: yup
    .string()
    .min(6)
    .required()
});

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

// validate against schema
const validateResetPassword = credential => {
  return resetPasswordSchema
    .validate(credential, { abortEarly: false })
    .then(values => {
      const isValid = true;
      return { isValid, values };
    })
    .catch(err => errorFormatter(err));
};

export default validateResetPassword;
