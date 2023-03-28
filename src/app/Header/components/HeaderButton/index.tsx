import { ButtonBase, ButtonProps, styled } from '@mui/material';

const HeaderButton = styled(ButtonBase)<ButtonProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    bottom: `-${theme.spacing()}`,
    left: 0,
    backgroundColor: theme.palette.primary.contrastText,
    height: '2px',
    opacity: 0,
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '&:hover': {
    ':after': {
      opacity: 1,
    },
    color: theme.palette.text.primary,
  },
}));

export default HeaderButton;
