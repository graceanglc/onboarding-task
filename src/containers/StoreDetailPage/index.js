import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadActiveStore from 'src/redux/stores';

class StoreDetailPage extends Component {
 
  static propTypes = {
    stores: PropTypes.shape().isRequired,
    loadActiveStore: PropTypes.func.isRequired,
  }

  componentDidMount() {
    //this.props.loadActiveStores();
  }

  render() {
    return (
      <div>
          HEHEHE ini halaman detail
      </div>
    );
  }   
}

const mapStateToProps = state => {
    return {
        stores: state.stores.results,
    }
};

const mapDispatchToProps = dispatch => ({
    loadActiveStore,
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetailPage);