import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { MATCH_STATUSES, MatchesStatusSelect, NamesByMatchStatus } from '../constants/matches-status.constants';
import { useMatchesFilterStatusValue, useMatchesStoreActions } from './matches-store';

export const StatusFilter = () => {
  const filterStatusValue = useMatchesFilterStatusValue();
  const { setFilterStatusValue } = useMatchesStoreActions();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<MatchesStatusSelect>) => {
    const selectedValue = event.target.value;
    setFilterStatusValue(selectedValue as MatchesStatusSelect);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Select
      value={filterStatusValue}
      onChange={handleChange}
      open={isOpen}
      onOpen={() => toggleDropdown()}
      onClose={() => toggleDropdown()}
      sx={{
        backgroundColor: '#0B0E12',
        '& .MuiTypography-root': {
          color: '#B4B5B6',
        },
        '& .MuiSelect-icon': {
          color: '#B4B5B6',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            '& .MuiTypography-root': {
              color: '#B4B5B6',
            },
            backgroundColor: '#0B0E12',
          },
        },
      }}
    >
      {MATCH_STATUSES.map(status => (
        <MenuItem key={status} value={status}>
          <Typography variant="body1" color="text.primary">
            {NamesByMatchStatus[status]}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
};
