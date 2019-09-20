import * as yup from 'yup';

// reset password schema
const resetPasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Current password is required')
    .min(6, 'Current password must be at least 6 characers long')
    .max(40, 'Current password must be less than 40 characters long')
    .trim(),
  newPassword: yup
    .string()
    .notOneOf(
      [yup.ref('currentPassword')],
      'Password is the same as current password'
    )
    .required('New password is required')
    .min(6, 'New password must be at least 6 characers long')
    .max(40, 'New password must be less than 40 characters long')
    .trim(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'New passwords must match')
    .required('Confirmation of new password is required')
    .trim()
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
