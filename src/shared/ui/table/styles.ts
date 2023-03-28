import { styled } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));
