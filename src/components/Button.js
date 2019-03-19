import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resets } from '../styles/utils';
import { Types, Colors, Sizes } from '../styles/theme';

export const ButtonSizesPropTypes = PropTypes.oneOf(['l', 'm', 'reg', 'sm']);

const getButtonPadding = size => {
  if (size === 'l') return '1.125rem 2rem';
  if (size === 'm') return '1rem 2rem';
  return '0.5rem 1rem';
};

const getButtonFontSize = size => {
  if (size === 'l' || size === 'm') return Sizes.font.m;
  return Sizes.font.reg;
};

const Button = styled.button`
  ${resets.spacing};
  ${resets.border};
  font-family: ${Types.family.main};
  font-size: ${props => getButtonFontSize(props.size)};
  font-weight: ${Types.weight.bold};
  background: ${Colors.blue(3)};
  color: ${Colors.white};
  border-radius: ${Sizes.radius.reg};
  flex-shrink: 0;
  display: inline-block;
  cursor: pointer;
  outline: none;
  padding: ${props => getButtonPadding(props.size)};
  ${props =>
    props.fluid &&
    `
        display: block;
        width: 100%;
    `}
`;

Button.propTypes = {
  /**
   * Size of the button, one of: ['l', 'm', 'reg', 'sm']
   */
  size: ButtonSizesPropTypes.isRequired,
  fluid: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  size: 'reg',
  fluid: false,
};

/** @component */
export default Button;
