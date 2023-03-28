import Stack from '@mui/material/Stack';
import { PropsWithChildren } from 'react';
import LayoutStyles from './styles';

function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutStyles>
      <Stack spacing={3}>{children}</Stack>
    </LayoutStyles>
  );
}

export default Layout;
