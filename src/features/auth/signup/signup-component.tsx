import { useFormik } from 'formik';
import { signupUser } from '../auth-service';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import signUpSchema from './signup-schema';
import { useDispatch } from 'react-redux';
import { StyledButton } from 'components/common/button/button-styles';

const SignupComponent = () => {
  const [pathname, setPathname] = useState('');
  const dispatch = useDispatch();

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
        await dispatch(signupUser(payload));
      } catch (e) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Section>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
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
          <Input
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
          <Input
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
          <Input
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
            <Select
              name="role"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.role}
            >
              <option value={''} hidden>Select role</option>
              <option value={'admin'}>Admin</option>
              <option value={'superadmin'}>Superadmin</option>
            </Select>
            {touched.role && errors.role && (
              <ErrorLabel>{errors.role}</ErrorLabel>
            )}
          </div>
        )}
        <div>
          <Input
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
        <StyledButton type="submit" disabled={isSubmitting}>
          Sign Up
        </StyledButton>
        <StyledLink to={'/login'}>Log In</StyledLink>
      </Form>
    </Section>
  );
};

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

const Title = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0;
  margin-left: 40%;
`;

const Select = styled.select`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 0.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.4rem 0.75rem;
`;

const Section = styled.section`
  font-size: 1rem;
  line-height: 1.5rem;
  min-width: 28rem;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
  background: white;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 0.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.4rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }
  &:not(:focus) {
    caret-color: transparent;
  }
`;

export const StyledLink = styled(NavLink)`
  background-color: #fafafa;
  color: #5e5656;
  text-decoration: none;
  padding: 0.25rem;
  margin-top: 2rem;
  text-decoration: underline;

  &:hover {
    color: #0947e4;
  }
`;
export default SignupComponent;
