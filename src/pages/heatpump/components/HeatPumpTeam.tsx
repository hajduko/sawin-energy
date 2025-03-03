import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import team from '../../../assets/images/heatpump/team2.jpg';

const HeatPumpTeam = () => {
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Csapatunk
        </Heading>
        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600' mb={6}>
          Egy jó berendezés csak félsiker!
        </Heading>

        <Text
          fontSize='xl'
          fontWeight='500'
          textAlign={{ base: 'left', md: 'justify' }}
          maxWidth='922px'
          mx='auto'
          mb={{ base: 6, lg: 20 }}>
          Csapatunk hőszivattyús gépészeti rendszerek tervezésével és kivitelezésével foglalkozik. Mi nem kötünk
          kompromisszumot az előkészítő folyamatok során. Gépész tervezőink saját fejlesztésű szoftverünk segítségével a
          hőszivattyús rendszert a jelen szokásaidra és jövőbeli terveidre méretezik. Ezért tudjuk garantálni, hogy az
          általunk telepített rendszer megbízhatóan ki tudja szolgálni családod igényeit és teljes komfortot biztosít
          otthonodban.
        </Text>

        <Image src={team} rounded='2xl' maxH='600px' w='100%' fit='cover' />
      </Box>
    </Flex>
  );
};

export default HeatPumpTeam;
