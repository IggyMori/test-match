export type MatchesStatus = typeof MATCH_STATUS_SCHEDULED | typeof MATCH_STATUS_ONGOING | typeof MATCH_STATUS_FINISHED;

export const MATCH_STATUS_SCHEDULED = 'Scheduled';
export const MATCH_STATUS_ONGOING = 'Ongoing';
export const MATCH_STATUS_FINISHED = 'Finished';

export const NamesByMatchStatus = {
  [MATCH_STATUS_ONGOING]: 'Live',
  [MATCH_STATUS_SCHEDULED]: 'Match Preparing',
  [MATCH_STATUS_FINISHED]: 'Finished',
} as const;

export const ColorByMatchStatus = {
  [MATCH_STATUS_ONGOING]: '#43AD28',
  [MATCH_STATUS_SCHEDULED]: '#EB6402',
  [MATCH_STATUS_FINISHED]: '#EB0237',
} as const;
