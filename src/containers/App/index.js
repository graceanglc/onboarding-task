import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { publicRoutes, privateRoutes } from 'src/routes';
import theme from 'src/styles/theme';
import AuthenticatedRoute from 'src/components/AuthenticatedRoute';
import { reloadAuth, logout } from 'src/redux/auth';

@connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  {
    reloadAuth,
    logout,
  }
)
export default class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    reloadAuth: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  state = {
    isCheckingAuth: true,
  };

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.reloadAuth({ token });
    }
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isCheckingAuth: false });
  }

  render() {
    const { isAuthenticated } = this.props;
    if (this.state.isCheckingAuth) return <h3>Loading...</h3>;

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {privateRoutes.map(({ component: Comp, ...route }) => (
              <AuthenticatedRoute
                key={route.path}
                authenticated={isAuthenticated}
                {...route}
                component={props => <Comp {...props} />}
              />
            ))}
            {publicRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
