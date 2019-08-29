import * as yup from 'yup';
import errorFormatter from '../util//errorFormatter';

// login schema
const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

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
