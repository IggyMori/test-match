import { Box, BoxProps, CircularProgress, CircularProgressProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

type LoadingIndicatorProps = {
  slotProps?: {
    container?: BoxProps;
    indicator?: CircularProgressProps;
  };
};

const StyledRoot = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  // height: '100%',
});

export const LoadingIndicator = (props: LoadingIndicatorProps) => (
  <StyledRoot {...props?.slotProps?.container}>
    <CircularProgress disableShrink color="primary" {...props?.slotProps?.indicator} />
  </StyledRoot>
);
