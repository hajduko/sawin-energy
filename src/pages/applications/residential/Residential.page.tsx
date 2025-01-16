import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Popup from '../../../components/popup/Popup';
import ResidentialHero from './components/ResidentialHero';
import ResidentialAvailable from './components/ResidentialAvailable';
import ResidentialCTA from './components/ResidentialCTA';
import ResidentialDiscounts from './components/ResidentialDiscounts';
import ResidentialProcess from './components/ResidentialProcess';
import ResidentialFAQ from './components/ResidentialFAQ';
import Footer from '../../../components/footer/Footer';

const Residential = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Lakossági pályázatok - Sawin Energy</title>
      </Helmet>
      <Popup open={dialogOpen} setOpen={setDialogOpen} />
      <ResidentialHero />
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
