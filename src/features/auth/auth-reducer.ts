import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@appredux/store';

export const authSlice = 'authSlice';

interface AuthState {
  user?: User;
  loading: boolean;
  isAuthenticated: boolean;
  error: string;
}

interface User {
  firstname: string;
  lastname: string;
  email: string;
}
// interface AuthError {
//   message: string[];
// }

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  error: '',
};

const authReducer = createSlice({
  name: authSlice,
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const { setLoading, setError } = authReducer.actions;
export const authSelector = (state: RootState) => state.authSlice;
export default authReducer.reducer;
