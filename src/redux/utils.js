import Immutable from 'seamless-immutable';
import get from 'lodash/get';
import identity from 'lodash/identity';
import noop from 'lodash/noop';

export const createAction = type => {
  const actionCreator = (payload = null) => ({
    type,
    
    payload,
    error: payload instanceof Error,
  });
  actionCreator.toString = () => type;

  return actionCreator;
};

export const createAsyncActions = id => ({
  request: createAction(`${id}/request`),
  success: createAction(`${id}/success`),
  fail: createAction(`${id}/fail`),
});

export const asyncInitialState = {
  isLoading: false,
  isLoaded: false,
  data: undefined,
  error: undefined,
};

export const createReducer = (handlers, initialState) => (
  state = Immutable(initialState),
  { type, payload }
) => {
  // eslint-disable-next-line no-prototype-builtins
  if (handlers.hasOwnProperty(type)) {
    return handlers[type](state, payload);
  }
  return state;
};

export const createSubstateHandler = (handler, path) => (state, payload) => ({
  ...state,
  [path]: handler(state[path], payload),
});

export const createAsyncHandlers = (
  actions,
  { onRequest = identity, onSuccess = identity, onFail = identity, path = [] } = {}
) => ({
  [actions.request]: state =>
    onRequest(state.setIn([...path, 'isLoading'], true).setIn([...path, 'data'], null)),
  [actions.success]: (state, payload) =>
    onSuccess(
      state
        .setIn([...path, 'isLoading'], false)
        .setIn([...path, 'isLoaded'], true)
        .setIn([...path, 'data'], payload)
        .setIn([...path, 'error'], null)
    ),
  [actions.fail]: (state, payload) =>
    onFail(state.setIn([...path, 'isLoading'], false).setIn([...path, 'error'], payload)),
});

export const createAsyncSelectors = ({ path = [], isArray = false } = {}) => ({
  getData(state) {
    return get(state, [...path, 'data'], isArray ? [] : null);
  },
  getError(state) {
    return get(state, [...path, 'error']);
  },
  isLoading(state) {
    return get(state, [...path, 'isLoading']);
  },
  isLoaded(state) {
    return get(state, [...path, 'isLoaded']);
  },
});

export const createThunk = action => payload => dispatch => dispatch(action(payload));

export const createFetchThunk = (actions, fetchPromise, { additional = noop } = {}) => (
  ...params
) => async (dispatch, getState) => {
  dispatch(actions.request());
  try {
    const response = await fetchPromise(...params);
    const { data } = response;
    dispatch(actions.success(data));
    await additional(dispatch, getState);
    return data;
  } catch (e) {
    if (e.response && e.response.data) {
      dispatch(actions.fail(e.response.data));
    } else {
      dispatch(actions.fail(e.message));
    }

    throw e;
  }
};
