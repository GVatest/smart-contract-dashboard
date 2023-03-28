import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/store/hooks';
import { selectApr, selectTvl } from 'features/contract';
import { SectionWrapper, StyledTable, StyledTableProps } from 'shared/ui';
import { round } from 'shared/utils';

type FinInfoProps = {
  sx?: SxProps<Theme>;
};

function FinInfo({ sx = [] }: FinInfoProps) {
  const tvl = useAppSelector(selectTvl);
  const apr = useAppSelector(selectApr);

  const tableData = {
    rows: [
      { title: 'Contract TVL', value: tvl ? round(tvl, 4).toString() : '0' },
      { title: 'APR', value: `${apr} %` },
      { title: 'Developer fee', value: '5 %' },
    ],
  } as StyledTableProps;

  return (
    <SectionWrapper sx={sx}>
      <Stack spacing={3}>
        <Typography variant='h2'>FINANCIAL INFO</Typography>
        <StyledTable rows={tableData.rows} />
      </Stack>
    </SectionWrapper>
  );
}

export default FinInfo;
