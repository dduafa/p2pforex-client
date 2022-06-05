import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { IUserData, IAuthState, Error } from './types';

export const authSlice = 'authSlice';

const initialState: IAuthState = {
  loading: false,
  isAuthenticated: false,
  errors: [],
  user: undefined,
  alertInfo: undefined,
};

const authReducer = createSlice({
  name: authSlice,
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setCurrentUser: (
      state,
      { payload }: PayloadAction<IUserData | undefined>
    ) => {
      state.user = payload;
    },
    setAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    },
    setErrors: (state, { payload }: PayloadAction<Error[]>) => {
      state.errors = payload;
    },
    setAlertInfo: (state, { payload }: PayloadAction<string | undefined>) => {
      state.alertInfo = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setCurrentUser,
  setAuthenticated,
  setAlertInfo,
} = authReducer.actions;

export const authSelector = (state: RootState) => state.authSlice;
export default authReducer.reducer;
