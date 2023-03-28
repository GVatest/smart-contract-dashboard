import { DrawerProps } from '@mui/material/Drawer';
import { Stack } from '@mui/system';
import { HeaderMenuItem } from 'app/Header';
import HeaderButton from '../HeaderButton';
import StyledDrawer from './styles';

type MobileMenuProps = {
  data: HeaderMenuItem[];
};

function MobileMenu({ data, ...props }: DrawerProps & MobileMenuProps) {
  return (
    <StyledDrawer {...props} anchor='top'>
      <Stack spacing={8}>
        {data.map(({ label, href }, key) => (
          <HeaderButton
            sx={{ fontWeight: 700, padding: 1, '&:after': { opacity: 1 } }}
            {...{
              key: key,
              to: href,
            }}
          >
            {label}
          </HeaderButton>
        ))}
      </Stack>
    </StyledDrawer>
  );
}

export default MobileMenu;
