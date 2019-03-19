import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RcPagination from 'rc-pagination';
import { PAGE_SIZE } from 'src/common/constants';
import { Colors } from 'src/styles/theme';

function Pagination({ itemsCount, state, onChangePage }) {
  const currentParams = state.page;

  return (
    <PaginationWrapper>
      <RcPagination
        defaultCurrent={Number(currentParams) || 1}
        total={itemsCount}
        showPrevNextJumpers={false}
        pageSize={PAGE_SIZE}
        onChange={onChangePage}
      />
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  state: PropTypes.shape().isRequired,
  onChangePage: PropTypes.func.isRequired,
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  ul,
  li {
    display: inline-block;
  }

  li {
    font-size: 0.875rem;
    cursor: pointer;

    &.rc-pagination-item-active {
      cursor: default;
      font-weight: bold;

      a {
        background: ${Colors.blue(3)};
        color: ${Colors.white};
      }
    }

    &.rc-pagination-prev,
    &.rc-pagination-next {
      display: none;
    }
  }

  a {
    color: ${Colors.grey(1)};
    text-decoration: none;
    padding: 0.5rem 0.7rem;
    margin: 0 0.5rem;
    border-radius: 0.25rem;
  }
`;

export default Pagination;
