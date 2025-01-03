import HeatPumpHero from './components/HeatPumpHero';
import Footer from '../../components/footer/Footer';
import HeatPumpResults from './components/HeatPumpResults';
import HeatPumpSolutions from './components/HeatPumpSolutions';
import HeatPumpCTA1 from './components/HeatPumpCTA1';
import { Badge, Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const HeatPump = () => {
  return (
    <>
      <HeatPumpHero />
      <HeatPumpResults />
      <HeatPumpSolutions />
      <HeatPumpCTA1 />
      <Footer />
    </>
  );
};

export default HeatPump;
