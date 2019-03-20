import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import stores from './stores';
import auth from './auth';

export default combineReducers({
  auth,
  stores,
  router: routerReducer,
});
