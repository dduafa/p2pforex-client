import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  // email: Yup.string().email().required().label('Email'),
  firstname: Yup.string().required().label('First Name'),
  lastname: Yup.string().required().label('Last name'),
  password: Yup.string().required().label('Password'),
  // phonenumber: Yup.string().required().label('Phonenumber'),
  // role: Yup.string().notRequired().label('Role'),
});

export default signUpSchema;
