import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router';
import { MdOutlineEmail, MdOutlineHouse, MdOutlinePhone } from 'react-icons/md';
import logo from '../../assets/sawin.svg';

const Footer = () => {
  return (
    <Flex bgColor='dark' justify='center'>
      <Box w={{ base: '100%', lg: '76rem' }}>
        <Flex
          minH={{ base: '6rem', md: '8rem' }}
          w='100%'
          flexDirection={'column'}
          align='center'
          justify='space-between'
          paddingY={{ base: '3rem' }}
          gap={6}>
          <Link to='/'>
            <Image src={logo} height='25px' mb={6} />
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
                <Text fontSize='lg' color='white'>
                  info@ezsolutions.hu
                </Text>
              </Flex>
            </Link>
            <Link to='tel:+36706189151'>
              <Flex align='center' gap={4}>
                <MdOutlinePhone color='white' size='30px' />
                <Text fontSize='lg' color='white'>
                  +36 70 618 9151
                </Text>
              </Flex>
            </Link>
            <Link to='tel:+36706189151'>
              <Flex align='center' gap={4}>
                <MdOutlineHouse color='white' size='30px' />
                <Text fontSize='lg' color='white'>
                  1051 Budapest, Nádor utca 17.
                </Text>
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

export default Footer;
