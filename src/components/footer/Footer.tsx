import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

const NavBar = () => {
  return (
    <Flex bgColor='dark' justify='center'>
      <Box w={{ base: '100%', md: '56rem', lg: '72rem' }}>
        <Flex
          minH={{ base: '6rem', md: '8rem' }}
          w='100%'
          flexDirection={'column'}
          align='center'
          justify='space-between'
          paddingY={{ base: '3rem' }}
          gap={4}>
          <Link to='/'>
            <Heading color='white'>Logo</Heading>
          </Link>
          <Flex
            w='100%'
            align='center'
            justify='space-around'
            paddingBottom={{ base: '1rem' }}
            borderBottomColor='white'
            borderBottomWidth='2px'>
            <Link to='mailto:info@ezsolutions.hu'>
              <Flex align='center' gap={4}>
                <MdOutlineEmail color='white' size='30px' />
                <Heading as='h4' color='white'>
                  info@ezsolutions.hu
                </Heading>
              </Flex>
            </Link>
            <Link to='tel:+36706189151'>
              <Flex align='center' gap={4}>
                <MdOutlinePhone color='white' size='30px' />
                <Heading as='h4' color='white'>
                  +36 70 618 9151
                </Heading>
              </Flex>
            </Link>
          </Flex>
          <Flex align='center' width='100%' justify='space-between'>
            <Text color='white'>2024 - SaWin Energy © Minden jog fenntartva</Text>
            <Link to='/privacy'>
              <Text color='white'>Privacy</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
