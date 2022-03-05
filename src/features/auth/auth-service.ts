import axiosInstance from '@helpers/axios-instance';
import {
  setLoading,
  setErrors,
  setCurrentUser,
  setAuthenticated,
} from './auth-reducer';
import { Dispatch, Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@appredux/store';
import { IUserLogin, IUserSignup, IChangePassword } from './types';
import { savetToken, clearTokens } from '@helpers/localstorage';
import dispatchError from '@/helpers/dispatch-error';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;

export const signupUser =
  (user: IUserSignup, navigate: any): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const currentUser = await axiosInstance.post('/signup', user);
      console.log(currentUser);
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
    } catch (e) {
      dispatchError(e, dispatch);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const changePassword =
  (user: IChangePassword): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const currentUser = await axiosInstance.post('/change_password', user);
      dispatch(setCurrentUser(currentUser.data));
      dispatch(setAuthenticated(true));
      savetToken(
        currentUser.data.tokens.accessToken,
        currentUser.data.tokens.accessToken
      );
    } catch (e) {
      dispatchError(e, dispatch);
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
    } catch (e) {
      dispatchError(e, dispatch);
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
    } catch (e) {
      dispatchError(e, dispatch);
    } finally {
      dispatch(setLoading(false));
    }
  };
