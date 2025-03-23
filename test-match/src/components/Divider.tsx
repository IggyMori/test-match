import { Stack, Typography, Divider as MuiDivider } from '@mui/material';

type DividerProps = {
  title: string;
};

export const Divider = (props: DividerProps) => {
  const { title } = props;

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
      <MuiDivider sx={{ flex: 1, backgroundColor: '#333' }} />
      <Typography variant="body1" color="#313A47" fontWeight={600}>
        {title}
      </Typography>
      <MuiDivider sx={{ flex: 1, backgroundColor: '#333' }} />
    </Stack>
  );
};
