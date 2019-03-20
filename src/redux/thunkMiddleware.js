const thunkMiddleware = extraArguments => ({ dispatch, getState }) => next => async action => {
  try {
    if (typeof action === 'function') {
      return await action(dispatch, getState, extraArguments);
    }
    return next(action);
  } catch (err) {
    throw err;
  }
};

export default thunkMiddleware;
