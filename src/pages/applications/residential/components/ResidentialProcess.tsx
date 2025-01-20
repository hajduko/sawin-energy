import { Accordion, Box, Flex, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import process_img from '../../../../assets/images/residential/process.png';
import down_accent_arrow from '../../../../assets/icons/down_accent_arrow.svg';

const ResidentialProcess = () => {
  const process = [
    {
      id: '0',
      title: '24 órán belül jelentkezünk!',
      text: 'Személyes tanácsadód a jelentkezést követően azonnal felveszi veled a kapcsolatot.',
    },
    {
      id: '1',
      title: 'Ingyenes tanácsadásban vehetsz részt!',
      text: 'Akár másnap ingyenes előzetes tanácsadáson vehetsz részt, hogy megismerjük az igényeidet és te is megismerhesd a lehetőségeidet. A tanácsadás folyamán minden kérdésedre választ kapsz.',
    },
    {
      id: '2',
      title: 'Meghatározzuk a tökéletes beruházást!',
      text: 'Egy ingatlan felmérést végzünk, ami után 3 munkanapon belül pontos számításokat készítünk a számodra tökéletes beruházásokra és meghatározzuk ezek bekerülését, megtérülését, pontos méretezését, valamint előzetesen elvégezzük a hozzájuk tartozó energetikai számításokat is.',
    },
    {
      id: '3',
      title: 'Elmondjuk mennyit spórolhatsz!',
      text: 'Tervezőink ismertetik a felmérés alapján elkészített különféle kalkulációk eredményét és közösen kiválasztjuk a megvalósításra kerülő beruházást.',
    },
    {
      id: '4',
      title: 'Részletes ajánlatot készítünk!',
      text: '3 napon belül megküldött ajánlatunk tartalmazza többek között az eredeti energetikai besorolást az energetikai javulási százalékot, az új energetikai besorolást, a beruházás árát, a havi törlesztés és az új havi rezsi összegét és az ingatlan várható értéknövekményét.',
    },
    {
      id: '5',
      title: 'Ellenőrizzük a beruházásodat és szerződünk!',
      text: 'Szerződéskötés előtt újra ellenőrizzük ingatlanod technikai állapotát, és a felmérés pontosságát. Amennyiben minden rendben, leszerződünk a kivitelezési munkákra.',
    },
    {
      id: '6',
      title: 'Elkészítjük a kiviteli terveket és technikai dokumentációkat!',
      text: 'Tervezőink elkészítik a beruházásod pontos kiviteli terveit és a pályázathoz szükséges dokumentumokat (pl. energetikai tanusítványok).',
    },
    {
      id: '7',
      title: 'Megvalósítjuk a beruházást!',
      text: 'Szerződést követő 30 napon belül leszállítjuk az összes terméket a kivitelezéshez és a szerződés szerint ütemezve hozzáfogunk otthonod energetikai fejlesztéséhez.',
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
            <Text fontSize='xl' mt={5} mb={20}>
              Szolgáltatásunk teljeskörű, az ingyenes tanácsadástól a kivitelezés befejezéséig tart.
            </Text>

            <Image src={process_img} w='100%' />
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
