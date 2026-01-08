import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import { Box, Flex, Heading } from '@chakra-ui/react';
import NavBar from '../../components/navbar/NavBar';
import QAnswerWidget from '../../components/qanswerwidget/QAnswerWidget';

const Judith = () => {
  return (
    <>
      <Helmet>
        <title>Judith - SaWin Energy</title>
      </Helmet>
      <Box h={{ base: '60vh', md: '85vh' }} bgColor='#ebedf0' bgSize='cover'>
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
            as='h3'
            size={{ base: '4xl', sm: '5xl' }}
            textAlign='center'
            fontWeight='600'
            lineHeight='short'
            mb={0}
            mt={4}>
            SaWin AI Judith
          </Heading>
          <QAnswerWidget />
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Judith;
