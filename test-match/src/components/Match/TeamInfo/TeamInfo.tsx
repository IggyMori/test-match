import React from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { Team } from '../../api/matches.types';
import { ReactComponent as TeamSvg } from '../../../assets/team.svg';

type TeamInfoProps = {
  name: Team['name'];
  isHomeTeam?: boolean;
};

const StyledTypography = styled(Typography)({
  fontWeight: 600,
  fontSize: '16px',
  color: '#FFFFFF',
}) as typeof Typography;

export const TeamInfo = (props: TeamInfoProps) => {
  const { name, isHomeTeam } = props;

  return (
    <Stack direction="row" spacing={1.75} alignItems="center">
      {isHomeTeam && <TeamSvg />}
      <StyledTypography>{name}</StyledTypography>
      {!isHomeTeam && <TeamSvg />}
    </Stack>
  );
};
