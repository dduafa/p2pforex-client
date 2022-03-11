import * as Yup from 'yup';

const changePasswordSchema = Yup.object().shape({
  password: Yup.string().required().label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required()
    .label('Confirm Password'),
});

export default changePasswordSchema;
