import { initContract } from 'features/contract';
import FinInfo from './components/FinInfo';
import Invest from './components/Invest';
import Layout, { gridAreas } from './components/Layout';
import Referral from './components/Referral';
import Reward from './components/Reward';

function Main() {
  initContract();

  return (
    <Layout>
      <Invest sx={{ gridArea: gridAreas.INVEST }} />
      <Reward sx={{ gridArea: gridAreas.REWARD }} />
      <FinInfo sx={{ gridArea: gridAreas.FININFO }} />
      <Referral sx={{ gridArea: gridAreas.REFERRAL }} />
    </Layout>
  );
}

export default Main;
