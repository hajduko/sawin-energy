import { Box, Flex, Grid, GridItem, Heading, Table, Text } from '@chakra-ui/react';
import sol_1 from '../../../../assets/images/residential/sol_1.png';
import sol_2 from '../../../../assets/images/residential/sol_2.jpg';

const ResidentialAvailable = () => {
  const items_1 = [
    { id: 1, name: 'Projektösszeg:', data: '7 millió Ft' },
    { id: 2, name: 'Vissza nem térítendő:', data: '3 millió Ft' },
    { id: 3, name: 'Támogatott hitel:', data: '3 millió Ft' },
    { id: 4, name: 'Hitel kamat:', data: '0%' },
    { id: 5, name: 'Futamidő:', data: 'max. 12 év' },
    { id: 6, name: 'Önerő:', data: '1 millió Ft' },
  ];

  const items_2 = [
    { id: 1, name: 'Projektösszeg:', data: '6 millió Ft' },
    { id: 2, name: 'Vissza nem térítendő:', data: '3 millió Ft' },
    { id: 3, name: 'Támogatott hitel:', data: '6 millió Ft' },
    { id: 4, name: 'Hitel kamat:', data: 'becsült 4-5%' },
    { id: 5, name: 'Futamidő:', data: 'max. 10 év' },
    { id: 6, name: 'Önerő:', data: 'előfinanszírozás szükséges' },
  ];

  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary' mt={20}>
          Elérhető pályázatok
        </Heading>
        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600'>
          Energetikai modernizáció az otthonfelújítási támogatások segítségével
        </Heading>
        <Text fontSize='xl' textAlign='center' fontWeight='500' maxW='46rem' width='100%' mx='auto' mt={5} mb={10}>
          Jelenleg két pályázati lehetőség is elérhető, melyeket akár együtt is igénybe tudsz venni otthonod energetikai
          felújítására. Teljeskörű szolgáltatásunk részeként segítünk megtalálni a számodra megfeleő pályázati
          lehetőséget, valamint a pályázati ügyintézést is vállaljuk.
        </Text>
        <Grid
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr',
          }}
          minHeight='630px'
          mb={20}
          gap={8}
          className='heat-grid'>
          <GridItem mb={{ base: 16, md: 0 }} className='heat-grid-item' transition={'opacity 0.3s ease-in-out'}>
            <Box rounded='2xl' bgColor='white' height='100%' position='relative' maxW='600px' mx='auto'>
              <Box height='220px' bgImage={`url(${sol_1})`} bgSize='cover' bgPos='center' roundedTop='2xl' />
              <Box minHeight='260px' p={6}>
                <Heading as='h4' size={{ base: '2xl', sm: '3xl' }} fontWeight='600' mb={4}>
                  Energetikai Otthonfelújítási Támogatás
                </Heading>
                <Text fontSize={{ base: 'md', sm: 'lg' }}>
                  Az Energetikai Otthonfelújítási Támogatásban (EOFT) csak 2007 január 1. előtt épült ingatlanok
                  vehetnek részt és azokon mindenképpen energetikai korszerűsítést kell végrehajtani. A megvalósított
                  beruházással minimum 30%-os energetikai megtakarítást kell elérni, amit energetikai tanúsítványokkal
                  bizonyítani szükséges. A pályázónak 2024 december 20. előtt már tulajdonrésszel kell rendelkeznie az
                  ingatlanba, vagy ez előtt aláírt, ügyvéd által ellenjegyzett adásvételi szerződét kell bemutatnia. A
                  pályázat igényelhető hőszigetelésre, nyílászáró cserére vagy fűtés felújításra.
                </Text>
              </Box>
              <Box p={6} pt={0}>
                <Text fontSize='xl' fontWeight='600' mb={2}>
                  Maximálisan elérhető támogatás
                </Text>
                <Table.Root size='sm'>
                  <Table.Body>
                    {items_1.map((item) => (
                      <Table.Row key={item.id}>
                        <Table.Cell fontSize='lg' px={0} borderBottom={0}>
                          {item.name}
                        </Table.Cell>
                        <Table.Cell fontSize='lg' px={0} borderBottom={0} textAlign='end'>
                          {item.data}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
                {/* <Box display={{ base: 'block', sm: 'none' }}>
                  {items_1.map((item) => (
                    <Flex key={item.id} justify='space-between' mb={2}>
                      <Text fontSize='lg' fontWeight='600'>
                        {item.name}
                      </Text>
                      <Text fontSize='lg'>{item.data}</Text>
                    </Flex>
                  ))}
                </Box> */}
              </Box>
            </Box>
          </GridItem>
          <GridItem className='heat-grid-item' transition={'opacity 0.3s ease-in-out'}>
            <Box rounded='2xl' bgColor='white' height='100%' position='relative' maxW='600px' mx='auto'>
              <Box height='220px' bgImage={`url(${sol_2})`} bgSize='cover' bgPos='center' roundedTop='2xl' />
              <Box minHeight='260px' p={6}>
                <Heading as='h4' size='3xl' fontWeight='600' mb={8}>
                  Vidéki Otthonfelújítási Támogatás
                </Heading>
                <Text fontSize='lg'>
                  A Vidéki Otthon Felújítási Támogatásban (VOFT) 5000 főnél kevesebb lakosú településen található
                  ingatlanok vehetnek részt. A pályázónak 25 év alatti gyermeket kell nevelnie és a gyermekkel együtt
                  legalább 50%-os tulajdon résszel kell rendelkezniük az ingatlanban. A vissza nem terítendő támogatás
                  maximális összeg 3 milló forint, melyet a projekt költségének 50%-ára lehet igényelni. A pályázat
                  igénylői előfinanszírozással valósul meg, melyre azonban maximum 6 milló Ft kedvezményes hitelt lehet
                  felvenni, ami a beruházás befejezése után a vissza nem térítendő támogatás összegével csökken.
                </Text>
              </Box>
              <Box p={6} pt={0}>
                <Text fontSize='xl' fontWeight='600' mb={2}>
                  Maximálisan elérhető támogatás
                </Text>
                <Table.Root size='sm'>
                  <Table.Body>
                    {items_2.map((item) => (
                      <Table.Row key={item.id}>
                        <Table.Cell fontSize='lg' px={0} borderBottom={0}>
                          {item.name}
                        </Table.Cell>
                        <Table.Cell fontSize='lg' px={0} borderBottom={0} textAlign='end'>
                          {item.data}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ResidentialAvailable;
