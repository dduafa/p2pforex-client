import thunk from 'redux-thunk';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import createMockStore from 'redux-mock-store';

import { RootState } from '@/appredux/store';

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;

const middleware = [thunk];

const mockStore = createMockStore<RootState, DispatchExts>(middleware);

const store = mockStore();

export default store;
