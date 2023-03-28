import { darken, styled } from '@mui/material';
import { ButtonRoot } from 'shared/ui';

const ConnectButtonStyle = styled(ButtonRoot)(({ theme }) => ({
  background: '#27AE60',
  padding: '11px 20px',
  width: 'fit-content',
  height: 'fit-content',
  color: theme.palette.text.primary,
  boxShadow: '0px 11px 23px rgb(39 174 96 / 16%)',
  '&:hover': {
    background: darken('#27AE60', 0.1),
    boxShadow: '0px 11px 23px rgb(39 174 96 / 26%)',
  },
  '&.Mui-disabled': {
    color: theme.palette.text.primary,
    boxShadow: '0px 11px 23px rgb(39 174 96 / 16%)',
    background: '#27AE60',
  },
}));

export default ConnectButtonStyle;
