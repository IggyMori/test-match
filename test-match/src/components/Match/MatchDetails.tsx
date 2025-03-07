import React from 'react';
import { Stack } from '@mui/material';
import { Team } from '../../api/matches.types';
import { TeamDetails } from './TeamInfo/TeamDetails';

type MatchDetailsProps = {
  homeTeam: Team;
  awayTeam: Team;
};

export const MatchDetails = (props: MatchDetailsProps) => {
  const { homeTeam, awayTeam } = props;

  return (
    <Stack direction="row" spacing={4} justifyContent="space-between" padding={1.5}>
      <TeamDetails team={homeTeam} />

      <TeamDetails team={awayTeam} />
    </Stack>
  );
};
