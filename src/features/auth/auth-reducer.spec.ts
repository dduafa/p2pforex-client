import { AnyAction } from '@reduxjs/toolkit';
import authReducer from './auth-reducer';
import { setAuthenticated } from './auth-reducer';

const updateState = ({
  loading = false,
  isAuthenticated = false,
  errors = [],
  user = undefined,
  alertInfo = undefined,
}) => ({
  loading,
  isAuthenticated,
  errors,
  user,
  alertInfo,
});
describe('auth-reducer', () => {
  it('should return the initial state, given NO `initialState` and NO `action`', () => {
    const actualState = authReducer(undefined, {} as AnyAction);
    const expectedState = updateState({});
    expect(actualState).toEqual(expectedState);
  });

  it('should set `isAuthenticated` to true, given NO `initialState` and calling `setAuthenticated(true)` action', () => {
    const actualState = authReducer(undefined, setAuthenticated(true));
    const expectedState = updateState({ isAuthenticated: true });
    expect(actualState).toEqual(expectedState);
  });
});
