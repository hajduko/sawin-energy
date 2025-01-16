import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../../../components/navbar/NavBar';
import bg from '../../../../assets/images/residential/hero_bg.jpg';
import { FaArrowRight } from 'react-icons/fa';

const ResidentialHero = () => {
  return (
    <Box bgImage={`url(${bg})`} width='100%' bgRepeat='no-repeat' bgSize='cover' minH='730px'>
      <Box bgColor='#062617B2' minH='730px'>
        <Box pt={{ base: 0, lg: 16 }}>
          <NavBar />
        </Box>
        <Flex justify='center' align='center' minH={{ base: 'calc(100% - 71px)', lg: 'calc(100% - 135px)' }}>
          <Box w={{ base: '95%', lg: '76rem' }} h='100%' pt={20} pb={36}>
            <Flex w={{ base: '100%', lg: '62%' }} h='100%' flexDirection='column' justify='space-between'>
              <Heading as='h1' size='6xl' fontWeight='700' color='white' lineHeight='shorter'>
                Hozd ki a maximumot az Otthonfelújítási Támogatásból!
              </Heading>
              <Text fontSize='lg' color='white' mt={10} textAlign={{ base: 'center', lg: 'left' }} lineHeight='tall'>
                Jelentkezz teljeskörű Otthonfelújítási Támogatás szolgáltatásunkra. Most ingyenes tanácsadáson is részt
                vehetsz, ahol szakértőinktől minden kérdésedre választ kaphatsz a pályázattal kapcsolatban. Ha velünk
                szerződsz <b>kulcsrakészen</b> adjuk át felújított otthonodat, hogy Neked csak élvezned kelljen egy
                energia hatékony, modernebb otthon minden kényelmét!
              </Text>

              <Button
                size='2xl'
                mt={10}
                bg={'accent'}
                w={'fit-content'}
                rounded={'8px'}
                pl={4}
                pr={2}
                color={'dark'}
                fontSize='lg'
                fontWeight='600'>
                Jelentkezem a tanácsadásra!
                <Box
                  bg={'light'}
                  h={'47px'}
                  w={'47px'}
                  rounded='5px'
                  ml={4}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'>
                  <FaArrowRight color='dark' />
                </Box>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ResidentialHero;
