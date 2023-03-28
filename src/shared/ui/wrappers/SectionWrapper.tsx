import { styled } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

const SectionWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 8px 16px rgb(0 0 0 / 25%)',
  padding: theme.spacing(3),
}));

export default SectionWrapper;
