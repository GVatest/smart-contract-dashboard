import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import theme from 'shared/config/theme';

export const withTheme = (component: () => React.ReactElement) => () =>
  <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
