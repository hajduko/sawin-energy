import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/images/home/hero_bg.jpg';
import { FaArrowDown } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <>
      <Image src={bg} position='absolute' top={-250} minH='1000px' zIndex={-1} fit='cover' />
      <Box bgColor='#062617B2' pt={{ base: 0, lg: 16 }}>
        <NavBar />
      </Box>
      <Flex bg='#062617B2' justify='center' h='600px'>
        <Flex w={{ base: '95%', lg: '76rem' }} h='100%' flexDirection='column' align='center'>
          <Heading
            as='h1'
            fontSize={{ base: '6xl', sm: '7xl', md: '80px', lg: '8xl' }}
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
          <IconButton mt={20} color='dark' bgColor='accent' rounded='full' size='2xl' width='75px' height='75px'>
            <FaArrowDown color='dark' />
          </IconButton>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeHero;
