import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material';

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  background: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 11px 23px rgba(39, 174, 96, 0.16)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 20px',
}));

export default StyledBox;
