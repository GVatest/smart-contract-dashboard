import { Container, ContainerProps, styled } from '@mui/material';

const LayoutStyles = styled(Container)<ContainerProps>(({ theme }) => ({
  padding: (theme.spacing()[0] as unknown as number) * 3,
}));

export default LayoutStyles;
