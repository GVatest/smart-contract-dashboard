import { TextFieldProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import React, { Dispatch, SetStateAction } from 'react';
import { StyledTextField } from './styles';

type StyledInputProps = {
  value: string;
  setValue?: Dispatch<SetStateAction<string>>;
  type?: 'number' | 'text';
  disabled?: boolean;
  label?: string;
  adortment?: string;
  max?: number;
};

function StyledInput({
  value,
  setValue,
  label,
  adortment,
  disabled = false,
  type = 'text',
  max,
  ...props
}: StyledInputProps & TextFieldProps) {
  const numRegex = /^\d*\.?\d*$/;

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>
  ) {
    const valueToSet = e.target.value;
    if (type === 'number') {
      if (valueToSet === '' || numRegex.test(valueToSet)) {
        if (max) {
          if (+valueToSet <= max) setState(valueToSet);
        } else {
          setState(valueToSet);
        }
      }
    } else {
      setState(valueToSet);
    }
  }

  return (
    <StyledTextField
      label={label}
      id='filled-start-adornment'
      variant='outlined'
      size='medium'
      disabled={disabled}
      onChange={setValue ? (e) => handleChange(e, setValue) : undefined}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>{adortment}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
}

export default StyledInput;
