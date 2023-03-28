import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material';

const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  background: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
  border: `1px ${theme.palette.primary.light} solid`,
  transition: theme.transitions.create(['border'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    border: `1px ${theme.palette.secondary.main} solid`,
  },
}));

export default StyledStack;
