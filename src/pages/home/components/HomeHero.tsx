import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/images/home/hero_bg.jpg';
import { FaArrowDown } from 'react-icons/fa';

const HomeHero = () => {
  const scroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Image src={bg} position='absolute' top={0} minH='100vh' zIndex={-1} fit='cover' />
      <Box h='100vh'>
        <Box bgColor='#062617B2' pt={{ base: 0, lg: 16 }}>
          <NavBar />
        </Box>
        <Flex bg='#062617B2' justify='center' align='center' h='100%'>
          <Flex w={{ base: '95%', lg: '76rem' }} h='100%' flexDirection='column' align='center'>
            <Heading
              as='h1'
              fontSize={{ base: '6xl', sm: '7xl', md: '80px', lg: '95px' }}
              lineHeight={{ base: '60px', sm: '80px', md: '100px', lg: '130px' }}
              fontWeight='700'
              color='accent'
              mt={16}
              pl={{ base: 0, lg: 40 }}
              textIndent={{ base: 0, lg: -40 }}
              textAlign={{ base: 'center', lg: 'left' }}
              wordBreak='break-all'>
              Szabadulj a<br />
              <Text as='span' color='white'>
                rezsicsapdából!
              </Text>
            </Heading>
            <IconButton
              mt={40}
              color='dark'
              bgColor='accent'
              rounded='full'
              size='2xl'
              width='75px'
              height='75px'
              onClick={scroll}>
              <FaArrowDown color='dark' />
            </IconButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default HomeHero;
