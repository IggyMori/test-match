import { useState } from 'react';
import { Card, Collapse, IconButton, Stack, styled } from '@mui/material';
import { ReactComponent as ArrowDownIcon } from '../../assets/dropdown_arrow_down.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/dropdown_arrow_up.svg';

import { Match } from '../../api/matches.types';
import { TeamInfo } from './TeamInfo/TeamInfo';
import { MatchInfo } from './MatchInfo/MatchInfo';
import { MatchDetails } from './MatchDetails';
import { useIsMobile } from '../../hooks/useIsMobile';

type MatchListItemProps = {
  match: Match;
};

const StyledRoot = styled(Card)(({ theme }) => ({
  display: 'flex',
  borderRadius: '4px',
  padding: '16px 16px',
  backgroundColor: '#0B0E12',

  [theme.breakpoints.down('sm')]: {
    padding: '8px',
  },
})) as typeof Card;

export const MatchListItem = (props: MatchListItemProps) => {
  const { match } = props;
  const { homeTeam, awayTeam, awayScore, homeScore, status } = match;
  const [areDetailsVisible, setAreDetailsVisible] = useState(false);
  const toggleDetails = () => setAreDetailsVisible(prev => !prev);
  const isMobile = useIsMobile();

  return (
    <StyledRoot>
      <Stack sx={{ width: '100%' }} spacing={{ xs: 1 }}>
        <Stack direction="row" justifyContent="space-between" spacing={{ xs: 1 }}>
          <TeamInfo isHomeTeam={true} name={homeTeam.name} />
          <MatchInfo homeScore={homeScore} awayScore={awayScore} status={status} />
          <Stack direction="row" spacing={1}>
            <TeamInfo name={awayTeam.name} />
            {!isMobile && (
              <IconButton
                onClick={toggleDetails}
                sx={{
                  padding: 0,
                  height: 'auto',
                  minHeight: 0,
                  alignSelf: 'center',
                }}
              >
                {!areDetailsVisible ? <ArrowDownIcon /> : <ArrowUpIcon />}
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Collapse in={areDetailsVisible}>
          <MatchDetails homeTeam={homeTeam} awayTeam={awayTeam} />
        </Collapse>

        {isMobile && (
          <IconButton
            onClick={toggleDetails}
            sx={{
              padding: 0,
              height: 'auto',
              minHeight: 0,
              alignSelf: 'center',
            }}
          >
            {!areDetailsVisible ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </IconButton>
        )}
      </Stack>
    </StyledRoot>
  );
};
