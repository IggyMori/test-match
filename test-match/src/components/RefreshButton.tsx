import { Button, ButtonProps, styled } from '@mui/material';
import { ReactComponent as RefreshIcon } from '../assets/refresh.svg';
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { MatchesQueryKeys } from '../api/matches.query-keys';

const StyledButton = styled(Button)({
  backgroundColor: '#EB0237',
  fontFamily: 'Inter',
  color: '#FFFFFF',
  padding: '16px 24px',

  '&:hover': {
    backgroundColor: '#A01131',
  },

  '&.Mui-disabled': {
    backgroundColor: '#701328',
    color: '#FFFFFF',
    opacity: 0.7,
  },
}) as typeof Button;

type RefreshButtonProps = Omit<ButtonProps, 'endIcon'> & {
  isLoading?: boolean;
};

export const RefreshButton = (props: RefreshButtonProps) => {
  const { isLoading, disabled, ...restOfProps } = props;

  const isDisabled = isLoading || disabled;
  const queryClient = useQueryClient();

  const handleOnclick = () => queryClient.invalidateQueries({ queryKey: MatchesQueryKeys.root });

  return (
    <StyledButton {...restOfProps} onClick={handleOnclick} endIcon={<RefreshIcon />} disabled={isDisabled}>
      Обновить
    </StyledButton>
  );
};
