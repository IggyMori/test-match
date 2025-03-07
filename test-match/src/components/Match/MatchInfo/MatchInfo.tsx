import { Stack, Typography } from '@mui/material';
import { Match } from '../../../api/matches.types';
import React from 'react';
import { MatchStatusLabel } from './MatchStatusLabel';

type MatchInfoProps = {
  homeScore: Match['homeScore'];
  awayScore: Match['awayScore'];
  status: Match['status'];
};

export const MatchInfo = (props: MatchInfoProps) => {
  const { awayScore, homeScore, status } = props;

  return (
    <Stack spacing={0.5}>
      <Typography variant="body1" alignSelf="center" color="#FFFFFF" fontWeight={600}>
        {`${homeScore} : ${awayScore}`}
      </Typography>
      <MatchStatusLabel status={status} />
    </Stack>
  );
};
