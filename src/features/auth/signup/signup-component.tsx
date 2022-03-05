import { useFormik } from 'formik';
import { signupUser } from '../auth-service';

import styled from 'styled-components';
import signUpSchema from './signup-schema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      email: '',
      phonenumber: '',
    },

    validationSchema: signUpSchema,

    async onSubmit(payload, { setSubmitting }) {
      try {
        setSubmitting(true);
        await dispatch(signupUser(payload, navigate));
      } catch (e) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  width: 50px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default SignupComponent;
