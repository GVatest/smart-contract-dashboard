import { styled } from '@mui/material';
import ButtonRoot from './ButtonRoot';

const ButtonSecondary = styled(ButtonRoot)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: '#363732',
  '&:hover': {
    borderColor: theme.palette.secondary.main,
    background: '#363732',
  },
  '&:active': {
    borderColor: 'transparent',
  },
}));

export default ButtonSecondary;
