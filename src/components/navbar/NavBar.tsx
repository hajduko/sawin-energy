import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <Flex bgColor='primary' justify='center'>
      <Box bgColor='accent' w={{ base: '100%', md: '56rem', lg: '72rem' }}>
        <Flex
          minH={{ base: '3rem', md: '4rem' }}
          w='100%'
          align='center'
          justify='space-between'
          gap={6}
          paddingX={{ base: '1rem' }}>
          <Box marginEnd='auto'>
            <Link to='/'>Logo</Link>
          </Box>
          <Link to='/'>Home</Link>
          <Link to='/heatpump'>Heat Pump</Link>
          <Link to='/eoft'>EOFT</Link>
          <Link to='/commercial'>Commercial</Link>
          <Link to='/partners'>Partners</Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
