import React from 'react';
import { FormikProps } from 'formik';

import styled from 'styled-components';

export interface FormValues {
  firstname: string;
  lastname: string;
  password: string;
}

const SignupComponent = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

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
