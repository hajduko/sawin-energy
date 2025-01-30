import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const RecruitmentAdvantage = () => {
  return (
    <Flex bg='dark' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }}>
        <Grid
          templateColumns={{
            base: '1fr',
            md: '2fr 3fr 2fr',
          }}
          textAlign='center'
          minH='380px'>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' justify='center' h='100%'>
              <Heading as='h3' size='5xl' fontWeight='600' color='accent' mb={4}>
                Másodállásban <br /> vagy szabadúszóként
              </Heading>
              <Text fontSize='lg' color='white'>
                is végezhető munkák!
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' justify='center' h='100%'>
              <Heading as='h3' size='6xl' fontWeight='600' color='accent' mb={4}>
                Kiemelkedő kereseti lehetőség
              </Heading>
              <Text fontSize='lg' color='white'>
                jutalékos elszámolással!
                <br />
                Havi kereseti lehetőség: 300.000 - 1.000.000 Ft
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' justify='center' h='100%'>
              <Heading as='h3' size='5xl' fontWeight='600' color='accent' mb={4}>
                Fix havi alap juttatás
              </Heading>
              <Text fontSize='lg' color='white'>
                SaWin Tanácsadóknak!
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default RecruitmentAdvantage;
