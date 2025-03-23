import { Stack, Typography } from '@mui/material';
import { Match } from '../../../api/matches.types';
import { MatchStatusLabel } from './MatchStatusLabel';
import { AnimatedNumbers } from '../../AnimatedNumbers';

type MatchInfoProps = {
  homeScore: Match['homeScore'];
  awayScore: Match['awayScore'];
  status: Match['status'];
};

export const MatchInfo = (props: MatchInfoProps) => {
  const { awayScore, homeScore, status } = props;

  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
        <AnimatedNumbers value={homeScore} />
        <Typography variant="body1" alignSelf="center" color="#FFFFFF" fontWeight={600}>
          :
        </Typography>
        <AnimatedNumbers value={awayScore} />
      </Stack>
      <MatchStatusLabel status={status} />
    </Stack>
  );
};
