import { Accordion, Box, Flex, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import process_img from '../../../../assets/images/residential/process2.jpg';
import down_accent_arrow from '../../../../assets/icons/down_accent_arrow.svg';

const ResidentialProcess = () => {
  const process = [
    {
      id: '0',
      title: 'Ingyenes tanácsadáson vehetsz részt',
      text: 'Jelentkezz pályázati tanácsadásunkra és akár jelentkezésed másnapján ingyenes előzetes tanácsadáson vehetsz részt, hogy megismerjük az igényeidet és te is megismerhesd a lehetőségeidet. A tanácsadás folyamán minden pályázattal kapcsolatos kérdésedre választ kapsz, valamint megvizsgáljuk, hogy melyik pályázatra vagy jogosult és anyagilag hogyan jársz a legjobban a kívánt beruházás megvalósításakor.',
    },
    {
      id: '1',
      title: 'Meghatározzuk a számodra tökéletes beruházást',
      text: 'Egy helyszíni ingatlan felmérést végzünk, ami alapján pontos számításokat készítünk a számodra tökéletes beruházásokról és meghatározzuk ezek bekerülését, megtérülését, pontos méretezését, valamint előzetesen elvégezzük a hozzájuk tartozó energetikai és pályázati számításokat is.',
    },
    {
      id: '2',
      title: 'Részletes ajánlatot készítünk a pályázathoz és szerződünk',
      text: 'Ajánlatunk a kivitelezés és termékek költségén túl tartalmazza többek között a pályázati támogatás pontos részleteit, a havi hitel törlesztést, az új havi rezsi összegét és az ingatlan várható értéknövekményét. Ezen felül pontos energetikai dokumentációt is tartalmaz, vagyis az ingatlan jelenlegi energetikai besorolását, az energetikai javulási százalékot és az új energetikai besorolást. Amennyiben elfogadod az ajánlatot leszerződjük a kivitelezést.',
    },
    {
      id: '3',
      title: 'Beadjuk a pályázati dokumentumokat és elkészítjük a kiviteli terveket',
      text: 'A szerződés megkötése után elkészítjük a pontos kiviteli terveket, valamint veled közösen szakértőink elkészítik a pályázatok beadásához szükséges összes dokumentációt. Majd a pályázat beadásra kerül.',
    },
    {
      id: '4',
      title: 'Megtörténik a kivitelezés, és már élvezheted is egy modernebb otthon kényelmét',
      text: 'A pályázat elbírálása után kollégáink elvégzik a kivitelezést. Minden rendszerünk garanciális és garancia időn túli szervizét is cégünk vállalja, mivel minden általunk forgalmazott termék gyári szervize is vagyunk.',
    },
  ];

  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} pt={20} pb={10}>
        <Grid
          templateColumns={{
            base: '1fr',
            lg: '4fr 6fr',
          }}
          gap={8}>
          <GridItem colSpan={1}>
            <Heading as='h2' size='md' fontWeight='600' color='primary'>
              Folyamat
            </Heading>
            <Heading as='h3' size='5xl' fontWeight='600'>
              Nem hiszünk a félmegoldásokban!
            </Heading>
            <Text fontSize='xl' mt={5} mb={{ base: 8, lg: 20 }}>
              Szolgáltatásunk teljeskörű, az ingyenes tanácsadástól a kivitelezés befejezéséig tart.
            </Text>

            <Image
              src={process_img}
              w='100%'
              maxH={{ base: '500px', lg: 'auto' }}
              aspectRatio='1/1'
              fit={{ base: 'cover', lg: 'cover' }}
              rounded='2xl'
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize='2xl' fontWeight='500' color='primary' mt={5} mb={10}>
              Mire számíthatsz, ha felveszed velünk a kapcsolatot?
            </Text>
            <Accordion.Root collapsible multiple size='lg' variant='plain'>
              {process.map((item) => (
                <Accordion.Item
                  key={item.id}
                  value={item.id}
                  px={8}
                  py={4}
                  my={8}
                  bgColor='white'
                  rounded='xl'
                  borderLeftColor='accent'
                  borderLeftWidth={6}
                  _last={{ mb: 0 }}>
                  <Accordion.ItemTrigger display='flex' justifyContent='space-between' alignItems='center'>
                    <Text fontSize='xl' fontWeight='600' color='primary' textAlign='left'>
                      {item.title}
                    </Text>
                    <Accordion.ItemIndicator>
                      <Image src={down_accent_arrow} maxW='fit-content' />
                    </Accordion.ItemIndicator>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody fontSize='sm' color='dark'>
                      {item.text}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ResidentialProcess;
