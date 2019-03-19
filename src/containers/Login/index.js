import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import IconError from 'react-icons/lib/fa/minus-circle';
import { connect } from 'react-redux';

import { login } from 'src/redux/auth';
import { Box, Row } from 'src/components/Box';
import Button from 'src/components/Button';
import { media, Colors } from 'src/styles/theme';
import { TextInput, Label } from 'src/components/Input';

class Login extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    router: PropTypes.shape().isRequired,
    login: PropTypes.func.isRequired,
  };

  onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await this.props.login(values);
    } catch (e) {
      setErrors(this.props.auth.error);
    }
    setSubmitting(false);
  };

  schema = Yup.object().shape({
    username: Yup.string(),
    password: Yup.string().required(),
  });

  render() {
    const {
      auth,
      router: { location },
    } = this.props;
    if (auth.isAuthenticated) {
      const to = (location.state && location.state.from) || '/stores';
      return <Redirect to={to} />;
    }

    const LoginForm = ({ values, handleChange }) => (
      <Box alignItems="flex-start" width="100%" maxWidth="20rem">
        <FluidForm>
          <Label>
            Username
            <TextInput
              value={values.username}
              onChange={handleChange}
              name="username"
              type="username"
              placeholder="Username"
            />
            <div className="error">
              <ErrorMessage name="username" />
            </div>
          </Label>
          <Label>
            Password
            <TextInput
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <div className="error">
              <ErrorMessage name="password" />
            </div>
          </Label>
          {this.props.auth.error && (
            <Row className="non-field-error">
              <Box height="100%" width="1.5rem">
                <IconError size={20} color={Colors.red(0)} />
              </Box>
              Gagal Masuk: {this.props.auth.error.non_field_errors}
            </Row>
          )}
          <Box padding="1rem 0" width="10rem">
            <Button primary size="m" type="submit">
              Login
            </Button>
          </Box>
        </FluidForm>
      </Box>
    );

    return (
      <Wrapper>
        <LoginContainer>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={this.schema}
            onSubmit={this.onSubmit}
            render={LoginForm}
          />
        </LoginContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  ${media('tablet')} {
    flex-direction: column;
  }
`;

const LoginContainer = styled.div`
  width: 51vw;
  max-width: 100%;
  min-width: 20rem;
  background: ${Colors.white};
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  > * {
    width: 100%;
    max-width: 20rem;
  }
`;

const FluidForm = styled(Form)`
  width: 100%;
  .error {
    margin: 0.5rem 0;
    color: ${Colors.red(0)};
    font-size: 0.875rem;
  }
  .non-field-error {
    font-size: 0.875rem;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Colors.red(0)};
    border-left: 6px solid ${Colors.red(0)};
  }
`;

const mapStateToProps = ({ auth, router }) => ({
  auth,
  router,
});

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
