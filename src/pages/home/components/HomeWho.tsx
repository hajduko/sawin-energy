import { Box, Card, Flex, Grid, GridItem, Heading, IconButton, Image } from '@chakra-ui/react';
import user from '../../../assets/icons/user.svg';
import store from '../../../assets/icons/store.svg';
import company from '../../../assets/icons/company.svg';

const HomeWho = () => {
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Kiknek szól
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' lineHeight='short' mb={16}>
          Rendszereinket ajánljuk...
        </Heading>

        <Grid
          templateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          }}
          gap={6}>
          <GridItem colSpan={1}>
            <Card.Root width='100%' minHeight='364px' rounded='20px' bgColor='primary'>
              <Card.Body>
                <IconButton width='56px' height='56px' rounded='full' bgColor='accent' cursor='default' mb={8}>
                  <Image src={user} height='24px' width='24px' />
                </IconButton>

                <Card.Title fontSize='xl' fontWeight='600' mb={2} color='accent'>
                  Magánszemélyeknek
                </Card.Title>
                <Card.Description fontSize='md' color='light'>
                  Teljeskörű megoldásokat biztosítunk családiházak és lakások energetikai modernizálására.
                  Rendszereinkkel nem csak megtakaríthatsz, de növelheted családod biztonságát és ingatlanod értékét is.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <Card.Root width='100%' minHeight='364px' rounded='20px' bgColor='primary'>
              <Card.Body>
                <IconButton width='56px' height='56px' rounded='full' bgColor='accent' cursor='default' mb={8}>
                  <Image src={store} height='24px' width='24px' />
                </IconButton>

                <Card.Title fontSize='xl' fontWeight='600' mb={2} color='accent'>
                  Társasházaknak
                </Card.Title>
                <Card.Description fontSize='md' color='light'>
                  Társasházak teljeskörű energetikai felmérését és modernizálását válláljuk. Megoldásainkkal értékesebb
                  lakásokat és alacsonyabb számlákat teremtünk a lakóközösségének.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <Card.Root width='100%' minHeight='364px' rounded='20px' bgColor='primary'>
              <Card.Body>
                <IconButton width='56px' height='56px' rounded='full' bgColor='accent' cursor='default' mb={8}>
                  <Image src={company} height='24px' width='24px' />
                </IconButton>

                <Card.Title fontSize='xl' fontWeight='600' mb={2} color='accent'>
                  Cégeknek
                </Card.Title>
                <Card.Description fontSize='md' color='light'>
                  A magas energiaárak a cégeket érintik leginkább. Szolárra épített elektrifikációs megoldásainkkal
                  azonban biztonságban tudhatod vállalkozásodat a növekvő energiaáraktól. Sokrétű fűtési megoldásaink
                  megtérülő beruházásokat eredményeznek, amik az üzemek értékét is nagyban növelik!
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default HomeWho;
