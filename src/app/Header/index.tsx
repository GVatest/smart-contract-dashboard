import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ConnectButton } from 'features/wallet';
import { useState } from 'react';
import { useWindowWidth } from 'shared/utils';
import { ReactComponent as Logo } from 'static/brand/Logo.svg';
import BurgerIcon from './components/BurgerIcon';
import HeaderButton from './components/HeaderButton';
import MobileMenu from './components/MobileMenu';
import about_the_project from './docs/BNB-KING-ABOUT-THE-PROJECT.pdf';
import whitepaper from './docs/BNB-KING-WHITEPAPER.pdf';
import audit from './docs/HazeSecurity_BNB_KING.pdf';

export type HeaderMenuItem = {
  label: string;
  href: string;
};

const headerData = [
  { label: 'ABOUT THE PROJECT', href: about_the_project },
  { label: 'WHITEPAPER', href: whitepaper },
  { label: 'CONTRACT', href: import.meta.env['VITE_CONTRACT_URL'] },
  { label: 'AUDIT', href: audit },
] as HeaderMenuItem[];

function Header() {
  const [open, setOpen] = useState(false);
  const { width: windowWidth } = useWindowWidth();

  function displayDesktop() {
    return (
      <Toolbar
        sx={{
          display: 'flex',
          columnGap: 4,
        }}
      >
        {headerData.map(({ label, href }, key) => (
          <HeaderButton href={href} key={key}>
            {label}
          </HeaderButton>
        ))}
      </Toolbar>
    );
  }

  function displayMobile() {
    return (
      <>
        <BurgerIcon open={open} onOpen={() => setOpen(true)} />
        <MobileMenu
          data={headerData}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  }

  return (
    <AppBar
      sx={{
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Logo />
      {windowWidth >= 1024 && displayDesktop()}
      <ConnectButton />
      {windowWidth < 1024 && displayMobile()}
    </AppBar>
  );
}

export default Header;
