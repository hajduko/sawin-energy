import { Box, Button, Flex, Heading, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';

import bg from '../../../assets/images/heatpump/heatpump_hero_bg.svg';
import card_0 from '../../../assets/images/heatpump/card_0.png';
import card_1 from '../../../assets/images/heatpump/card_1.png';
import card_2 from '../../../assets/images/heatpump/card_2.jpg';
import rect from '../../../assets/images/heatpump/rect_green.svg';

import { FaArrowRight } from 'react-icons/fa';

interface Props {
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => void;
}

const HeatPumpHero = ({ dialogOpen, setDialogOpen }: Props) => {
  const cards = [
    { text: 'Hőszivattyús rendszerek', imageSrc: card_0 },
    { text: 'Gépészeti csomagok', imageSrc: card_1 },
    { text: 'Hőszivattyús hőleadók', imageSrc: card_2 },
  ];

  return (
    <>
      <Image position='absolute' right='0px' top='0px' src={bg} maxH='1000px' maxW='100%' zIndex='-1' />
      <Box bg='#ebedf0' position='absolute' w='100%' h='800px' zIndex='-2' />
      <Box pt={{ base: 0, lg: 16 }}>
        <NavBar />
      </Box>
      <Box w={{ base: '95%', lg: '76rem' }} mx='auto' mt={16} mb={20}>
        <Grid
          templateColumns={{
            base: '1fr',
            lg: '560px 1fr',
          }}
          minHeight='440px'
          gap={24}>
          <GridItem colSpan={1} h='100%'>
            <Flex direction='column' h='100%' align={{ base: 'center', lg: 'flex-start' }} justify='space-between'>
              <Heading
                as='h1'
                size={{ base: '5xl', md: '6xl' }}
                fontWeight='700'
                color='dark'
                lineHeight='shorter'
                textAlign={{ base: 'center', lg: 'left' }}>
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
                pr={{ base: 4, sm: 2 }}
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
                  display={{ base: 'none', sm: 'flex' }}
                  alignItems='center'
                  justifyContent='center'>
                  <FaArrowRight color='black' />
                </Box>
              </Button>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} overflow='hidden' display={{ base: 'none', lg: 'inline-block' }}>
            <Flex flexDirection='row' gap={4} height='100%'>
              {cards.map((card) => (
                <Box
                  key={card.text}
                  flex={2}
                  _hover={{ flex: '5' }}
                  bgColor='primary'
                  transition='flex 0.5s ease-in-out'
                  rounded='2xl'
                  overflow='hidden'
                  bg='white'
                  position='relative'
                  className='group'
                  p={6}>
                  <Heading as='h3' size='4xl' fontWeight='500' fontStyle='italic' textWrap='wrap'>
                    {card.text}
                  </Heading>
                  <Image
                    src={rect}
                    position='absolute'
                    right={0}
                    bottom='100%'
                    _groupHover={{ bottom: '59%' }}
                    transition='bottom 0.5s ease-in-out'
                  />
                  <Image
                    src={card.imageSrc}
                    position='absolute'
                    bottom={0}
                    left={0}
                    fit='cover'
                    h='100%'
                    w='100%'
                    _groupHover={{ h: '60%' }}
                    transition='height 0.5s ease-in-out'
                  />
                </Box>
              ))}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default HeatPumpHero;
