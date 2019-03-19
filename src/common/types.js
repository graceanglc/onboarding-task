import PropTypes from 'prop-types';

export const locationType = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
});

export const matchType = PropTypes.shape({
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
});
