import React from 'react';
import { Card, CardProps, styled, Typography } from '@mui/material';
import { Match } from '../../../api/matches.types';
import { ColorByMatchStatus, NamesByMatchStatus } from '../../../constants/matches-status.constants';

type MatchStatusLabelProps = {
  status: Match['status'];
};

const StyledLabel = styled(Card, { shouldForwardProp: prop => prop !== 'status' })<MatchStatusLabelProps>(
  ({ status }) => ({
    display: 'flex',
    minWidth: '92px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '27px',
    color: '#FFFFFF',
    padding: '6px 8px',
    backgroundColor: ColorByMatchStatus[status],
  }),
) as React.FC<CardProps & MatchStatusLabelProps>;

export const MatchStatusLabel = (props: MatchStatusLabelProps) => {
  const { status } = props;

  return (
    <StyledLabel status={status}>
      <Typography variant="body2" fontWeight={600}>
        {NamesByMatchStatus[status]}
      </Typography>
    </StyledLabel>
  );
};
