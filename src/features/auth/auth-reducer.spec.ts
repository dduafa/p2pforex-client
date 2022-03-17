import { AnyAction } from '@reduxjs/toolkit';
import authReducer from './auth-reducer';

const initialState = {
  loading: false,
  isAuthenticated: false,
  errors: [],
  user: undefined,
  alertInfo: undefined,
};

describe('auth-reducer', () => {
  it('should return the initial state, given NO `initialState` and NO `action`', () => {
    const resultFromReducer = authReducer(undefined, {} as AnyAction);
    expect(resultFromReducer).toEqual(initialState);
  });
});
