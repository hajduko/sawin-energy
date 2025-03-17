import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/images/home/hero_bg.jpg';
import { FaArrowDown } from 'react-icons/fa';

const HomeHero = () => {
  const scroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Box h={{ base: '60vh', md: '85vh' }} bgImg={`url(${bg})`} bgSize='cover'>
      <Box h='full' w='full' bgColor='#062617B2'>
        <Flex
          h='full'
          w={{ base: '100%', lg: '76rem' }}
          mx='auto'
          flexDir='column'
          align='center'
          justify='space-between'
          pt={{ base: 0, lg: 16 }}
          pb={16}>
          <Box w='full'>
            <NavBar />
          </Box>
          <Heading
            as='h1'
            fontSize={{ base: '5xl', sm: '7xl', md: '80px', lg: '95px' }}
            lineHeight={{ base: '60px', sm: '80px', md: '100px', lg: '130px' }}
            fontWeight='700'
            color='accent'
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
            color='dark'
            bgColor='accent'
            rounded='full'
            size='2xl'
            width='75px'
            height='75px'
            onClick={scroll}
            zIndex={0}>
            <FaArrowDown color='dark' />
          </IconButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeHero;
