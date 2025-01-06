import { useState } from 'react';
import Popup from '../../components/popup/Popup';
import HeatPumpHero from './components/HeatPumpHero';
import HeatPumpResults from './components/HeatPumpResults';
import HeatPumpSolutions from './components/HeatPumpSolutions';
import HeatPumpCTA1 from './components/HeatPumpCTA1';
import HeatPumpTeam from './components/HeatPumpTeam';
import HeatPumpTimeline from './components/HeatPumpTimeline';
import HeatPumpProducts from './components/HeatPumpProducts';
import HeatPumpCTA2 from './components/HeatPumpCTA2';
import HeatPumpFAQ from './components/HeatPumpFAQ';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';

const HeatPump = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  console.log(dialogOpen);

  return (
    <>
      <Helmet>
        <title>Hőszivattyú - Sawin Energy</title>
      </Helmet>
      <Popup open={dialogOpen} setOpen={setDialogOpen} />
      <HeatPumpHero dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <HeatPumpResults />
      <HeatPumpSolutions />
      <HeatPumpCTA1 dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <HeatPumpTeam />
      <HeatPumpTimeline />
      <HeatPumpProducts />
      <HeatPumpCTA2 dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <HeatPumpFAQ />
      <Footer />
    </>
  );
};

export default HeatPump;
