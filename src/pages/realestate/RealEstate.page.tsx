import RealEstateHero from './components/RealEstateHero';
import { Helmet } from 'react-helmet-async';
import RealEstateMission from './components/RealEstateMission';
import Footer from '../../components/footer/Footer';
import RealEstateProcess from './components/RealEstateProcess';
import RealEstatePackages from './components/RealEstatePackages';
import RealEstateAdvantages from './components/RealEstateAdvantages';
import RealEstateContact from './components/RealEstateContact';
import Popup from '../../components/realestatefeedbackpopup/RealEstateFeedBackPopUp';
import { useState } from 'react';

const RealEstate = () => {
  const [feedBackOpen, setFeedBackOpen] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Ingatlan - Sawin Energy</title>
      </Helmet>
      <Popup open={feedBackOpen} setOpen={setFeedBackOpen} />
      <RealEstateHero />
      <RealEstateMission />
      <RealEstateProcess />
      <RealEstatePackages />
      <RealEstateAdvantages />
      <RealEstateContact setFeedBackOpen={setFeedBackOpen} />
      <Footer />
    </>
  );
};

export default RealEstate;
