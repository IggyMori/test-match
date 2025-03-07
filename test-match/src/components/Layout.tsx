import { styled } from '@mui/material';
import React from 'react';

const StyledRoot = styled('div')({
  alignSelf: 'stretch',
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#06080C',
  padding: '42px',
});

export type LayoutProps = React.PropsWithChildren;

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <StyledRoot>{children}</StyledRoot>;
};
