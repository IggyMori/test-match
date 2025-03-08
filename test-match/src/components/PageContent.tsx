import React from 'react';
import { useMatches } from '../hooks/useMatches';
import { CircularProgress, Stack, styled } from '@mui/material';
import { MatchListItem } from './Match/MatchListItem';
import { Header } from './Header';
import { LoadingIndicator } from './LoadingIndicator';

const StyledRoot = styled(Stack)({
  width: '100%',
}) as typeof Stack;

export const PageContent = () => {
  const { data: matchesResponse, isFetching } = useMatches();

  const { data, ok } = matchesResponse ?? {};
  const { matches } = data ?? {};

  return (
    <StyledRoot spacing={2.5}>
      <Header isLoading={isFetching} ok={ok} />
      {isFetching && <LoadingIndicator />}
      {!isFetching && matches && matches.map((match, index) => <MatchListItem match={match} key={index} />)}
    </StyledRoot>
  );
};
