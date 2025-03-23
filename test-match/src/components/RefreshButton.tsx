import { Button, ButtonProps, styled } from '@mui/material';
import { ReactComponent as RefreshIcon } from '../assets/refresh.svg';
import { useMatches } from '../hooks/useMatches';
import useWebSocket from '../hooks/useWebSockets';

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
  const { refetch } = useMatches();
  const socket = useWebSocket();

  const handleRefresh = () => {
    refetch();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ action: 'refresh' }));
    }
  };

  return (
    <StyledButton
      {...restOfProps}
      fullWidth={true}
      onClick={handleRefresh}
      endIcon={<RefreshIcon />}
      disabled={isDisabled}
    >
      Обновить
    </StyledButton>
  );
};
