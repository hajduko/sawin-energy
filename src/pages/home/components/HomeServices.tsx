import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Heading, Image, Card, Text } from '@chakra-ui/react';
import { SegmentedControl } from '../../../components/ui/segmented-control';
import services from '../../../assets/images/home/services.png';
import lightning_green from '../../../assets/icons/lightning_green.svg';
import settings_outline from '../../../assets/icons/settings-outline-green.svg';
import home_outline from '../../../assets/icons/home-outline-green.svg';
import car from '../../../assets/icons/car.svg';

const HomeServices = () => {
  const [value, setValue] = useState('Napelemes rendszerek');
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={20} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Szolgáltatások
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' lineHeight='short' mb={16}>
          Szabadulj ki a Rezsicsapdából
          <br />
          megoldásainkkal
        </Heading>

        <SegmentedControl
          value={value}
          onValueChange={(e) => setValue(e.value)}
          items={['Napelemes rendszerek', 'Gépészeti megoldásaink', 'Hőszigetelés', 'Elektromos autó']}
          width='100%'
          maxWidth='100%'
          mb={12}
        />

        <Grid
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr',
          }}
          gap={6}>
          {value === 'Napelemes rendszerek' && (
            <>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={lightning_green} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>Visszwattos napelemes rendszerek</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Csökkentsd az energiafüggőségedet!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Függetlenedj a folyamatosan változó energiaáraktól a nap segítségével! Egy pontosan méretezett
                      napelemes rendszerrel a fogyasztásod nagyrészét kiválthatod!
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={lightning_green} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>Akkumulátoros rendszerek</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Maximalizáld a megtakarításod!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Legyen egy napelemes rendszer otthonod vagy üzemed energiatermelő központja. Így fűthetsz,
                      hűthetsz vagy autót is tölthetsz a nappal!
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            </>
          )}
          {value === 'Gépészeti megoldásaink' && (
            <>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={settings_outline} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>Lakossági és ipari hőszivattyúk</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Lépj le a gázról!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Hűts és fűts modern hőszivattyúval és szabadulj meg a gázszámlától örökre. Kínálatunkban lakossági
                      monoblock hőszivattyúk és ipari méretű berendezések is elérhetők.
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={settings_outline} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>Teljeskörű szerviz és garancia</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Garantált biztonság!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Termékeink hivatalos szervizeként biztosítjuk számodra a gyors probléma megoldást és személyre
                      szabott garanciális feltételeket. Így tényleg biztonságban érezheted magad!
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            </>
          )}
          {value === 'Hőszigetelés' && (
            <>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={home_outline} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>TODO</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      TODO
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      TODO
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={home_outline} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>TODO</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      TODO
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      TODO
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            </>
          )}
          {value === 'Elektromos autó' && (
            <>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={car} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>Elektromos autótöltők</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Töltsd elektromos autód Otthon!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Élvezd az olcsó otthontöltés minden kényelmét! A szükséges áramot napelemmel is megtermelheted,
                      így ingyen „tankolhatsz” a nap segítségével!
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
              <GridItem colSpan={1}>
                <Card.Root width='100%' height='230px' rounded='20px'>
                  <Card.Body>
                    <Flex>
                      <Image src={car} height='24px' width='24px' fit='contain' mr={4} />
                      <Text color='primary'>EV tartósbérlet</Text>
                    </Flex>
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Válts elektromos autóra könnyedén!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Vegyél tartósbérletbe használt elektromos autót és használd ki, hogy konstrukciónkban a bérlet
                      lejártakor megvásárolhatod a járművet. Céges partnerünkként lehetőséged van áfa visszaigénylésre
                      is.
                    </Card.Description>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            </>
          )}
        </Grid>

        <Image src={services} mt={12} rounded='20px' />
      </Box>
    </Flex>
  );
};

export default HomeServices;
