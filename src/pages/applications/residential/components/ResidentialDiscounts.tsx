import { Box, Flex, Grid, GridItem, Heading, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react';
import home_outline from '../../../../assets/icons/home-outline.svg';
import chart_line_up_outline from '../../../../assets/icons/chart-line-up-outline.svg';
import sun_outline from '../../../../assets/icons/sun-outline.svg';
import file_pen_outline from '../../../../assets/icons/file-pen-outline.svg';
import sort_outline from '../../../../assets/icons/sort-outline.svg';
import settings_outline from '../../../../assets/icons/settings-outline.svg';
import shield_outline from '../../../../assets/icons/shield-outline.svg';
import wind from '../../../../assets/icons/wind.svg';

const ResidentialDiscounts = () => {
  return (
    <>
      <Flex bg='#ebedf0' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }}>
          <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
            Otthonfelújítási kedvezmények
          </Heading>
          <Heading as='h3' size='5xl' textAlign='center' fontWeight='600'>
            Mi is hozzájárulunk a támogatáshoz
          </Heading>
          <Text fontSize='xl' textAlign='center' fontWeight='500' maxW='46rem' width='100%' mx='auto' mt={5} mb={20}>
            Szerződj velünk a kivitelezésre és kedvezményesen veheted igénybe szolgáltatásainkat!{' '}
            <Text as='span' fontWeight={700}>
              Ennek keretében:
            </Text>
          </Text>
        </Box>
      </Flex>
      <Flex bg='primary' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }} minH='350px' py={20}>
          <Grid
            templateColumns={{
              base: '1fr',
              lg: '1fr 2fr',
            }}
            gap={{ base: 8, lg: 0 }}
            h='100%'>
            <GridItem colSpan={1}>
              <Flex flexDirection='column' h='100%' justify='center'>
                <Heading as='h3' size='5xl' fontWeight='600' color='white'>
                  Ingyen adjuk
                </Heading>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={8} h='100%' minH='150px'>
                <Flex flexDirection='column' h='100%' justify='space-between' gap={{ base: 0, md: 8 }}>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={home_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Ingatlan felmérés
                    </Text>
                  </Flex>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={chart_line_up_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Megtakarítási számítások
                    </Text>
                  </Flex>
                </Flex>

                <Flex flexDirection='column' h='100%' justify='space-between' gap={{ base: 0, md: 8 }}>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={sun_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Energetikai tanúsítványok
                    </Text>
                  </Flex>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={file_pen_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Pályázati dokumentumok elkészítése
                    </Text>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      <Flex bg='dark' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }} minH='350px' py={20}>
          <Grid
            templateColumns={{
              base: '1fr',
              lg: '1fr 2fr',
            }}
            gap={{ base: 8, lg: 0 }}
            h='100%'>
            <GridItem colSpan={1}>
              <Flex flexDirection='column' h='100%' justify='center'>
                <Heading as='h3' size='5xl' fontWeight='600' color='white'>
                  Verhetetlen áron kivitelezzük
                </Heading>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={8} h='100%' minH='150px'>
                <Flex flexDirection='column' h='100%' justify='space-between' gap={{ base: 0, md: 8 }}>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={sort_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Hőszigetelés
                      <br />
                      (Fal és Födém)
                    </Text>
                  </Flex>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={settings_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Hőszivattyús rendszerek
                    </Text>
                  </Flex>
                </Flex>

                <Flex flexDirection='column' h='100%' justify='space-between' gap={{ base: 0, md: 8 }}>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={shield_outline} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Nyílászáró csere
                    </Text>
                  </Flex>
                  <Flex align='center' h='70px'>
                    <IconButton cursor='default' height='56px' width='56px' rounded='full' bgColor='accent'>
                      <Image src={wind} />
                    </IconButton>
                    <Text fontSize='22px' fontWeight='600' color='white' ml={5}>
                      Felületfűtés/hűtés és Fan-Coilok
                    </Text>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default ResidentialDiscounts;
