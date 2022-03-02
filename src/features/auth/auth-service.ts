import axiosInstance from '@helpers/axios-instance';
import { setLoading, setError } from './auth-reducer';
import { Dispatch } from '@reduxjs/toolkit';
import { AppThunk } from '@appredux/store';

export const loginUser = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const currentUser = await axiosInstance.post('login');
  } catch (error) {
    dispatch(setError(''));
  } finally {
    dispatch(setLoading(false));
  }
};
