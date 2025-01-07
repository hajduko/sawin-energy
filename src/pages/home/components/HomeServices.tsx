import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Heading, Text, Image, Card } from '@chakra-ui/react';
import { SegmentedControl } from '../../../components/ui/segmented-control';
import services from '../../../assets/images/home/services.png';
import lightning_green from '../../../assets/icons/lightning_green.svg';

const HomeServices = () => {
  const [value, setValue] = useState('Napelemes rendszerek');
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={20} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Szolgáltatások
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' lineHeight='short' mb={6}>
          Szabadulj ki a Rezsicsapdából
          <br />
          megoldásainkkal
        </Heading>

        <SegmentedControl
          value={value}
          onValueChange={(e) => setValue(e.value)}
          items={['Napelemes rendszerek', 'Gépészeti megoldásaink', 'Elektromos autó']}
          width='100%'
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
                    <Image src={lightning_green} height='24px' width='24px' fit='contain' />
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
                    <Image src={lightning_green} height='24px' width='24px' fit='contain' />
                  </Card.Body>
                  <Card.Footer flexDirection='column' alignItems='flex-start'>
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      Maximalizáld a megtakarításod!
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467'>
                      Legyen egy napelemes rendszer otthonod vagy üzemed energiatermelő központja. Így fűthetsz,
                      hűthetsz vagy tölthetsz is a nappal!
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
                    <Image src={lightning_green} height='24px' width='24px' fit='contain' />
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
                    <Image src={lightning_green} height='24px' width='24px' fit='contain' />
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
                    <Image src={lightning_green} height='24px' width='24px' fit='contain' />
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
                    <Image src={lightning_green} height='24px' width='24px' fit='contain' />
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
        </Grid>

        <Image src={services} mt={12} />
      </Box>
    </Flex>
  );
};

export default HomeServices;
