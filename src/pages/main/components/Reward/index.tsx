import Box from '@mui/material/Box';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Stack from '@mui/system/Stack';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  claimAction,
  reinvestAction,
  selectContract,
  selectReward,
} from 'features/contract';
import { ButtonAccent, ButtonSecondary, SectionWrapper } from 'shared/ui/';
import { round } from 'shared/utils';
import { ReactComponent as RewardIcon } from 'static/brand/Reward.svg';

const messages = {
  reinvest: {
    error: "Couldn't reinvest your crowns",
    success: 'Reinvested',
  },
  claim: {
    error: "Couldn't claim your reward",
    success: 'Claimed',
  },
};

type RewardlProps = {
  sx?: SxProps<Theme>;
};

function Reward({ sx = [] }: RewardlProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const contract = useAppSelector(selectContract);
  const reward = useAppSelector(selectReward);

  return (
    <SectionWrapper sx={sx}>
      <Stack spacing={3}>
        <Typography variant='h2'>YOUR REWARD</Typography>
        <Typography
          sx={{
            fontSize: theme.typography.pxToRem(30),
            [theme.breakpoints.down('md')]: {
              fontSize: theme.typography.pxToRem(25),
            },
          }}
          variant='h3'
        >
          {(reward ? round(reward, 4) : '0.0') + ' BNB'}
        </Typography>
        <Grid2 container columns={3} flexWrap='nowrap'>
          <Grid2 xs={2}>
            <ButtonAccent
              onClick={
                contract
                  ? () =>
                      reinvestAction({
                        errorMsg: messages.reinvest.error,
                        successMsg: messages.reinvest.success,
                        contract: contract,
                        dispatch: dispatch,
                      })
                  : undefined
              }
              disabled={!contract}
            >
              Reinvest
            </ButtonAccent>
          </Grid2>
          <Grid2 xs={1} ml={2}>
            <ButtonSecondary
              onClick={
                contract
                  ? () =>
                      claimAction({
                        errorMsg: messages.claim.error,
                        successMsg: messages.claim.success,
                        contract: contract,
                        dispatch: dispatch,
                      })
                  : undefined
              }
              disabled={!contract}
            >
              Claim
            </ButtonSecondary>
          </Grid2>
        </Grid2>
      </Stack>
      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <RewardIcon />
      </Box>
    </SectionWrapper>
  );
}

export default Reward;
