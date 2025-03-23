import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';

export type ThemeProviderProps = React.PropsWithChildren;

const theme = createTheme();

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
