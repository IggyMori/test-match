import { Card, Grid, Stack, styled, Typography } from '@mui/material';
import { Player, Team } from '../../../api/matches.types';
import { ReactComponent as AvatarIcon } from '../../../assets/avatar.svg';

import React from 'react';

type TeamDetailsProps = {
  team: Team;
};

type PlayerItemProps = {
  player: Player;
};

const PlayerCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  padding: '14px 24px',
  backgroundColor: '#101318',
  justifyContent: 'space-between',
}) as typeof Card;

const PlayerItem = ({ player }: PlayerItemProps) => (
  <PlayerCard>
    <Stack direction="row" spacing={1} alignItems="center">
      <AvatarIcon />
      <Typography variant="body2" fontWeight={600} color="#FFFFFF">
        {player.username}
      </Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body2" fontWeight={600} color="#FAFAFA66">
        Убийств:
      </Typography>

      <Typography variant="body2" fontWeight={600} color="#FFFFFF">
        {player.kills}
      </Typography>
    </Stack>
  </PlayerCard>
);

export const TeamDetails = (props: TeamDetailsProps) => {
  const { team } = props;

  const { players } = team;

  const xsValue = 12 / players.length;

  return (
    <Grid container>
      {players.map((player, index) => (
        <Grid item xs={xsValue} key={index}>
          <PlayerItem player={player} key={index} />
        </Grid>
      ))}
    </Grid>
  );
};
