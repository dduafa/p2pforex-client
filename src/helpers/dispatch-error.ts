import { AxiosError } from 'axios';
import { setErrors } from 'features/auth/auth-reducer';
import { Dispatch } from '@reduxjs/toolkit';

const dispatchError = (error: any, dispatch: Dispatch): void => {
  const err = error as AxiosError;
  if (err.response) dispatch(setErrors(err.response.data.errors));
};

export default dispatchError;
