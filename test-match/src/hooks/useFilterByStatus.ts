import { useMemo, useRef, useEffect } from 'react';
import { MATCH_STATUS_ALL } from '../constants/matches-status.constants';
import { Match } from '../api/matches.types';
import { useMatchesFilterStatusValue } from '../components/matches-store';

const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
};

type UseFilterByStatusSettings = {
  list: Match[];
};

export const useFilterByStatus = (settings: UseFilterByStatusSettings) => {
  const { list } = settings;
  const status = useMatchesFilterStatusValue();
  const latestList = useLatest(list);

  return useMemo(() => {
    if (!status || status === MATCH_STATUS_ALL) {
      return latestList.current;
    }

    if (!latestList.current) return [];

    return latestList.current.filter(item => item.status === status);
  }, [status, list]);
};
