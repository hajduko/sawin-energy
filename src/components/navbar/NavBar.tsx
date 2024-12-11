import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <Flex bgColor='dark' justify='center'>
      <Box w={{ base: '100%', md: '56rem', lg: '72rem' }}>
        <Flex minH={{ base: '3rem', md: '5rem' }} w='100%' align='center' justify='space-between' gap={12}>
          <Box marginEnd='auto'>
            <Link to='/'>
              <Heading as='h1' color='white'>
                Logo
              </Heading>
            </Link>
          </Box>
          <Link to='/'>
            <Text fontSize='lg' color='white'>
              Home
            </Text>
          </Link>
          <Link to='/heatpump'>
            <Text fontSize='lg' color='white'>
              Heat Pump{' '}
            </Text>
          </Link>
          <Link to='/eoft'>
            <Text fontSize='lg' color='white'>
              EOFT{' '}
            </Text>
          </Link>
          <Link to='/commercial'>
            <Text fontSize='lg' color='white'>
              Commercial{' '}
            </Text>
          </Link>
          <Link to='/partners'>
            <Text fontSize='lg' color='white'>
              Partners{' '}
            </Text>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
