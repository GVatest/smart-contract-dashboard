import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  getCrownsAction,
  selectApr,
  selectContract,
  selectCrowns,
} from 'features/contract';
import { selectBalance, selectWallet } from 'features/wallet';
import { useCallback, useMemo, useState } from 'react';
import {
  ButtonAccent,
  ButtonSecondary,
  SectionWrapper,
  StyledInput,
  StyledTable,
  StyledTableProps,
} from 'shared/ui';
import { round } from 'shared/utils';
import { ReactComponent as CrownIcon } from 'static/brand/Crown.svg';
import { useIncomes } from '../../utils';
import { CardInfo, Panel } from './ui';

const maxValue = 10 ** 3;

const messages = {
  buy: {
    error: 'Failed to buy crowns',
  },
};

type InvestProps = {
  sx?: SxProps<Theme>;
};

function Invest({ sx = [] }: InvestProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const contract = useAppSelector(selectContract);
  const apr = useAppSelector(selectApr);
  const crowns = useAppSelector(selectCrowns);
  const wallet = useAppSelector(selectWallet);
  const balance = useAppSelector(selectBalance);
  const [investment, setInvestment] = useState('');
  const incomes = useIncomes({
    investment: +investment,
    APR: apr,
    max: maxValue,
  });

  const tableData = useMemo(
    () =>
      ({
        rows: [
          { title: 'Weekly income', value: `${incomes.weekly} BNB` },
          { title: 'APR', value: `${apr} %` },
          { title: 'Daily income', value: `${incomes.daily} BNB` },
        ],
      } as StyledTableProps),
    [incomes]
  );

  const getAllBalance = useCallback(() => {
    if (balance) {
      setInvestment(balance);
    }
  }, [balance]);

  return (
    <SectionWrapper
      sx={sx}
      border={`1px ${theme.palette.secondary.main} solid`}
    >
      <Typography mb={3} variant='h1'>
        GET CROWNS AND EARN
      </Typography>
      <Grid
        container
        columns={{ xs: 1, sm: 2 }}
        flexWrap='nowrap'
        columnGap={{ xs: 0, sm: 3 }}
        rowGap={{ xs: 3, md: 0 }}
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Grid item xs={1}>
          <Stack spacing={3}>
            <Grid container columns={3} flexWrap='nowrap'>
              <Grid item xs={2}>
                <StyledInput
                  value={investment}
                  setValue={setInvestment}
                  label={`Investment < ${maxValue}`}
                  adortment='BNB'
                  type='number'
                  max={maxValue}
                  sx={{
                    [theme.breakpoints.down('md')]: {
                      '.MuiInputLabel-root': {
                        fontSize: 0,
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={1} ml={2}>
                <ButtonSecondary disabled={!balance} onClick={getAllBalance}>
                  All Balance
                </ButtonSecondary>
              </Grid>
            </Grid>
            <StyledTable rows={tableData.rows} />
            <Panel name={'Annual Income'} value={`${incomes.annual} BNB`} />
            <ButtonAccent
              onClick={
                contract && wallet
                  ? () =>
                      getCrownsAction({
                        errorMsg: messages.buy.error,
                        contract: contract,
                        amount: investment ? +investment : 0,
                        balance: balance ? +balance : 0,
                        wallet: wallet,
                        dispatch: dispatch,
                      })
                  : undefined
              }
              startIcon={
                <CrownIcon
                  style={{
                    marginRight: theme.spacing(),
                    opacity: !contract ? '0.3' : '1',
                  }}
                />
              }
              disabled={!contract}
            >
              Get Crowns
            </ButtonAccent>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Grid
            container
            columns={2}
            width='100%'
            height='100%'
            flexWrap='nowrap'
            columnGap={3}
          >
            <Grid
              item
              xs={1}
              display={'flex'}
              flexDirection='column'
              rowGap={3}
            >
              <CardInfo
                title='Wallet (BNB)'
                value={balance ? round(balance, 4).toString() : '0'}
              />
              <CardInfo
                title='BNB per day'
                value={incomes.daily ? incomes.daily.toString() : '0'}
              />
            </Grid>
            <Grid
              item
              xs={1}
              display={'flex'}
              flexDirection='column'
              rowGap={3}
            >
              <CardInfo
                icon={<CrownIcon height='1.8rem' />}
                title='Your crowns'
                value={crowns ? crowns : '0'}
              />
              <CardInfo title='Daily return' value={`12%`} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Invest;
