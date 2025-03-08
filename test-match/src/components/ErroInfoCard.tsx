import React from 'react';
import { Card, Stack, styled, Typography } from '@mui/material';
import { ReactComponent as AlertSvg } from '../assets/alert.svg';

const StyledCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  padding: '0 16px',
  minWidth: 0,
  backgroundColor: '#101318',
}) as typeof Card;

export const ErrorInfoCard = () => (
  <StyledCard>
    <Stack direction="row" spacing={1.25} alignItems="center">
      <AlertSvg />
      <Typography fontSize="18px" fontWeight={500} color="#FFFFFF">
        Ошибка: не удалось загрузить информацию
      </Typography>
    </Stack>
  </StyledCard>
);
