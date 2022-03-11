import axiosInstance from '@helpers/axios-instance';
import {
  setLoading,
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
  (userData: IUserSignup): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axiosInstance.post('/api/signup', userData);
      const { user, tokens } = data.data;
      if (user.isDefaultPassword) {
       console.log('Thanks for registering, please check your email to change password')
        return;
      }
      dispatch(setCurrentUser(user));
      dispatch(setAuthenticated(true));
      savetToken({ accessToken: tokens.access, refreshToken: tokens.refresh });
    } catch (e) {
      dispatchError(e, dispatch);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const changePassword =
  (userData: IChangePassword): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axiosInstance.post('/api/change_password', userData);
      const { user, tokens } = data.data;
      dispatch(setCurrentUser(user));
      dispatch(setAuthenticated(true));
      savetToken({ accessToken: tokens.access, refreshToken: tokens.refresh });
    } catch (e) {
      dispatchError(e, dispatch);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser =
  (userData: IUserLogin): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axiosInstance.post('/api/signin', userData);
      const { user, tokens } = data.data;
      dispatch(setCurrentUser(user));
      dispatch(setAuthenticated(true));
      savetToken({ accessToken: tokens.access, refreshToken: tokens.refresh });
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
