import { styled, TextField, TextFieldProps } from '@mui/material';

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    background: theme.palette.primary.dark,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderWidth: 1,

        transition: theme.transitions.create(['all'], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeInOut,
        }),
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#fff !important',
    },
  })
);
