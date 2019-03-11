import Raven from 'raven-js';

/**
 * From https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
 * Modified to catch exceptions
 */
const createThunkMiddleware = extraArguments => ({
  dispatch,
  getState,
}) => next => async action => {
  try {
    if (typeof action === 'function') {
      Raven.captureBreadcrumb({
        category: 'redux',
        message: `[thunk] ${action}`,
      });
      return await action(dispatch, getState, extraArguments);
    }

    Raven.captureBreadcrumb({
      category: 'redux',
      message: action.type,
      data: action.payload,
    });

    return next(action);
  } catch (err) {
    Raven.captureException(err, {
      action,
      state: getState(),
    });
    throw err;
  }
};

export default createThunkMiddleware;
