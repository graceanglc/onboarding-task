import React from 'react';
import styled from 'styled-components';
/**
 * Flexbox-based utility view
 */
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${props => `flex-shrink: ${props.flexShrink || 0}`};
  ${props => props.flex && `flex: ${props.flex}`};
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props => props.alignSelf && `align-self: ${props.alignSelf}`};
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap}`};
  ${props => props.flexBasis && `flex-basis: ${props.flexBasis}`};
  ${props => props.radius && `border-radius: ${props.radius}`};
  ${props => props.background && `background-color: ${props.background}`};
  ${props => props.border && `border: ${props.border}`};
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.marginTop && `margin-top: ${props.marginTop}`};
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${props => props.marginRight && `margin-right: ${props.marginRight}`};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.height && `height: ${props.height}`};
  ${props => props.color && `color: ${props.color}`};
  ${props =>
    props.gutter &&
    `
    > * + * {
      margin-left: ${props.gutter};
    }
  `};
  ${props => props.scrollX && `overflow-x: ${props.scrollX}`};
  ${props => props.scrollY && `overflow-y: ${props.scrollY}`};
  ${props => props.scroll && `overflow: ${props.scroll}`};
  ${props => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${props => props.maxHeight && `max-height: ${props.maxHeight}`};
  ${props => props.minWidth && `min-width: ${props.minWidth}`};
  ${props => props.minHeight && `min-height: ${props.minHeight}`};
  ${props => props.position && `position: ${props.position}`};
`;

/**
 * Shorthand for <Box flexDirection="row" />
 */
export const Row = props => <Box flexDirection="row" {...props} />;

/** @component */
export default Box;
