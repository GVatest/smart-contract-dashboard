import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { StackProps } from '@mui/material/Stack';
import StyledStack from './styles';

export type CardProps = {
  title: string;
  value: string;
  icon?: React.ReactNode;
};

function CardInfo({ title, value, icon, ...props }: CardProps & StackProps) {
  const theme = useTheme();

  return (
    <StyledStack
      width='100%'
      height='100%'
      direction='column'
      spacing={1}
      {...props}
    >
      <Typography variant='h4'>{title}</Typography>
      <Box display='flex' columnGap={1}>
        <Typography sx={{
          fontSize: theme.typography.pxToRem(26),
          [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.pxToRem(24),
          },
        }} variant='h3'>
          {value}
        </Typography>
        {icon}
      </Box>
    </StyledStack>
  );
}

export default CardInfo;
