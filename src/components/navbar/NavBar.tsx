import { Box, Flex, IconButton, useDisclosure, Image, Collapsible } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../assets/sawin.svg';
import DesktopNav from './desktop/DesktopNav';
import MobileNav from './mobile/MobileNav';

const NavBar = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      mx='auto'
      maxWidth={{ base: '100%', lg: '76rem' }}
      bg={'light'}
      py={'10px'}
      px={{ base: '20px', lg: '40px' }}
      rounded={{ base: 'none', lg: 'full' }}
      position='relative'>
      <Flex minH={'51px'} align={'center'} justify={'space-between'}>
        <Flex>
          <Link to='/'>
            <Image src={logo} height='25px' />
          </Link>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} mx={4}>
          <DesktopNav />
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
        }}
        position='absolute'
        top={'51px'}
        left={0}
        zIndex={4}>
        <Collapsible.Content>
          <MobileNav />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

export default NavBar;
