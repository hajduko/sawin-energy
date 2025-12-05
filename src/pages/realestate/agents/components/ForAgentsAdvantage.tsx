import { Box, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react';

import { PiHandCoinsLight } from 'react-icons/pi';
import { GrLineChart } from 'react-icons/gr';
import { GiTrophyCup, GiLightBulb } from 'react-icons/gi';

const ForAgentsAdvantage = () => {
  return (
    <Flex bg='dark' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} pt={12}>
        <Heading as='h2' size='md' fontWeight='600' color='accent' mb={2}>
          Előnyök
        </Heading>
        <Heading as='h3' size='5xl' fontWeight='600' color='white' mb={12} lineHeight={1.2}>
          Miért érdemes velünk dolgozni?
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr 1fr 1fr',
          }}
          textAlign='center'
          gap={{ base: 4, md: 0 }}
          mb={12}>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' align='center' h='100%'>
              <Icon as={PiHandCoinsLight} color='accent' mb={4} boxSize={100} />
              <Text fontSize='lg' color='white'>
                Jutalék és prémium minden eladott szolgáltatás után
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' align='center' h='100%'>
              <Icon as={GrLineChart} color='accent' mb={4} boxSize={100} />
              <Text fontSize='lg' color='white'>
                Új piacok és lehetőségek a portfólió bővítésére
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' align='center' h='100%'>
              <Icon as={GiTrophyCup} color='accent' mb={4} boxSize={100} />
              <Text fontSize='lg' color='white'>
                Magasabb értékesítés, több bevétel
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection='column' align='center' h='100%'>
              <Icon as={GiLightBulb} color='accent' mb={4} boxSize={100} />
              <Text fontSize='lg' color='white'>
                Energiahatékonysági megoldások, amelyek értéknövelőek
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ForAgentsAdvantage;
