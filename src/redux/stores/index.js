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

const resultsActions = status => createAsyncActions(`${status}/results`);
const activeActions = status => createAsyncActions(`${status}/active`);

const initialState = {
  results: { ...asyncInitialState, data: {} },
  active: { ...asyncInitialState, data: {} },
};

const handlers = {
  ...createAsyncHandlers(resultsActions('stores'), {path: ['results']}),
  ...createAsyncHandlers(activeActions('store'), {path: ['active']}),
};

export default createReducer(handlers, initialState);

export const loadStores = createFetchThunk(resultsActions('stores'), getStores);
export const loadActiveStore = createFetchThunk(activeActions('store'), getStoreData);
