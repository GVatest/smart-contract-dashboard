import { Button, ButtonProps, styled } from '@mui/material';

const ButtonRoot = styled(Button)<ButtonProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  whiteSpace: 'nowrap',
  border: '1px transparent solid',
  borderRadius: theme.shape.borderRadius,
  fontWeight: theme.typography.fontWeightRegular,
  textTransform: 'none',
  padding: `${theme.spacing(1.5)} 0`,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

export default ButtonRoot;
