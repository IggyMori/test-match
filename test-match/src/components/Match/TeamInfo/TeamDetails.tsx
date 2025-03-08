import { Box, Card, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import { Player, Team } from '../../../api/matches.types';
import { ReactComponent as AvatarIcon } from '../../../assets/avatar.svg';

import React from 'react';

type TeamDetailsProps = {
  team: Team;
};

type PlayerItemProps = {
  player: Player;
};

type ScoreInfoProps = {
  title: string;
  value: string;
};

type TeamStatisticsProps = {
  teamStatistics: ScoreInfoProps[];
};

const StyledCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  height: '52px',
  padding: '0 16px',
  minWidth: 0,
  backgroundColor: '#101318',
}) as typeof Card;

const ScroreInfo = (props: ScoreInfoProps) => {
  const { title, value } = props;
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography fontSize="12px" fontWeight={500} color="#FAFAFA66">
        {title}
      </Typography>

      <Typography fontSize="12px" fontWeight={500} color="#FFFFFF">
        {value}
      </Typography>
    </Stack>
  );
};

const PlayerItem = ({ player }: PlayerItemProps) => (
  <StyledCard component={Stack} direction="row" spacing={1} alignItems="center">
    <AvatarIcon />
    <Stack direction="row" flexGrow={1} alignItems="center" justifyContent="space-between" minWidth={0}>
      <Typography fontSize="12px" fontWeight={600} color="#FFFFFF" noWrap>
        {player.username}
      </Typography>
      <ScroreInfo title="Убийств:" value={String(player.kills)} />
    </Stack>
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
      title: 'Points',
      value: `+${points}`,
    },
    {
      title: 'Место',
      value: String(place),
    },
    {
      title: 'Всего убийств',
      value: String(total_kills),
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
