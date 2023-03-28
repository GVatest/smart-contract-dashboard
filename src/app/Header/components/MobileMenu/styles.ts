import { Drawer, DrawerProps, styled } from '@mui/material';

const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  '& .MuiDrawer-paper': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: '#000000de',
    padding: '50px',
  },
}));

export default StyledDrawer;
