import { styled } from '@mui/material';
import ButtonRoot from './ButtonRoot';

const ButtonAccent = styled(ButtonRoot)(({ theme }) => ({
  boxShadow: '0px 11px 23px rgba(240, 198, 61, 0.16)',
  color: theme.palette.primary.dark,
  background: 'linear-gradient(86.18deg, #F0C53A 1.99%, #F1DC7F 144.62%)',
  '&:hover': {
    boxShadow: '0px 5px 23px rgba(240, 198, 61, 0.46)',
  },
  '&:active': {
    boxShadow: '0px 11px 23px rgba(240, 198, 61, 0.16)',
  },
}));

export default ButtonAccent;
