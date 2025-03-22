import { create } from 'zustand';
import { MatchesResponse } from '../api/matches.types';
import { DEFAULT_MATCH_STATUS, MatchesStatusSelect } from '../constants/matches-status.constants';

const defaultMatchesData: MatchesResponse = {
  ok: true,
  data: {
    matches: [],
  },
};

type StoreState = {
  filterStatusValue: MatchesStatusSelect;
  matchesData: MatchesResponse;
  actions: {
    setMatchesData: (data: MatchesResponse) => void;
    setFilterStatusValue: (filterStatusValue: MatchesStatusSelect) => void;
  };
};

export const useMatchesStore = create<StoreState>(set => ({
  filterStatusValue: DEFAULT_MATCH_STATUS,
  matchesData: defaultMatchesData,
  actions: {
    setMatchesData: (data: MatchesResponse) => set({ matchesData: data }),
    setFilterStatusValue: (filterStatusValue: MatchesStatusSelect) => set({ filterStatusValue }),
  },
}));

export const useMatchesStoreActions = () => useMatchesStore(state => state.actions);
export const useMatchesFilterStatusValue = () => useMatchesStore(state => state.filterStatusValue);
