import { Badge, Box, Flex, Float, Grid, GridItem, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import thermometer from '../../../assets/thermometer.svg';
import tool from '../../../assets/tool.svg';

const HeatPumpSolutions = () => {
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={['100%', '76rem']}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary' mt={20}>
          Hőszivattyús rendszerek
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' mb={20}>
          A te projectedhez is van megoldásunk
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            lg: '1fr 1fr',
          }}
          minHeight='630px'
          mb={20}
          gap={8}>
          <GridItem mb={{ base: 16, lg: 0 }}>
            <Box rounded='2xl' bgColor='white' height='100%' position='relative' maxW='600px' mx='auto'>
              <Float placement='top-center'>
                <IconButton width='80px' height='80px' rounded='full' bgColor='accent' cursor='default'>
                  <Image src={thermometer} />
                </IconButton>
              </Float>
              <Box
                height='220px'
                bgImage={`url(https://placehold.co/600x220.png)`}
                bgSize='cover'
                bgPos='center'
                roundedTop='2xl'
              />
              <Box height='260px' p={6}>
                <Heading as='h4' size='3xl' fontWeight='600' mb={8}>
                  Kényelem, kompromisszumok nélkül
                </Heading>
                <Text fontSize='lg'>
                  Új építésű ingatlanodnál a hőszivattyús gépészet összes előnyét ki tudod használni. Egy szakmailag
                  méretezett berendezés, hő-leadó rendszer és okos vezérlés láthatatlanul dolgoznak otthonod
                  komfortjáért, az év minden napján.
                </Text>
              </Box>
              <Box p={6} pt={0}>
                <Text fontSize='xl' fontWeight='600' mb={2}>
                  Kedvenc megoldásunk
                </Text>
                <Badge fontSize='sm' fontWeight='500' padding={2} bgColor='dark' color='light' mr={2} mb={2}>
                  Monoblokk hőszivattyú
                </Badge>
                <Badge fontSize='sm' fontWeight='500' padding={2} bgColor='dark' color='light' mr={2} mb={2}>
                  Okos vezérlés
                </Badge>
                <Badge fontSize='sm' fontWeight='500' padding={2} bgColor='dark' color='light'>
                  Raygex mennyezeti hűtés/fűtés
                </Badge>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box rounded='2xl' bgColor='white' height='100%' position='relative' maxW='600px' mx='auto'>
              <Float placement='top-center'>
                <IconButton width='80px' height='80px' rounded='full' bgColor='accent' cursor='default'>
                  <Image src={tool} />
                </IconButton>
              </Float>
              <Box
                height='220px'
                bgImage={`url(https://placehold.co/600x220.png)`}
                bgSize='cover'
                bgPos='center'
                roundedTop='2xl'
              />
              <Box height='260px' p={6}>
                <Heading as='h4' size='3xl' fontWeight='600' mb={8}>
                  Hozd ki a maximumot a felújításból
                </Heading>
                <Text fontSize='lg'>
                  Növeld ingatlanod értékét és spórolj a rezsiszámláidon. Egy pontosan tervezett és minőséggel
                  kivitelezett hőszivattyús gépészet segítségével fenntartható, költséghatékony és modern otthont
                  teremthetsz.
                </Text>
              </Box>
              <Box p={6} pt={0}>
                <Text fontSize='xl' fontWeight='600' mb={2}>
                  Kedvenc megoldásunk
                </Text>
                <Badge fontSize='sm' fontWeight='500' padding={2} bgColor='dark' color='light' mr={2} mb={2}>
                  Monoblokk hőszivattyú
                </Badge>
                <Badge fontSize='sm' fontWeight='500' padding={2} bgColor='dark' color='light'>
                  Fan-coil rendszer
                </Badge>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default HeatPumpSolutions;
