import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { loadStores } from 'src/redux/stores';
import { logout } from 'src/redux/auth';

import LoadingIndicator from 'src/components/LoadingIndicator';
import Pagination from 'src/components/Pagination';
import { Box, Row } from 'src/components/Box';
import Button from 'src/components/Button';

import { Table, TableRow, TableCell, TableHeader } from 'src/components/Table';
import {
  createDropdownFilters,
} from 'src/common/utils';
import { 
  TYPE,
  FILTER_BY,
  STORE_LIST_TITLE,
} from 'src/common/constants';

@connect(
  state => ({
    stores: state.stores.results,
  }),
  {
    loadStores,
    logout,
  }
)
export default class StoreListPage extends Component {
  static propTypes = {
    stores: PropTypes.shape({
      data: PropTypes.shape({
        count: PropTypes.number,
        next: PropTypes.string,
        previous: PropTypes.string,
        result: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          address: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          owner: PropTypes.number.isRequired,
        }))
      }),
    }).isRequired,
    loadStores: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }

  static TABLE_HEADERS = [
    { key: 'name', label: 'Name' },
    { key: 'phone', label: 'Phone' },
    { key: 'address', label: 'Address' },
    { key: 'type', label: 'Type' },
    { key: 'description', label: 'Description' }
  ];

  static SEARCH_FILTERS = [{ value: 'type', options: TYPE }];

  state = { 
    isLoadingCSV: false,
    filter: null,
    page: 1, 
  };

  componentDidMount() {
    const { page, filter } = this.state;

    this.props.loadStores({ page, type: filter });
  }

  componentDidUpdate(_, prevState) {
    const { page, filter } = this.state;

    if (prevState.filter !== this.state.filter || prevState.page !== this.state.page) {
      this.props.loadStores({ page, type: filter});
    }
  }

  onChangePage = (page) => {
    this.setState({
      page: page,
    });
  }

  onChangeFilter =  filter => evt => {
    const { value: selectedFilter } = evt.target;
   
    this.setState({ filter: selectedFilter });
  }

  createStoreListTableCells = (stores, selectedFilter) =>
    StoreListPage.TABLE_HEADERS.filter(column => stores[column.key] !== undefined && stores[column.key].type === selectedFilter).map(column => ({
        column: column.key,
        value: stores[column.key],
  }));

  render() {
    const { isLoading, isLoaded, data } = this.props.stores;
    const { isLoadingCSV, filter } = this.state;
    const isLoadSuccessful = !isLoading && isLoaded && data && data.results;

    return (
      <Box height="100%" position="relative">
        <LoadingIndicator show={isLoadingCSV} />
        <Box width="100%" position="relative">
          <Box width="5rem" position="absolute" right="0">
            <Button primary size="sm" type="submit">
                <StyledNavLink to="/logout">Logout</StyledNavLink>
            </Button>
          </Box>
          <Box width="80%">
            <h3>{STORE_LIST_TITLE}</h3>
          </Box>
          <Box width="10rem">
            <p>{FILTER_BY}</p>
            <ActionBar>
              {createDropdownFilters(StoreListPage.SEARCH_FILTERS, { type: filter } , this.onChangeFilter)}
            </ActionBar>
          </Box>
          <Table>
            <TableHeader>
              {StoreListPage.TABLE_HEADERS.map(header => (
                <TableCell key={header.key} className={header.key}>
                  {header.label}  
                </TableCell>
              ))}
            </TableHeader>
            <LoadingIndicator show={isLoading} translateY={-4} />
            {isLoadSuccessful &&
              data.results.map(store => (
                <TableRow to={`/stores/${store.id}`} key={store.id}>
                  {this.createStoreListTableCells(store).map(({ column, value }) => (
                    <TableCell key={column} className={column}>
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </Table>
          {isLoadSuccessful && (
            <Pagination itemsCount={data.count || 0} state={this.state} onChangePage={this.onChangePage}/>
          )}
        </Box>
      </Box>
    );
  }   
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

const ActionBar = styled(Row)`
  justify-content: space-between;
  margin-bottom: 1rem;
`;
