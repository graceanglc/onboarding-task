import PropTypes from 'prop-types';

export const locationType = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
});
