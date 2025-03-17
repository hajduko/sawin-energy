import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Popup from '../../../components/popup/Popup';
import ResidentialHero from './components/ResidentialHero';
import ResidentialAvailable from './components/ResidentialAvailable';
import ResidentialCTA from './components/ResidentialCTA';
import ResidentialDiscounts from './components/ResidentialDiscounts';
import ResidentialProcess from './components/ResidentialProcess';
import ResidentialFAQ from './components/ResidentialFAQ';
import Footer from '../../../components/footer/Footer';
import FeedBackPopUp from '../../../components/feedbackpopup/FeedBackPopUp';

const Residential = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [feedBackOpen, setFeedBackOpen] = useState<boolean>(false);

  const id = location.hash.substring(1);
  console.log(id);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Lakossági pályázatok - Sawin Energy</title>
      </Helmet>
      <Popup open={dialogOpen} setOpen={setDialogOpen} setFeedBackOpen={setFeedBackOpen} />
      <FeedBackPopUp open={feedBackOpen} setOpen={setFeedBackOpen} />
      <ResidentialHero dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <ResidentialAvailable />
      <ResidentialCTA dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <ResidentialDiscounts />
      <ResidentialProcess />
      <ResidentialFAQ />
      <Footer />
    </>
  );
};

export default Residential;
