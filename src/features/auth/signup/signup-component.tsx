import { useFormik } from 'formik';
import { signupUser } from '../auth-service';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import signUpSchema from './signup-schema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {
  const [pathname, setPathname] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setPathname(window.location.pathname);

    return () => {
      setPathname('');
    };
  }, []);

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
      role: 'normaluser',
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
      <h2>Sign Up</h2>
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
        {touched.firstname && errors.firstname && (
          <ErrorLabel>{errors.firstname}</ErrorLabel>
        )}
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
        {touched.lastname && errors.lastname && (
          <ErrorLabel>{errors.lastname}</ErrorLabel>
        )}
        <div>
          <input
            aria-label="Email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Email"
            type="text"
            value={values.email}
          />
          {touched.email && errors.email && (
            <ErrorLabel>{errors.email}</ErrorLabel>
          )}
        </div>
        <div>
          <input
            aria-label="Phonenumber"
            name="phonenumber"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Phonenumber"
            type="text"
            value={values.phonenumber}
          />
          {touched.phonenumber && errors.phonenumber && (
            <ErrorLabel>{errors.phonenumber}</ErrorLabel>
          )}
        </div>
        {pathname === '/adminsignup' && (
          <div>
            <select
              name="role"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.role}
            >
              <option>----</option>
              <option value={'admin'}>Admin</option>
              <option value={'superadmin'}>Superadmin</option>
            </select>
            {touched.role && errors.role && (
              <ErrorLabel>{errors.role}</ErrorLabel>
            )}
          </div>
        )}
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
          <ErrorLabel>{errors.password}</ErrorLabel>
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
  width: 200px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
`;

const ErrorLabel = styled.small`
  color: red;
  padding: none;
  font-size: 12px;
`;

export default SignupComponent;
