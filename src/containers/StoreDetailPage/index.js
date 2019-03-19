import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import IconArrowLeft from 'react-icons/lib/fa/arrow-left';

import { loadActiveStore } from 'src/redux/stores';

import { matchType } from 'src/common/types';
import { prettifySnakeCase } from 'src/common/utils';

import { Box } from 'src/components/Box';
import Button from 'src/components/Button';
import { Header } from 'src/components/PageComponents';
import { Content, Card } from 'src/components/Details';

import { Colors } from 'src/styles/theme';

class StoreDetailPage extends Component {
  static propTypes = {
    match: matchType.isRequired,
    store: PropTypes.shape().isRequired,
    loadActiveStore: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      params: { id: storeId },
    } = this.props.match;

    this.props.loadActiveStore({ id: storeId });
  }

  render() {
    const { data } = this.props.store;
    if (!data) {
      return null;
    }

    return (
      <Box height="100%" position="relative">
        <Box height="100%" width="100%" background="#f7f7f7">
          <Box width="5rem" position="absolute" left="0">
            <StyledNavLink to="/stores">
              <IconArrowLeft size={20} color={Colors.grey(1)} />
            </StyledNavLink>
          </Box>
          <Box width="5rem" position="absolute" right="0">
            <Button primary size="sm" type="submit">
              <StyledNavLink to="/logout">Logout</StyledNavLink>
            </Button>
          </Box>
          <Header alignItems="center" padding="1rem 1.5rem" height="6rem">
            {data && <h1>{data.name}</h1>}
          </Header>
        </Box>

        <Content>
          <div>
            <Card>
              {Object.entries(data)
                .filter(([, value]) => typeof value !== 'object')
                .map(([key, value]) => (
                  <div className="entry" key={key}>
                    <div className="key">{prettifySnakeCase(key)}</div>
                    <div className="value">{value}</div>
                  </div>
                ))}
            </Card>
          </div>
        </Content>
      </Box>
    );
  }
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

const mapStateToProps = state => ({
  store: state.stores.active,
});

const mapDispatchToProps = { loadActiveStore };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreDetailPage);
