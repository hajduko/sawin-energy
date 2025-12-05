import HomeHero from './components/HomeHero';
import { Helmet } from 'react-helmet-async';
import HomeMission from './components/HomeMission';
import Footer from '../../../components/footer/Footer';
import HomeProcess from './components/HomeProcess';
import HomePackages from './components/HomePackages';
import HomeAdvantages from './components/HomeAdvantages';
import HomeContact from './components/HomeContact';
import Popup from '../../../components/realestatefeedbackpopup/RealEstateFeedBackPopUp';
import { useState } from 'react';

const Home = () => {
  const [feedBackOpen, setFeedBackOpen] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Eladóknak - SaWin Energy</title>
      </Helmet>
      <Popup open={feedBackOpen} setOpen={setFeedBackOpen} />
      <HomeHero />
      <HomeMission />
      <HomeProcess />
      <HomePackages />
      <HomeAdvantages />
      <HomeContact setFeedBackOpen={setFeedBackOpen} />
      <Footer />
    </>
  );
};

export default Home;
