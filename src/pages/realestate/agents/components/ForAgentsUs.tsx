import { Box, Flex, Grid, GridItem, Heading, Image, List, Text } from '@chakra-ui/react';
import mission from '../../../../assets/images/realestate/mission.jpg';

import check from '../../../../assets/icons/check-full.svg';

const HomeMission = () => {
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' fontWeight='600' color='primary' mb={2}>
          Rólunk
        </Heading>
        <Heading as='h3' size='5xl' fontWeight='600' color='black' mb={6} lineHeight={1.2}>
          Mi is az a SaWingatlan?
        </Heading>

        <Grid
          templateColumns={{
            base: '1fr',
            md: '60fr 55fr',
          }}
          gap={{ base: 0, md: 16 }}
          mb={{ base: 12, md: 20 }}>
          <GridItem colSpan={1}>
            <List.Root gap='2' variant='plain' align='center'>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467'>
                <List.Indicator asChild>
                  <Image src={check} />
                </List.Indicator>
                A SaWingatlan nem klasszikus ingatlanközvetítő cég.
              </List.Item>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467'>
                <List.Indicator asChild>
                  <Image src={check} />
                </List.Indicator>
                Ingatlanközvetítéssel kizárólag akkor foglalkozunk, ha a SaWin Faluprogram beruházásai során erre igény
                merül fel.
              </List.Item>
            </List.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <List.Root gap='2' variant='plain' align='center'>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467'>
                <List.Indicator asChild color='green.500'>
                  <Image src={check} />
                </List.Indicator>
                Fő célunk: az ingatlanközvetítők széles körének támogatása.
              </List.Item>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467'>
                <List.Indicator asChild color='green.500'>
                  <Image src={check} />
                </List.Indicator>
                Bármely irodával vagy önálló ingatlanossal örömmel működünk együtt.
              </List.Item>
            </List.Root>
          </GridItem>
        </Grid>

        <Image src={mission} rounded='20px' fit='cover' maxHeight='350px' width='100%' mb={20} />

        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600'>
          Nem konkurencia vagyunk,{' '}
          <Text as='span' color='primary'>
            hanem erőforrás!
          </Text>
        </Heading>
      </Box>
    </Flex>
  );
};

export default HomeMission;
