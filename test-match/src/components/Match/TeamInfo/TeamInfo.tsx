import { Stack, styled, Typography } from '@mui/material';
import { ReactComponent as TeamSvg } from '../../../assets/team.svg';
import { Team } from '../../../api/matches.types';

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
