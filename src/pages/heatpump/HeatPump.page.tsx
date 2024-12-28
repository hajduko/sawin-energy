import HeatPumpHero from './components/HeatPumpHero';
import Footer from '../../components/footer/Footer';
import HeatPumpResults from './components/HeatPumpResults';
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const HeatPump = () => {
  return (
    <>
      <HeatPumpHero />
      <HeatPumpResults />
      <Flex bg='#ebedf0' justify='center'>
        <Box w={['100%', '76rem']}>
          <Heading as='h2' size='xl' textAlign='center' fontWeight='bold' color='primary' mt={24} mb={4}>
            Hőszivíttyús rendszerek
          </Heading>
          <Heading as='h3' size='4xl' textAlign='center' fontWeight='bold' mb={24}>
            A te projectedhez is van megoldásunk
          </Heading>
          <Grid
            templateColumns={{
              base: '1fr',
              lg: '1fr 1fr',
            }}
            height='630px'
            mb={12}
            gap={10}>
            <GridItem>
              <Box
                rounded='2xl'
                bgColor='white'
                height='100%'
                overflow='hidden'
                padding={6}
                pt='240px'
                position='relative'>
                <Image src='https://placehold.co/600x220.png' position='absolute' left={0} top={0} />
                <Heading as='h4' size='lg' mb={12}>
                  Kényelem, kompromisszumok nélkül
                </Heading>
                <Text fontSize='xl' mb={12}>
                  Új építésű ingatlanodnál a hőszivattyús gépészet összes előnyét ki tudod használni. Egy szakmailag
                  méretezett berendezés, hő-leadó rendszer és okos vezérlés láthatatlanul dolgoznak otthonod
                  komfortjáért, az év minden napján.
                </Text>
                <Text fontSize='xl' fontWeight='bold'>
                  Kedvenc megoldásunk
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default HeatPump;
