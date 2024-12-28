import { Box, Button, Flex, Heading, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/heatpump_hero_bg.svg';

import { FaArrowRight } from 'react-icons/fa';
import HeroCards from './HeroCards';

const HeatPumpHero = () => {
  return (
    <>
      <Image position='absolute' right='0px' top='0px' src={bg} maxH='1000px' maxW='100%' zIndex='-1' />
      <Box bg='#ebedf0' position='absolute' w='100%' h='800px' zIndex='-2' />
      <Box pt={16}>
        <NavBar />
      </Box>
      <Box w={{ base: '100%', lg: 'calc(50% + 31rem)' }} mr='0' ml='auto' mt={16} mb={20}>
        <Grid
          templateColumns={{
            base: '1fr',
            lg: '570px 1fr',
          }}
          maxW='1270px'
          gap={4}>
          <GridItem colSpan={1}>
            <Flex direction='column' align={{ base: 'center', lg: 'flex-start' }}>
              <Heading as='h1' size='5xl' fontWeight='bold' color='dark'>
                Hőszivattyús rendszerek
                <br />- az otthonodra szabva!
              </Heading>
              <Text fontSize='xl' color='dark' mt={12}>
                Hőszivattyús gépészeti rendszerek szerelése teljeskörű szolgáltatással a tervezéstől a kivitelezésig.
              </Text>
              <Text fontSize='xl' color='dark'>
                <span style={{ color: 'primary', fontWeight: 'bold' }}>Vegyél részt ingyenes tanácsadásunkon,</span> és
                tedd meg az első lépést egy korszerű, energiatakarékos otthon felé!
              </Text>
              <Button size='2xl' mt={12} bg={'primary'} w={'fit-content'} rounded={'8px'} pl={4} pr={2} fontSize='xl'>
                Jelentkezem a tanácsadásra!
                <Box
                  bg={'light'}
                  h={'47px'}
                  w={'47px'}
                  rounded='5px'
                  ml={4}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'>
                  <FaArrowRight color='black' />
                </Box>
              </Button>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} pr={4} overflow='hidden'>
            <HeroCards />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default HeatPumpHero;
