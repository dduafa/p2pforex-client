import axiosInstance from '@helpers/axios-instance';
import {
  setLoading,
  setErrors,
  setCurrentUser,
  setAuthenticated,
} from './auth-reducer';
import { Dispatch, Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@appredux/store';
import { IUserLogin, IUserSignup } from './types';
import { savetToken, clearTokens } from '@helpers/localstorage';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;

export const signupUser =
  (user: IUserSignup, navigate: any): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const currentUser = await axiosInstance.post('/signup', user);
      if (currentUser.data.isDefaultPassword) {
        navigate('/resetpassword');
        setErrors([{ message: 'Reset Password' }]);
        return;
      }
      dispatch(setCurrentUser(currentUser.data));
      dispatch(setAuthenticated(true));
      savetToken(
        currentUser.data.tokens.accessToken,
        currentUser.data.tokens.accessToken
      );
    } catch (error) {
      dispatch(setErrors([{ message: 'Invalid Credentials' }]));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser =
  (user: IUserLogin, navigate: any): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const currentUser = await axiosInstance.post('/login', user);
      if (currentUser.data.isDefaultPassword) {
        navigate('/resetpassword');
        setErrors([{ message: 'Reset Password' }]);
        return;
      }
      dispatch(setCurrentUser(currentUser.data));
      dispatch(setAuthenticated(true));
      savetToken(
        currentUser.data.tokens.accessToken,
        currentUser.data.tokens.accessToken
      );
    } catch (error) {
      dispatch(setErrors([{ message: '' }]));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logOutUser =
  (): ThunkResult<void> => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      await axiosInstance.post('/logout');
      dispatch(setCurrentUser(undefined));
      dispatch(setAuthenticated(false));
      clearTokens();
    } catch (error) {
      dispatch(setErrors([{ message: '' }]));
    } finally {
      dispatch(setLoading(false));
    }
  };
