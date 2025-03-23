import { Stack } from '@mui/material';
import { Team } from '../../api/matches.types';
import { TeamDetails } from './TeamInfo/TeamDetails';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Divider } from '../Divider';

type MatchDetailsProps = {
  homeTeam: Team;
  awayTeam: Team;
};

export const MatchDetails = (props: MatchDetailsProps) => {
  const { homeTeam, awayTeam } = props;
  const isMobile = useIsMobile();

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 4 }}
      justifyContent="space-between"
      padding={1}
    >
      <TeamDetails team={homeTeam} />

      {isMobile && <Divider title="VS" />}
      <TeamDetails team={awayTeam} />
    </Stack>
  );
};
