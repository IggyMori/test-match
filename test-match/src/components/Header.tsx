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
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" spacing={3}>
        <img src={matchTrackerPng} alt="Match Tracker" width={250} />
        <StatusFilter />
      </Stack>
      <Stack direction="row" spacing={1.5}>
        {!ok && <ErrorInfoCard />}
        <RefreshButton isLoading={isLoading} />
      </Stack>
    </Stack>
  );
};
