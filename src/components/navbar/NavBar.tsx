import { Box, Flex, IconButton, useDisclosure, Image, Text, Collapsible, Stack } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
          <Link to='/applications/residential'>
            <Text
              color='dark'
              fontSize='xl'
              fontWeight={location.pathname === '/applications/residential' ? '700' : '400'}>
              Lakossági pályázatok
            </Text>
          </Link>
        </Flex>

        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton aria-label='Open Menu' size='lg' variant='ghost' onClick={onToggle}>
            {open ? <FaTimes /> : <FaBars />}
          </IconButton>
        </Flex>
      </Flex>
      <Collapsible.Root
        open={open}
        width='100%'
        onClick={(evt) => {
          if ((evt.target as Element).closest('.navitem')) onToggle();
        }}>
        <Collapsible.Content>
          <Stack p={4} textAlign='center' className='navitem' display={{ md: 'none' }}>
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
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

export default NavBar;
