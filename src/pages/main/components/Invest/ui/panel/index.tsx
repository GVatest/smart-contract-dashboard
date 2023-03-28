import StyledBox from './styles';
import Typography from '@mui/material/Typography';

type PanelProps = {
  name: string;
  value: string | number;
};

function Panel({ name, value }: PanelProps) {
  return (
    <StyledBox>
      <Typography color={'#27AE60'} variant='h4'>
        {name}
      </Typography>
      <Typography color={'#27AE60'} variant='h3'>
        {value}
      </Typography>
    </StyledBox>
  );
}

export default Panel;
