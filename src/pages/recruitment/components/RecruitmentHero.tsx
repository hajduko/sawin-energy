import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/images/heatpump/team.png';
import { FaArrowDown } from 'react-icons/fa';

const RecruitmentHero = () => {
  return (
    <Box bgImage={`url(${bg})`} width='100%' bgRepeat='no-repeat' bgSize='cover' minH='730px'>
      <Box bgColor='#062617BF' minH='730px'>
        <Box pt={{ base: 0, lg: 16 }}>
          <NavBar />
        </Box>
        <Flex justify='center' align='center' minH='550px'>
          <Box w={{ base: '95%', md: '76rem' }} h='100%'>
            <Flex
              w={{ base: '100%', lg: '80%' }}
              h='100%'
              flexDirection='column'
              justify='center'
              align={{ base: 'center', lg: 'flex-start' }}>
              <Heading
                as='h1'
                size={{ base: '4xl', sm: '6xl' }}
                fontWeight='700'
                color='white'
                textAlign={{ base: 'center', lg: 'left' }}>
                Legyél{' '}
                <Text as='span' color='accent'>
                  Tanácsadónk
                </Text>{' '}
                és utat mutatunk neked az anyagi függetlenségbe, <br />
                hogy{' '}
                <Text as='span' color='accent'>
                  együtt mutathassuk
                </Text>{' '}
                az utat másoknak az Energiafüggetlenségbe.
              </Heading>
              <Button
                size='2xl'
                mt={10}
                bg={'accent'}
                w={'fit-content'}
                rounded={'8px'}
                pl={4}
                pr={{ base: 4, sm: 2 }}
                color={'dark'}
                fontSize='lg'
                fontWeight='600'
                onClick={() => {
                  const element = document.getElementById('recruitmentForm');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                Jelentkezem az állásra!
                <Box
                  bg={'light'}
                  h={'47px'}
                  w={'47px'}
                  rounded='5px'
                  ml={4}
                  display={{ base: 'none', sm: 'flex' }}
                  alignItems='center'
                  justifyContent='center'>
                  <FaArrowDown color='dark' />
                </Box>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecruitmentHero;
