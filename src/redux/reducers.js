import { combineReducers } from 'redux';
import stores from './stores';
import auth from './auth';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
 auth,
 stores,
 router: routerReducer,
});