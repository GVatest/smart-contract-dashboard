import { Box, BoxProps, styled } from '@mui/material';

export enum gridAreas {
  INVEST = 'invest',
  FININFO = 'finInfo',
  REWARD = 'reward',
  REFERRAL = 'referral',
}

const Layout = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'grid',
  gridGap: `${theme.spacing()[0] as unknown as number * 2}px`,
  gridTemplateColumns: '3fr 1fr',
  gridTemplateAreas: `
  "${gridAreas.INVEST} ${gridAreas.REWARD}"
  "${gridAreas.INVEST} ${gridAreas.FININFO}"
  "${gridAreas.REFERRAL} ${gridAreas.REFERRAL}"`,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
    "${gridAreas.INVEST} ${gridAreas.INVEST}"
    "${gridAreas.REWARD} ${gridAreas.FININFO}"
    "${gridAreas.REFERRAL} ${gridAreas.REFERRAL}"`,
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
    "${gridAreas.INVEST}"
    "${gridAreas.REWARD}"
    "${gridAreas.FININFO}"
    "${gridAreas.REFERRAL}"`,
  },
}));

export default Layout;
