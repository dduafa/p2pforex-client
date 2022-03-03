// import { withFormik } from 'formik';
// import SignupComponent from './signup-component';
// import signUpSchema from './signup-schema';
// import { FormValues } from './signup-component';
// import { signupUser } from '../auth-service';
// import { connect } from 'react-redux';
// import { ThunkDispatch, Action } from '@reduxjs/toolkit';

// type MyThunkDispatch = ThunkDispatch<FormValues, void, Action>;

// interface MyFormProps {
//   initialFirstname?: string;
//   initialLastname?: string;
//   initialPassword?: string;
//   singup: ({ firstname, lastname, password }: FormValues) => MyThunkDispatch;
// }

// const SignupForm = withFormik<MyFormProps, FormValues>({
//   mapPropsToValues: (props) => ({
//     firstname: '',
//     lastname: '',
//     password: '',
//   }),

//   validationSchema: signUpSchema,

//   handleSubmit(values, { props, setSubmitting }) {
//     try {
//       setSubmitting(true);
//       props.singup(values);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setSubmitting(false);
//     }
//   },
// })(SignupComponent);

// // const mapDispatchToProps = (dispatch: MyThunkDispatch) => ({
// //   singup: (userData: FormValues) => dispatch(signupUser(userData)),
// // });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<FormValues, void, Action>
// ) => ({
//   signup: (userData: FormValues) => dispatch(signupUser(userData)),
// });

// const SignupContainer = connect(null, mapDispatchToProps)(SignupForm);
// export default SignupContainer;

import React from 'react';

const SignupContainer = () => {
  return <div>SignupContainer</div>;
};

export default SignupContainer;
