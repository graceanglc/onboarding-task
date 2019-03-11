import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loadStores } from 'src/redux/stores';
import LoadingIndicator from 'src/components/LoadingIndicator';
import { Box, Row } from 'src/components/Box';
import { Table, TableRow, TableCell, TableHeader } from 'src/components/Table';
import { 
  TYPE,
  FILTER_PLACEHOLDER,
} from 'src/common/constants';


// @connect(
//   (state) => ({ stores: state.stores.results }), 
//   { loadStores }
// )
class StoreListPage extends Component {
 
  static propTypes = {
    stores: PropTypes.shape().isRequired,
    loadStores: PropTypes.func.isRequired,
  }

  static TABLE_HEADERS = [
    { key: 'name', label: 'Name' },
    { key: 'phone', label: 'Phone' },
    { key: 'address', label: 'Adress' },
    { key: 'type', label: 'Type' },
    { key: 'description', label: 'Description' }
  ];

  static SEARCH_FILTERS = [
    { value: 'type', options: TYPE },
  ];

  state = {
    isLoadingCSV: false,
  };

  componentDidMount() {
    this.props.loadStores();
  }

  // onChangeFilter = filter =>  evt => {
  //   const { value: selectedFilter } = evt.target;
  //   const currentParams = parseQuery(search);
  //   const params = stringifyQuery({ ...currentParams, [filter]: selectedFilter });

  //   history.push(`${getSearchBasePath(pathname)}?${params}`);
  // }

  createStoreListTableCells = stores =>
    StoreListPage.TABLE_HEADERS.filter(column => stores[column.key] !== undefined).map(column => ({
        column: column.key,
        value: stores[column.key],
  }));

  render() {
    const { isLoading, isLoaded, data } = this.props.stores;
    const isLoadSuccessful = !isLoading && isLoaded && data && data.results;
    console.log(this.props.stores, "HAHAHAH");
    console.log(isLoadSuccessful, "bujigi");
    console.log(data, "Ceu");
    return (
      <Box height="100%" position="relative">
        <LoadingIndicator show={this.state.isLoadingCSV} />
        <Box padding="1.65rem 2rem" width="100%">
          {/* <ActionBar> */}
            {/* {createDropdownFilters(Activators.SEARCH_FILTERS, parsedQuery, this.onChangeFilter)} */}
            {/* <Button onClick={this.handleDownload}>
              <Row alignItems="center">
                <img src={IconDownload} alt="download" />
                <span>Download Rincian</span>
              </Row>
            </Button> */}
          {/* </ActionBar> */}
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
                <TableRow to={`/stores/${store.id}/`} key={store.id}>
                {/* <TableCell className="selector">▢</TableCell> */}
                  {this.createStoreListTableCells(store).map(({ column, value }) => (
                    <TableCell key={column} className={column}>
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </Table>
          {isLoadSuccessful && (
            <Pagination itemsCount={data.count || 0} location={this.props.location} />
          )}
        </Box>
      </Box>
    );
  }   
}

const ActionBar = styled(Row)`
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const mapStateToProps = state => {
    return {
        stores: state.stores.results,
    }
};

const mapDispatchToProps = dispatch => ({
    loadStores,
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreListPage);