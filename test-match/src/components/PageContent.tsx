import React from 'react';
import { useMatches } from '../hooks/useMatches';
import { Stack, styled } from '@mui/material';
import { MatchListItem } from './Match/MatchListItem';

const StyledRoot = styled(Stack)({
  width: '100%',
}) as typeof Stack;

export const PageContent = () => {
  const { data: matchesResponse } = useMatches();

  const { data } = matchesResponse ?? {};
  const { matches } = data ?? {};

  return (
    <StyledRoot spacing={2.5}>
      {matches && matches.map((match, index) => <MatchListItem match={match} key={index} />)}
    </StyledRoot>
  );
};
