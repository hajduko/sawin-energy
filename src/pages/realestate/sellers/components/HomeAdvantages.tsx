import { Box, Flex, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';

import gyorsabb from '../../../../assets/images/realestate/gyorsabb.svg';
import kenyelmes from '../../../../assets/images/realestate/kenyelmes.svg';
import premiumar from '../../../../assets/images/realestate/premiumar.svg';
import atlagon from '../../../../assets/images/realestate/atlagon.svg';

const HomeAdvantages = () => {
  const cards = [
    {
      title: 'Gyors',
      description: 'Ingatlanod a nagyobb kereslet miatt gyorsabban talál vevőre.',
      icon: gyorsabb,
    },
    {
      title: 'Kényelmes',
      description: 'Mindent mi intézünk, a tervezéstől az eladásig.',
      icon: kenyelmes,
    },
    {
      title: 'Prémium ár',
      description: 'Modernizált ingatlanod komoly ár prémiummal tudod értékesíteni.',
      icon: premiumar,
    },
    {
      title: 'Feltűnő',
      description: 'Az ingatlanod ki fog tűnni ingatlan piacon rekedt átlagos ingatlanok közül.',
      icon: atlagon,
    },
  ];

  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Előnyök
        </Heading>
        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600' mb={6}>
          A SaWin világában az Ingatlan nemcsak <br />
          otthon, hanem értékálló befektetés is!
        </Heading>
        <Text
          fontSize='xl'
          fontWeight='500'
          textAlign={{ base: 'center', md: 'center' }}
          maxWidth='922px'
          mx='auto'
          mb={{ base: 6, lg: 10 }}>
          Szolgáltatásunknak számos előnye van, melyeket te is ki tudsz használni, ha úgy döntesz minket bízol meg
          ingatlanod értékesítésével
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {cards.map((card) => (
            <Flex key={card.title} bg='dark' w='full' h='10rem' rounded='20px' p={6} align='center' justify='left'>
              <Image src={card.icon} alt={card.title} boxSize='80px' />
              <Flex flexDir='column' ml={6}>
                <Heading as='h4' size='5xl' color='accent' mb={2}>
                  {card.title}
                </Heading>
                <Text fontSize='md' color='white' lineHeight='1.5'>
                  {card.description}
                </Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default HomeAdvantages;
