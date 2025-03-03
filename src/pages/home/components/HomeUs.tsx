import { Box, Flex, Heading, Text, Image, Grid, GridItem, List, IconButton } from '@chakra-ui/react';
import us from '../../../assets/images/home/us.jpeg';
import rocket from '../../../assets/icons/rocket.svg';
import magnifying_glass from '../../../assets/icons/magnifying_glass.svg';
import check_full from '../../../assets/icons/check-full.svg';

const HomeUs = () => {
  return (
    <>
      <Flex bg='#ebedf0' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }} mb={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }}>
          <Heading as='h2' size='md' fontWeight='600' color='primary' mb={2}>
            Rólunk
          </Heading>

          <Grid
            templateColumns={{
              base: '1fr',
              md: '60fr 55fr',
            }}
            gap={{ base: 0, md: 16 }}
            mb={{ base: 12, md: 20 }}>
            <GridItem colSpan={1}>
              <Heading as='h3' size='5xl' fontWeight='600' color='black' mb={6} lineHeight={1.2}>
                Megtérülő befektetések,
                <br /> megújuló energia
              </Heading>
              <Text fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467' mb={{ base: 4, lg: 0 }}>
                Cégünk innovatív, megújuló megoldások teljes palettáját szolgáltatja családod és céged számára. Mindig
                teljeskörű szolgáltatást nyújtunk, ahol az engedélyeztetéssel, kivitelezéssel járó terhet levesszük a
                válladról.
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467'>
                A folyamat elején háztartásod vagy üzemed jelen és jövőbeli igényeit is pontosan meghatározzuk és ezek
                alapján keressük meg a számodra tökéletes modern energetikai megoldást. Mindez saját fejlesztésű
                szoftverünknek köszönhetően a szemed láttára történik. A precíz és pontos munkát csapatunk évtizedes
                műszaki, építőipari, jogi, számviteli és értékesítő tapasztalata garantálja.
              </Text>
            </GridItem>
          </Grid>

          <Image src={us} rounded='20px' fit='cover' maxHeight='550px' width='100%' />
        </Box>
      </Flex>
      <Flex bg='dark' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }} mb={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }}>
          <Grid
            templateColumns={{
              base: '1fr',
              md: '1fr 1fr',
            }}
            gap={{ base: 10, lg: 32 }}>
            <GridItem colSpan={1}>
              <IconButton width='56px' height='56px' rounded='full' bgColor='accent' cursor='default' mb={4}>
                <Image src={rocket} width='20px' height='20px' />
              </IconButton>
              <Heading as='h2' size='5xl' fontWeight='600' mb={{ base: 8, md: 16 }} color='light'>
                Mit adunk ügyfeleinknek?
              </Heading>
              <List.Root variant='plain'>
                <List.Item mb={6}>
                  <List.Indicator asChild mr={4}>
                    <Image src={check_full} h='28px' w='28px' />
                  </List.Indicator>
                  <Text color='light' fontSize='md'>
                    <Text as='span' fontWeight='600' fontSize='xl' color='accent'>
                      Maximális megtakarítás
                    </Text>
                    <br />
                    <br />
                    Minden épület más, ezért elég valószínű, hogy neked nem ugyanaz az energetikai beruházás éri meg,
                    mint a szomszédodnak. Mi a számodra leghatékonyabb rendszert tervezzük meg, pontos megtakarítás
                    számításokkal alátámasztva.
                  </Text>
                </List.Item>
                <List.Item mb={6}>
                  <List.Indicator asChild mr={4}>
                    <Image src={check_full} h='28px' w='28px' />
                  </List.Indicator>
                  <Text color='light' fontSize='md'>
                    <Text as='span' fontWeight='600' fontSize='xl' color='accent'>
                      Jövőálló megoldások
                    </Text>
                    <br />
                    <br />
                    Jövőbeli terveidet is ütemezzük otthonod modernizálásakor, így a beruházásod nem válik elavulttá pár
                    év múlva.
                  </Text>
                </List.Item>
                <List.Item>
                  <List.Indicator asChild mr={4}>
                    <Image src={check_full} h='28px' w='28px' />
                  </List.Indicator>
                  <Text color='light' fontSize='md'>
                    <Text as='span' fontWeight='600' fontSize='xl' color='accent'>
                      Megbízhatóság
                    </Text>
                    <br />
                    <br />
                    Csak kipróbált, minőségi termékekkel dolgozunk, melyekhez teljeskörű szervízhátteret biztosítunk.
                  </Text>
                </List.Item>
              </List.Root>
            </GridItem>
            <GridItem colSpan={1}>
              <IconButton width='56px' height='56px' rounded='full' bgColor='accent' cursor='default' mb={4}>
                <Image src={magnifying_glass} width='20px' height='20px' />
              </IconButton>
              <Heading as='h2' size='5xl' fontWeight='600' mb={{ base: 8, md: 16 }} color='light'>
                Mi különböztet meg minket?
              </Heading>
              <List.Root variant='plain'>
                <List.Item mb={6}>
                  <List.Indicator asChild mr={4}>
                    <Image src={check_full} h='28px' w='28px' />
                  </List.Indicator>
                  <Text color='light' fontSize='md'>
                    <Text as='span' fontWeight='600' fontSize='xl' color='accent'>
                      Tanácsadókkal dolgozunk
                    </Text>
                    <br />
                    <br />
                    Nem értékesítőink vannak, hanem olyan, magasan képzett tanácsadóink, akik a te érdekeidet
                    képviselik, érted dolgoznak.
                  </Text>
                </List.Item>
                <List.Item mb={6}>
                  <List.Indicator asChild mr={4}>
                    <Image src={check_full} h='28px' w='28px' />
                  </List.Indicator>
                  <Text color='light' fontSize='md'>
                    <Text as='span' fontWeight='600' fontSize='xl' color='accent'>
                      Saját szoftvert fejlesztünk
                    </Text>
                    <br />
                    <br />A legátfogóbb energetikai beruházás felmérő és tervező programot fejlesztettük ki. Egy
                    teljeskörű felmérés alapján a program kiválasztja, megtervezi és le is ütemezi a számodra tökéletes
                    beruházást.
                  </Text>
                </List.Item>
                <List.Item>
                  <List.Indicator asChild mr={4}>
                    <Image src={check_full} h='28px' w='28px' />
                  </List.Indicator>
                  <Text color='light' fontSize='md'>
                    <Text as='span' fontWeight='600' fontSize='xl' color='accent'>
                      Komplex megoldások
                    </Text>
                    <br />
                    <br />
                    Lakossági szinten is egységesés és összetett energetikai rendszerekben gondolkozunk. Nem hiszünk sem
                    a konzum megoldásokban sem az ökölszabályokban.
                  </Text>
                </List.Item>
              </List.Root>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default HomeUs;
