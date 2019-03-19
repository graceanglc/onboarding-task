import instance, { login as apiLogin } from 'src/services/api';
import {
  createAction,
  createAsyncActions,
  createFetchThunk,
  asyncInitialState,
  createAsyncHandlers,
  createReducer,
} from 'src/redux/utils';

const loginActions = createAsyncActions('login');
const setAuth = createAction('set_auth');
const resetAuth = createAction('reset_auth');

const initialState = {
  ...asyncInitialState,
  isAuthenticated: false,
  token: false,
};

const handlers = {
  ...createAsyncHandlers(loginActions),
  [setAuth]: (state, payload) =>
    state
      .set('isAuthenticated', true)
      .set('isLoaded', true)
      .set('data', payload)
      .set('error', null),
  [resetAuth]: state =>
    state
      .set('isAuthenticated', false)
      .set('isLoaded', false)
      .set('data', null),
};

export default createReducer(handlers, initialState);

export const reloadAuth = data => dispatch => {
  const { token } = data;
  window.localStorage.setItem('token', token);
  instance.defaults.headers.common.authorization = `Token ${token}`;
  dispatch(setAuth(data));
};

export const login = createFetchThunk(loginActions, apiLogin, {
  additional: (dispatch, getState) => {
    const { data } = getState().auth;
    dispatch(reloadAuth(data));
  },
});

export const logout = () => dispatch => {
  window.localStorage.removeItem('token');
  instance.defaults.headers.common.authorization = undefined;
  dispatch(resetAuth());
};
