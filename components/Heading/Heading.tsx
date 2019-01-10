import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface Props {
  size?: 's' | 'm' | 'l';
  children?: React.ReactNode;
}

const headingComponent = (props: Props) => {
  if (props.size === 'l') return 'h1';
  if (props.size === 'm') return 'h2';
  return 'h3';
};

const headingWeight = (props: Props) => {
  if (props.size === 'l') return 'semibold';
  return 'semibold';
};

const Heading = styled(Text).attrs((props: Props) => ({
  weight: headingWeight(props),
  color: 'black',
  as: headingComponent(props),
})) <Props>``;

Heading.defaultProps = {
  size: 'm',
};

export default Heading;
