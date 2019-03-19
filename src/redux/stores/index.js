import {
  getStores,
  getStoreData,
} from 'src/services/api';

import {
asyncInitialState,
createAsyncActions,
createFetchThunk,
createAsyncHandlers,
createReducer,
} from 'src/redux/utils';

const resultsActions = createAsyncActions('stores/results');
const activeActions = createAsyncActions('stores/active');

const initialState = {
  results: { ...asyncInitialState, data: {} },
  active: { ...asyncInitialState, data: {} },
};

const handlers = {
  ...createAsyncHandlers(resultsActions, { path: ['results'] }),
  ...createAsyncHandlers(activeActions, { path: ['active'] }),
};

export default createReducer(handlers, initialState);

export const loadStores = createFetchThunk(resultsActions, getStores);
export const loadActiveStore = createFetchThunk(activeActions, getStoreData);
