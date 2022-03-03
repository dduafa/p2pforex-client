import { useFormik } from 'formik';
import { signupUser } from '../auth-service';

import styled from 'styled-components';
import signUpSchema from './signup-schema';
import { useDispatch } from 'react-redux';

const SignupComponent = () => {
  const dispatch = useDispatch();

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values,
  } = useFormik({
    initialValues: {
      password: '',
      firstname: '',
      lastname: '',
    },

    validationSchema: signUpSchema,

    async onSubmit(payload, { setSubmitting }) {
      try {
        setSubmitting(true);
        await dispatch(signupUser(payload));
      } catch (e) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            aria-label="First name"
            name="firstname"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="First name"
            type="text"
            value={values.firstname}
          />
        </div>

        <div>
          <input
            aria-label="Last Name"
            name="lastname"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Last name"
            type="text"
            value={values.lastname}
          />
        </div>
        <div>
          <input
            aria-label="Password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            value={values.password}
          />
        </div>
        {touched.password && errors.password && (
          <small className="text-danger form-text">{errors.password}</small>
        )}
        <button type="submit" disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  width: 50px;
`;

export default SignupComponent;
