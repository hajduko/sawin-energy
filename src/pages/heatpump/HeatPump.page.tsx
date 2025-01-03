import HeatPumpHero from './components/HeatPumpHero';
import Footer from '../../components/footer/Footer';
import HeatPumpResults from './components/HeatPumpResults';
import HeatPumpSolutions from './components/HeatPumpSolutions';
import HeatPumpCTA1 from './components/HeatPumpCTA1';
import { Badge, Box, Button, Flex, Grid, GridItem, Heading, Image, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Popup from '../../components/popup/Popup';

const HeatPump = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  console.log(dialogOpen);

  return (
    <>
      <HeatPumpHero dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <HeatPumpResults />
      <HeatPumpSolutions />
      <HeatPumpCTA1 dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <Popup open={dialogOpen} setOpen={setDialogOpen} />

      <Footer />
    </>
  );
};

export default HeatPump;
