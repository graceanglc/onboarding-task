import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'src/redux/auth';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(Logout);