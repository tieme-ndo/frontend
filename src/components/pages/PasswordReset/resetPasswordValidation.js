import * as yup from 'yup';

// reset password schema
const resetPasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Current Password is required')
    .min(6)
    .max(40)
    .trim(),
  newPassword: yup
    .string()
    .notOneOf([yup.ref('currentPassword')], "Password is the same as current password")
    .required('New Password is required')
    .min(6)
    .max(40)
    .trim(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], "New passwords don't match")
    .required('Confirm Password is required')
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
