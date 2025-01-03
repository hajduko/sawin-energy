import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const HeatPumpResults = () => {
  return (
    <Flex bg='dark' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }}>
        <Flex
          minH='380px'
          w='100%'
          direction={{ base: 'column', md: 'row' }}
          py={{ base: 12, lg: 0 }}
          align='center'
          justify='space-between'
          gap={12}>
          <Box textAlign='center'>
            <Heading as='h3' size='7xl' fontWeight='600' color='accent' mb={4}>
              4 év
            </Heading>
            <Text fontSize='lg' color='white'>
              alatt megtérülő beruházás egy átlagos ingatlan esetén
            </Text>
          </Box>
          <Box textAlign='center'>
            <Heading as='h3' size='7xl' fontWeight='600' color='accent' mb={4}>
              365 nap
            </Heading>
            <Text fontSize='lg' color='white'>
              Fűt és hűt, ezért az év minden napján tökéletes klímát biztosít
            </Text>
          </Box>
          <Box textAlign='center'>
            <Heading as='h3' size='7xl' fontWeight='600' color='accent' mb={4}>
              5x
            </Heading>
            <Text fontSize='lg' color='white'>
              Hatékonyabb, mint a modern kondenzációs kazánok
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeatPumpResults;
