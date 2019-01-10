import React from 'react';
import styled from 'styled-components';
import theme, { FontWeight, Color } from '../../config/theme'

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
interface Props {
  weight?: FontWeight;
  size?: Size;
  color?: Color;
  block?: Boolean,
  children?: React.ReactNode;
}

const Text = styled('p')<Props>`
  font-size: ${(props: Props) => `${theme.fontSizes[props.size as Size]}px`}
  font-weight: ${(props: Props) =>
    theme.fontWeights[props.weight as FontWeight]}
  color: ${(props: Props) => theme.colors[props.color as Color]}
  display: ${(props: Props) => props.block && `block`}
`

Text.defaultProps = {
  block: false,
  color: 'black',
  size: 'm',
  weight: 'regular',
};

export default Text;
