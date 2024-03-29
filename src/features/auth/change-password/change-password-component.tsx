import { useFormik } from 'formik';
import { changePassword } from '../auth-service';

import styled from 'styled-components';
import changePasswordSchema from './change-password-schema';
import { StyledButton } from 'components/common/button/button-styles';
// import { useAppDispatch } from '@/appredux/hooks';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ChangePasswordComponent = () => {
  const dispatch = useDispatch();
  const { token: passwordChangeToken } = useParams();

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
      confirmPassword: '',
    },

    validationSchema: changePasswordSchema,

    async onSubmit(payload, { setSubmitting }) {
      try {
        setSubmitting(true);
        dispatch(
          changePassword({
            password: payload.password,
            token: passwordChangeToken!,
          })
        );
      } catch (e) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Section>
      <Title>Change Password</Title>
      <Form onSubmit={handleSubmit}>
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
        <div>
          <Input
            aria-label="Password"
            name="confirmPassword"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Confirm Password"
            type="password"
            value={values.confirmPassword}
          />
        </div>
        {touched.confirmPassword && errors.confirmPassword && (
          <ErrorLabel>{errors.confirmPassword}</ErrorLabel>
        )}
        <StyledButton type="submit" disabled={isSubmitting}>
          Change Password
        </StyledButton>
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
  font-size: 1.2rem;
  line-height: 1.25rem;
  margin-top: 0;
  margin-left: 30%;
`;

const Section = styled.section`
  font-size: 1rem;
  line-height: 1.5rem;
  min-width: 28rem;
  margin-left: auto;
  margin-right: auto;
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

export default ChangePasswordComponent;
