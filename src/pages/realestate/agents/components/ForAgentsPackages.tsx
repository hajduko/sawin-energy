import { Box, Flex, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';

import key from '../../../../assets/icons/key.svg';
import clipboard from '../../../../assets/icons/clipboard.svg';

const ForAgentsPackages = () => {
  const cards = [
    {
      title: 'Kulcsrakész csomag',
      description: 'Ingatlanod a nagyobb kereslet miatt gyorsabban talál vevőre.',
      icon: key,
    },
    {
      title: 'Terv csomag',
      description: 'Mindent mi intézünk, a tervezéstől az eladásig.',
      icon: clipboard,
    },
    {
      title: 'Finanszírozás csomag',
      description: 'Modernizált ingatlanod komoly ár prémiummal tudod értékesíteni.',
      icon: key,
    },
  ];

  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={{ base: 12, md: 20 }} mb={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' fontWeight='600' color='primary' mb={2}>
          Csomagok
        </Heading>
        <Heading as='h3' size='5xl' fontWeight='600' color='black' mb={6} lineHeight={1.2}>
          Mit fizetünk?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {cards.map((card) => (
            <Flex
              key={card.title}
              flexDir='column'
              bg='dark'
              w='full'
              rounded='20px'
              p={6}
              align='center'
              justify='left'>
              <Image src={card.icon} alt={card.title} boxSize='80px' mb={2} />
              <Heading as='h4' size='3xl' color='accent' textAlign='center' mb={2}>
                {card.title}
              </Heading>
              <Text fontSize='md' color='white' textAlign='center' lineHeight='1.5'>
                {card.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default ForAgentsPackages;
