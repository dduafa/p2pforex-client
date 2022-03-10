import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().label('Password'),
});

export default signUpSchema;
