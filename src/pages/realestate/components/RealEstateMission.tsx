import { Box, Flex, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import mission from '../../../assets/images/realestate/mission.jpg';

const RealEstateMission = () => {
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' fontWeight='600' color='primary' mb={2}>
          Küldetésünk
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
              Eladhatóvá tesszük
              <br />
              korszerűtlen ingatlanod!
            </Heading>
            <Text fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467' mb={{ base: 4, lg: 0 }}>
              Küldetésünk, hogy a korszerűtlen, magas rezsiköltségű ingatlanokat új életre keltsük - teljeskörűen, a
              tervezéstől a kivitelezésig.
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467'>
              A célunk, hogy olyan modern, fenntartható és értékálló otthonokat teremtsünk, amelyek nemcsak
              energiahatékonyak, de piaci értékük is jelentős mértékben növekszik. Ma még kevés az ilyen típusú
              ingatlan, pedig a kereslet és az ár prémium is óriási - mi szakértelmünknek köszönhetően éppen ebben
              tudunk Neked segíteni!
            </Text>
          </GridItem>
        </Grid>

        <Image src={mission} rounded='20px' fit='cover' maxHeight='350px' width='100%' />
      </Box>
    </Flex>
  );
};

export default RealEstateMission;
