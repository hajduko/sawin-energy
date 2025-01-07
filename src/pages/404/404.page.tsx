import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>A keresett oldal nem található - Sawin Energy</title>
      </Helmet>
      <Box h='100vh' bgColor='#ebedf0' position='relative' pt={{ base: 0, lg: 16 }}>
        <NavBar />
        <Flex bg='#ebedf0' align='center' justify='center' flexDirection='column' h='calc(100vh - 450px)'>
          <Heading as='h1' size='5xl' fontWeight='600' color='primary' textAlign='center' mb={10}>
            A keresett oldal nem található!
          </Heading>
          <Button
            size='2xl'
            bg='accent'
            w={'fit-content'}
            rounded={'8px'}
            fontSize='lg'
            fontWeight='600'
            color='dark'
            onClick={() => window.location.replace('/')}>
            Vissza a főoldalra
          </Button>
        </Flex>
        <Box position='absolute' bottom={0} w='100%'>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Page404;
