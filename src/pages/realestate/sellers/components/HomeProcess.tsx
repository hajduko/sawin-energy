import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from '../../../../components/ui/timeline';
import { FaArrowRight } from 'react-icons/fa';

const HomeProcess = () => {
  return (
    <>
      <Flex bg='#ebedf0' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }}>
          <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
            Folyamat
          </Heading>
          <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600' mb={6}>
            Minden ingatlan érték, hozd ki belőle, amit csak lehet!
          </Heading>
          <Text
            fontSize='xl'
            fontWeight='500'
            textAlign={{ base: 'center', md: 'center' }}
            maxWidth='922px'
            mx='auto'
            mb={{ base: 6, lg: 20 }}>
            Egyedülálló programunkkal, szakértő csapatunkkal és innovatív megoldásainkkal garantáljuk, hogy a
            befektetésed a lehető legjobb megtérülést hozza. Ráadásul segítünk eligazodni az állami támogatások és
            hitellehetőségek világában is.
          </Text>
        </Box>
      </Flex>
      <Flex bg='dark' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }} mt={20} mb={20}>
          <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} fontWeight='600' mb={6} color='white'>
            Mire számíthatsz, ha minket bízol meg?
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
                  Felmérjük az értékesítendő ingatlanodat és felújítási javaslatot készítünk
                </TimelineTitle>
                <Text textStyle='md' color='white' pb={2}>
                  Az ingatlanod felmérése a gyakorlatban értékesítési és energetikai tanácsadást jelent. Szakértőink
                  segítségével megismerheted az ingatlanod jelenlegi értékét és azt, hogy nagyjából milyen
                  befektetésekkel mekkora értéket tudsz teremteni.
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
                  Kiválasztod, hogy melyik csomagunkat szeretnéd megrendelni + finanszírozási javaslatot készítünk
                  számodra
                </TimelineTitle>
                <Text textStyle='md' color='white' pb={2}>
                  A szakértőnk ismerteti veled a pontos konstrukcióinkat és a három csomagajánlatunkból kiválaszthatod,
                  hogy melyiket szeretnéd igénybe venni. Illetve megismerheted az elérhető finanszírozási megoldásokat,
                  hogy teljes képet kapj a lehetőségeidről.
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
                  Elvégezzük a tervezést és szükség esetén a kivitelezési munkákat
                </TimelineTitle>
                <Text textStyle='md' color='white' pb={2}>
                  Elvégezzük az általad választott csomagban megjelölt tervezési és esetenként kivitelezési munkákat.
                  Ennek a szolgáltatásunknak a részeként teljes körű pályázati és hitelügyintézést is vállalunk, hogy
                  tényleg minden problémát levegyünk a válladról.
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
                  Prémium áron, gyorsan értékesítjük az ingatlanodat
                </TimelineTitle>
                <Text textStyle='md' color='white'>
                  A választott szolgáltatási csomagtól függően - a tervek elkészítését követően azonnal vagy - az
                  elkészült energiahatékonysági beruházásokkal értékesítjük az ingatlanodat, hogy mielőbb realizálni
                  tudd az ingatlan modernizálásából származó ár prémiumot.
                </Text>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
          <Button
            size='2xl'
            mt={4}
            bg={'accent'}
            w={'fit-content'}
            rounded={'8px'}
            pl={4}
            pr={{ base: 4, sm: 2 }}
            color={'dark'}
            fontSize='lg'
            fontWeight='600'
            onClick={() => {
              const element = document.getElementById('homeContact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Eladom az ingatlanom!
            <Box
              bg={'light'}
              h={'47px'}
              w={'47px'}
              rounded='5px'
              ml={4}
              display={{ base: 'none', sm: 'flex' }}
              alignItems='center'
              justifyContent='center'>
              <FaArrowRight color='dark' />
            </Box>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default HomeProcess;
