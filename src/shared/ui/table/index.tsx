import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Row = {
  title: string;
  value: string;
};

export type StyledTableProps = {
  rows: Row[];
};

function StyledTable({ rows }: StyledTableProps) {
  return (
    <Stack spacing={2}>
      {rows.map((row, key) => (
        <Grid
          container
          columns={3}
          flexWrap='nowrap'
          justifyContent='space-between'
          key={key}
        >
          <Grid item>
            <Typography variant='h4'>{row.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3'>{row.value}</Typography>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
}

export default StyledTable;
