import { Box, Button, Flex, Heading, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/images/heatpump/heatpump_hero_bg.svg';

import { FaArrowRight } from 'react-icons/fa';
import HeroCards from './HeroCards';

interface Props {
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => void;
}

const HeatPumpHero = ({ dialogOpen, setDialogOpen }: Props) => {
  return (
    <>
      <Image position='absolute' right='0px' top='0px' src={bg} maxH='1000px' maxW='100%' zIndex='-1' />
      <Box bg='#ebedf0' position='absolute' w='100%' h='800px' zIndex='-2' />
      <Box pt={{ base: 0, lg: 16 }}>
        <NavBar />
      </Box>
      <Box w={{ base: '95%', lg: 'calc(50% + 38rem)' }} mr='0' ml='auto' mt={16} mb={20}>
        <Grid
          templateColumns={{
            base: '1fr',
            lg: '560px 1fr',
          }}
          maxW='1360px'
          gap={16}>
          <GridItem colSpan={1}>
            <Flex direction='column' align={{ base: 'center', lg: 'flex-start' }}>
              <Heading as='h1' size='6xl' fontWeight='700' color='dark' lineHeight='shorter'>
                Hőszivattyús rendszerek
                <br />- az otthonodra szabva!
              </Heading>
              <Text fontSize='lg' color='dark' mt={10} textAlign={{ base: 'center', lg: 'left' }} lineHeight='tall'>
                Hőszivattyús gépészeti rendszerek szerelése teljeskörű szolgáltatással a tervezéstől a kivitelezésig.{' '}
                <br />
                <span style={{ color: 'primary', fontWeight: '700' }}>Vegyél részt ingyenes tanácsadásunkon,</span> és
                tedd meg az első lépést egy korszerű, energiatakarékos otthon felé!
              </Text>

              <Button
                size='2xl'
                mt={10}
                bg={'primary'}
                w={'fit-content'}
                rounded={'8px'}
                pl={4}
                pr={2}
                fontSize='lg'
                fontWeight='600'
                onClick={() => setDialogOpen(!dialogOpen)}>
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
          <GridItem colSpan={1} pr={4} overflow='hidden' display={{ base: 'none', lg: 'inline-block' }}>
            <HeroCards />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default HeatPumpHero;
