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
    const initialState = undefined;
    const action = { type: '' } as AnyAction;
    const actualState = authReducer(initialState, action);
    const expectedState = updateState({});
    expect(actualState).toEqual(expectedState);
  });

  it('should set `isAuthenticated` to true, given NO `initialState` and calling `setAuthenticated(true)` action', () => {
    const initialState = undefined;
    const actualState = authReducer(initialState, setAuthenticated(true));
    const expectedState = updateState({ isAuthenticated: true });
    expect(actualState).toEqual(expectedState);
  });
});
