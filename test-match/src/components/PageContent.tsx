import { useMatches } from '../hooks/useMatches';
import { Stack, styled } from '@mui/material';
import { MatchListItem } from './Match/MatchListItem';
import { Header } from './Header';
import { LoadingIndicator } from './LoadingIndicator';
import useWebSockets from '../hooks/useWebSockets';
import { useMatchesStore } from './matches-store';
import { useFilterByStatus } from '../hooks/useFilterByStatus';

const StyledRoot = styled(Stack)({
  width: '100%',
}) as typeof Stack;

export const PageContent = () => {
  useWebSockets();
  const { isFetching } = useMatches();
  const { data, ok } = useMatchesStore(state => state.matchesData);
  const filteredMatches = useFilterByStatus({ list: data.matches });

  return (
    <StyledRoot spacing={2.5}>
      <Header isLoading={isFetching} ok={ok} />
      {isFetching && <LoadingIndicator />}
      {!isFetching && filteredMatches.map((match, index) => <MatchListItem match={match} key={index} />)}
    </StyledRoot>
  );
};
