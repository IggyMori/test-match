import { useQuery } from '@tanstack/react-query';
import { MatchesApi } from '../api/matches.api';
import { MatchesQueryKeys } from '../api/matches.query-keys';

export const useMatches = () =>
  useQuery({
    queryFn: () => MatchesApi.fetchMatches(),
    queryKey: MatchesQueryKeys.root,
    staleTime: Infinity,
  });
