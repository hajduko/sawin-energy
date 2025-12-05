import { useState } from 'react';
import Popup from '../../../components/realestatefeedbackpopup/RealEstateFeedBackPopUp';
import { Helmet } from 'react-helmet-async';
import ForAgentsHero from './components/ForAgentsHero';
import ForAgentsUs from './components/ForAgentsUs';
import Footer from '../../../components/footer/Footer';
import ForAgentsContact from './components/ForAgentsContact';
import ForAgentsPackages from './components/ForAgentsPackages';
import ForAgentsAdvantage from './components/ForAgentsAdvantage';
import ForAgentsCalculation from './components/ForAgentsCalculation';

const ForAgents = () => {
  const [feedBackOpen, setFeedBackOpen] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Ingatlanosoknak - SaWin Energy</title>
      </Helmet>
      <Popup open={feedBackOpen} setOpen={setFeedBackOpen} />
      <ForAgentsHero />
      <ForAgentsUs />
      <ForAgentsAdvantage />
      <ForAgentsPackages />
      <ForAgentsCalculation />
      <ForAgentsContact setFeedBackOpen={setFeedBackOpen} />
      <Footer />
    </>
  );
};

export default ForAgents;
