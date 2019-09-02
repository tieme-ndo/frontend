import * as yup from 'yup';


// login schema
const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(20)
    .trim()
    .required(),
  password: yup
    .string()
    .min(6)
    .max(40)
    .trim()
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
const validateLoginForm = credential => {
  return loginSchema
    .validate(credential, { abortEarly: false })
    .then(values => {
      const isValid = true;
      return { isValid, values };
    })
    .catch(err => errorFormatter(err));
};

export default validateLoginForm;
