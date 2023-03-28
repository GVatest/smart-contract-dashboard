import { withProviders } from './providers';
import { CssBaseline } from '@mui/material';
import Layout from './Layout';
import Header from './Header';
import { Main } from 'pages';
import Footer from './Footer';

function App() {
  return (
    <Layout>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}

export default withProviders(App);
