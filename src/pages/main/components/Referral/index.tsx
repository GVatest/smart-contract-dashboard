import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/store/hooks';
import { selectConnected, selectWallet } from 'features/wallet';
import { ButtonSecondary, SectionWrapper, StyledInput } from 'shared/ui';
import { alert, copyToClipboard } from 'shared/utils';
import { ReactComponent as CopyIcon } from 'static/action/Copy.svg';
import { ReactComponent as ReferralsImage } from 'static/brand/Referrals.svg';

type ReferralProps = {
  sx?: SxProps<Theme>;
};

function Referral({ sx = [] }: ReferralProps) {
  const theme = useTheme();
  const wallet = useAppSelector(selectWallet);
  const isConnected = useAppSelector(selectConnected);
  const referral = isConnected ? `https://bnb-king.finance/?ref=${wallet}` : '';

  function handleClick(value: string) {
    copyToClipboard(value);
    alert.success('Copied');
  }

  return (
    <SectionWrapper sx={sx}>
      <Stack
        spacing={3}
        sx={{
          width: '80%',
          zIndex: 1,
          position: 'relative',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        }}
      >
        <Typography variant='h2'>REFERRAL PROGRAM</Typography>
        <Grid container flexWrap='nowrap' justifyContent='flex-start'>
          <Grid width='100%' item>
            <StyledInput
              label='Referral link'
              value={referral}
              disabled={!isConnected}
            />
          </Grid>
          <Grid item ml={3}>
            <ButtonSecondary
              onClick={() => handleClick(referral)}
              disabled={!isConnected}
              startIcon={
                <CopyIcon
                  style={{
                    opacity: !isConnected ? '0.3' : '1',
                  }}
                />
              }
              sx={{ whiteSpace: 'nowrap', paddingLeft: 2, paddingRight: 2 }}
            >
              Copy link
            </ButtonSecondary>
          </Grid>
        </Grid>
        <Typography variant='h4'>
          Earn 15% of the BNB from anyone who uses your referral link used to
          open the farm
        </Typography>
      </Stack>
      <ReferralsImage
        style={{
          display: 'block',
          position: 'absolute',
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.7,
        }}
      />
    </SectionWrapper>
  );
}

export default Referral;
