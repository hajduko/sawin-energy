import HeatPumpHero from './components/HeatPumpHero';
import Footer from '../../components/footer/Footer';
import HeatPumpResults from './components/HeatPumpResults';
import HeatPumpSolutions from './components/HeatPumpSolutions';
import HeatPumpCTA1 from './components/HeatPumpCTA1';
import { Badge, Box, Button, Flex, Grid, GridItem, Heading, Image, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Popup from '../../components/popup/Popup';
import HeatPumpTeam from './components/HeatPumpTeam';

const HeatPump = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  console.log(dialogOpen);

  return (
    <>
      <Popup open={dialogOpen} setOpen={setDialogOpen} />
      <HeatPumpHero dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <HeatPumpResults />
      <HeatPumpSolutions />
      <HeatPumpCTA1 dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <HeatPumpTeam />

      <Footer />
    </>
  );
};

export default HeatPump;
