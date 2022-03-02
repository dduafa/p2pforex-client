import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { authSlice } from '@features/auth/auth-reducer';

const rootReducer = combineReducers({
  [authSlice]: authReducer,
});

export default rootReducer;
