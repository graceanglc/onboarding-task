import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'src/redux/reducers';
import createThunkMiddleware from './ravenThunkMiddleware';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middlewares = [routerMiddleware(history), createThunkMiddleware()];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const logger = require('redux-logger').default; // eslint-disable-line
  middlewares.push(logger);
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}