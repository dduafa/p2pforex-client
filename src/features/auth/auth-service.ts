import axiosInstance from '@helpers/axios-instance';
import { setLoading, setError } from './auth-reducer';
import { Dispatch, Action, ThunkAction } from '@reduxjs/toolkit';
import { AppThunk,  } from '@appredux/store';
import { RootState } from '@appredux/store';
import { FormValues } from './signup/signup-component-refactor';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>

export const signupUser = (user: FormValues): ThunkResult<void> => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const currentUser = await axiosInstance.post('login', user);
  } catch (error) {
    dispatch(setError(''));
  } finally {
    dispatch(setLoading(false));
  }
};

// export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>

// const signUp = (): ThunkResult<void> => async dispatch => ....
// export const signupUser = (): AppThunk => async (dispatch: Dispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const currentUser = await axiosInstance.post('login');
//   } catch (error) {
//     dispatch(setError(''));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

