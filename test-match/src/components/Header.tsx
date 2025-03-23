import { Stack } from '@mui/material';
import matchTrackerPng from '../assets/match_tracker.png';
import { RefreshButton } from './RefreshButton';
import { ErrorInfoCard } from './ErroInfoCard';
import { StatusFilter } from './StatusFilter';

type HeaderProps = {
  isLoading: boolean;
  ok?: boolean;
};

export const Header = (props: HeaderProps) => {
  const { isLoading, ok = true } = props;
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1.25 }}
      justifyContent="space-between"
      alignItems="center"
      sx={{ xs: { width: '100%' }, sm: { width: '100%' } }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1.75, sm: 3 }}
        width={{ xs: '100%', sm: 'auto' }}
        justifyContent="center"
        alignItems="center"
      >
        <img src={matchTrackerPng} alt="Match Tracker" width={250} />
        <StatusFilter />
      </Stack>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} width={{ xs: '100%', sm: 'auto' }}>
        {!ok && <ErrorInfoCard />}
        <RefreshButton isLoading={isLoading} />
      </Stack>
    </Stack>
  );
};
