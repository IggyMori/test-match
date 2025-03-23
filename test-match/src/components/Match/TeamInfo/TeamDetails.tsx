import { Box, Card, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import { Player, Team } from '../../../api/matches.types';
import { ReactComponent as AvatarIcon } from '../../../assets/avatar.svg';
import { AnimatedNumbers } from '../../AnimatedNumbers';

type TeamDetailsProps = {
  team: Team;
};

type PlayerItemProps = {
  player: Player;
};

type ScoreInfoProps = {
  title: string;
  value: number;
};

type TeamStatisticsProps = {
  teamStatistics: ScoreInfoProps[];
};

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  minHeight: '52px',
  padding: '0 16px',
  minWidth: 0,
  backgroundColor: '#101318',

  [theme.breakpoints.down('sm')]: {
    padding: '7px 8px',
  },
})) as typeof Card;

const ScroreInfo = (props: ScoreInfoProps) => {
  const { title, value } = props;
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography fontSize="14px" fontWeight={500} color="#FAFAFA66">
        {title}
      </Typography>

      <Stack direction="row" alignItems="center">
        <Typography fontSize="14px" fontWeight={500} color="#FFFFFF">
          {title === 'Points:' && '+'}
        </Typography>
        <AnimatedNumbers value={value} fontSize={16} />
      </Stack>
    </Stack>
  );
};

const PlayerItem = ({ player }: PlayerItemProps) => (
  <StyledCard
    component={Stack}
    direction={{ xs: 'column', sm: 'row' }}
    spacing={1}
    alignItems="center"
    justifyContent="space-between"
  >
    <Stack direction="row" alignItems="center" spacing={1}>
      <AvatarIcon />
      <Typography fontSize="12px" fontWeight={600} color="#FFFFFF" noWrap>
        {player.username}
      </Typography>
    </Stack>

    <ScroreInfo title="Убийств:" value={player.kills} />
  </StyledCard>
);

const TeamStatistics = (props: TeamStatisticsProps) => {
  const { teamStatistics } = props;
  return (
    <StyledCard>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: '100%' }}
        divider={<Divider orientation="vertical" flexItem sx={{ height: '16px', bgcolor: '#141A21' }} />}
      >
        {teamStatistics.map((scoreInfo, index) => (
          <Box sx={{ flex: 1, justifyItems: 'center' }}>
            <ScroreInfo key={index} title={scoreInfo.title} value={scoreInfo.value} />
          </Box>
        ))}
      </Stack>
    </StyledCard>
  );
};

export const TeamDetails = (props: TeamDetailsProps) => {
  const { team } = props;

  const { players, place, points, total_kills } = team;

  const teamStatistics = [
    {
      title: 'Points:',
      value: points,
    },
    {
      title: 'Место:',
      value: place,
    },
    {
      title: 'Всего убийств:',
      value: total_kills,
    },
  ];
  const xsValue = 12 / players.length;

  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {players.map((player, index) => (
            <Grid item xs={xsValue} key={index}>
              <PlayerItem player={player} key={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TeamStatistics teamStatistics={teamStatistics} />
      </Grid>
    </Grid>
  );
};
