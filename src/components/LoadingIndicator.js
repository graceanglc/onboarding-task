import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import { Colors } from '../styles/theme';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(247, 247, 247, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 0.25s ease-in-out;

  ${props => props.tall && 'justify-content: flex-start; padding-top: 20rem'};

  > div {
    transform: scale(1.3) translateY(${props => props.translateY}rem);
  }
`;

export default function LoadingIndicator(props) {
  return (
    <Overlay {...props}>
      <Spinner name="ball-scale-multiple" fadeIn="none" color={Colors.accents.stoqo} />
    </Overlay>
  );
}

LoadingIndicator.propTypes = {
  show: PropTypes.bool,
  translateY: PropTypes.number,
};

LoadingIndicator.defaultProps = {
  show: false,
  translateY: 0,
};
