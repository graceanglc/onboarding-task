import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

@withRouter
export default class AuthenticatedRoute extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
  };

  render() {
    const { component: Component, authenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (authenticated) return <Component {...props} />;
          return (
            <Redirect
              to={{
                pathname: '/login',
                // eslint-disable-next-line react/prop-types
                state: { from: props.location },
              }}
            />
          );
        }}
      />
    );
  }
}
