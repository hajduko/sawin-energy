import { Box, Flex, IconButton, useDisclosure, Image, Text } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../assets/sawin.svg';

const NavBar = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      mx='auto'
      maxWidth={{ base: '100%', lg: '76rem' }}
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
            <Text color='dark' fontSize='xl' fontWeight={location.pathname === '/' ? '700' : '400'}>
              Főoldal
            </Text>
          </Link>
          <Link to='/heatpump'>
            <Text color='dark' fontSize='xl' fontWeight={location.pathname === '/heatpump' ? '700' : '400'}>
              Hőszivattyú
            </Text>
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
