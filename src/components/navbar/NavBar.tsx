import { Box, Flex, Icon, IconButton, useDisclosure, Heading, Image, Text } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../assets/sawin.svg';

const NavBar = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      mx='auto'
      maxWidth={{ base: '100%', lg: '62rem' }}
      bg={'light'}
      py={'10px'}
      px={{ base: '20px', lg: '40px' }}
      rounded={{ base: 'none', lg: 'full' }}>
      <Flex minH={'51px'} align={'center'} justify={'space-between'}>
        <Flex>
          <Link to='/'>
            <Image src={logo} height='25px' />
          </Link>
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} gap={8}>
          <Link to='/'>
            <Text color='dark'>Home</Text>
          </Link>
          <Link to='/heatpump'>
            <Text color='dark'>Heat Pump</Text>
          </Link>
        </Flex>
        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton aria-label='Open Menu' size='lg' variant='ghost' onClick={onToggle}>
            <FaBars />
          </IconButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
