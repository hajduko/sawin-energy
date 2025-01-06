import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from '../../../components/ui/timeline';

const HeatPumpTimeline = () => {
  return (
    <Flex bg='dark' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={20} mb={20}>
        <Heading as='h2' size='md' fontWeight='600' color='primary'>
          Teljeskörű szolgáltatás
        </Heading>
        <Heading as='h3' size='5xl' fontWeight='600' mb={6} color='white'>
          Átlátható folyamat a tanácsadástól a garanciáig!
        </Heading>

        <TimelineRoot size='xl'>
          <TimelineItem>
            <TimelineConnector
              fontSize='2xl'
              fontWeight='600'
              color='dark'
              bg='accent'
              rounded='full'
              aspectRatio={1}
              width='80px'
              height='80px'
              textAlign='center'
              display='flex'
              alignItems='center'
              justifyContent='center'
              mr={8}
              outline={0}>
              01
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontSize='xl' fontWeight='600' color='accent' mb={2}>
                Ingyenes tanácsadás
              </TimelineTitle>
              <Text textStyle='md' color='white' pb={2}>
                Ingyenes tanácsadásunk az információ átadásról szól! Az 1 órás tanácsadás során minden előzetes
                kérdésedre választ kaphatsz a szolgáltatásunkkal és rendszereinkkel kapcsolatban. Mi pedig energetikai
                szempontok alapján felteszünk pár kérdést, hogy megismerjük az igényeidet és ingatlanod, így
                meghatározhatjuk, hogy számodra milyen hőszivattyús beruházás lesz a legmegfelelőbb.
              </Text>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector
              fontSize='2xl'
              fontWeight='600'
              color='dark'
              bg='accent'
              rounded='full'
              aspectRatio={1}
              width='80px'
              height='80px'
              textAlign='center'
              display='flex'
              alignItems='center'
              justifyContent='center'
              mr={8}
              outline={0}>
              02
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontSize='xl' fontWeight='600' color='accent' mb={2}>
                Ingatlan felmérés és tervezés
              </TimelineTitle>
              <Text textStyle='md' color='white' pb={2}>
                Felmérjük az ingatlanod és EZ szoftverünk segítségével megtervezzük a hőszivattyús gépészeti
                rendszeredet. Pontos méretezésünk alapja egy összetett hőveszteség számítás, melyet energetikus
                szakembereink végeznek. A felmérés után pontosítjuk az előzetes rezsi és megtérülés számításainkat, így
                pontosan tudhatod mire számíthatsz miután a rendszer működésbe állt.
              </Text>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector
              fontSize='2xl'
              fontWeight='600'
              color='dark'
              bg='accent'
              rounded='full'
              aspectRatio={1}
              width='80px'
              height='80px'
              textAlign='center'
              display='flex'
              alignItems='center'
              justifyContent='center'
              mr={8}
              outline={0}>
              03
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontSize='xl' fontWeight='600' color='accent' mb={2}>
                Rendszer kivitelezés
              </TimelineTitle>
              <Text textStyle='md' color='white' pb={2}>
                A rendszer kivitelezése 1-2 napot vesz igénybe. Előszerelt gépészeti egységekkel érkezünk, így a
                hőszivattyú beszerelése és a teljes rendszer kialakítása egy nap alatt elkészülhet. Ezután próbaüzemben
                teszteljük a rendszert. Két héten belül újra ellenőrizzük a rendszer működését és ha szükséges az
                észrevételeid alapján személyre szabjuk.
              </Text>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector
              fontSize='2xl'
              fontWeight='600'
              color='dark'
              bg='accent'
              rounded='full'
              aspectRatio={1}
              width='80px'
              height='80px'
              textAlign='center'
              display='flex'
              alignItems='center'
              justifyContent='center'
              mr={8}
              outline={0}>
              04
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontSize='xl' fontWeight='600' color='accent' mb={2}>
                Garanciális felügyelet és szervíz
              </TimelineTitle>
              <Text textStyle='md' color='white'>
                Az általunk beépítésre kerülő termékeknek forgalmazói és garanciális szervize is vagyunk. A beszerelés
                és a garancia idő lejárta után sem hagyunk magadra. Az élettartamuk végéig folyamatos, gyors reagálású
                szerviz hátteret biztosítunk minden rendszerünkhöz.
              </Text>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
      </Box>
    </Flex>
  );
};

export default HeatPumpTimeline;
