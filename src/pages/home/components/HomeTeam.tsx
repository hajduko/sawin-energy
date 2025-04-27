import { Box, Flex, Heading, SimpleGrid, VStack, Text, Em, Avatar } from '@chakra-ui/react';

import tomi from '../../../assets/images/home/team/tomi3.png';
import dave from '../../../assets/images/home/team/dave.jpg';
import gabi from '../../../assets/images/home/team/gabi.jpg';
import kolos from '../../../assets/images/home/team/kolos.jpg';
import laci from '../../../assets/images/home/team/laci.png';
import mahan from '../../../assets/images/home/team/mahan.jpg';
import marcus from '../../../assets/images/home/team/marcus.jpg';
import moni from '../../../assets/images/home/team/moni.jpg';

const HomeTeam = () => {
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Csapatunk
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' lineHeight='short' mb={6}>
          Egy jó berendezés csak félsiker!
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 1 }} gap={6} mb={8}>
          {[
            {
              name: 'Dr. Jakab Tamás',
              role: 'Alapító',
              img: tomi,
              quote:
                'A mi Impact üzletünkben a társadalmi és környezeti hasznosság és a profit kéz a kézben járnak. Nem a GDP, hanem a GNH, az Össznemzeti Boldogság indexét akarjuk növelni.',
            },
          ].map((highlight) => (
            <VStack key={highlight.name} minH='287px' p={6} bg='light' borderRadius='lg' align='center'>
              <Avatar.Root size='2xl' h='96px' w='96px' mb={3}>
                <Avatar.Image src={highlight.img} />
              </Avatar.Root>
              <Text fontWeight='600' fontSize='lg'>
                {highlight.name}
              </Text>
              <Text color='primary' fontSize='md'>
                {highlight.role}
              </Text>
              <Text
                mt={2}
                color='gray.800'
                fontSize='sm'
                hyphens='auto'
                textAlign='center'
                w={{ base: '100%', md: '75%' }}>
                <Em>"{highlight.quote}"</Em>
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={6}>
          {[
            { name: 'Horváth Márkus', role: 'Ügyvezető, operatív vezető', img: marcus },
            { name: 'Jakab Dávid', role: 'Cégvezető, műszaki vezető', img: dave },
            { name: 'Kovács László', role: 'Értékesítési vezető', img: laci },
            { name: 'Fodor Mónika', role: 'Tanácsadási vezető', img: moni },
            { name: 'Mahan Shafiei', role: 'Felülvizsgálat és fejlesztés', img: mahan },
            { name: 'Hajdu Kolos', role: 'Szoftverfejlesztés', img: kolos },
            { name: 'Konkolyi Péter', role: 'Építész szakág' },
            { name: 'Vesztergom Gábor', role: 'Gépészeti szakág', img: gabi },
          ].map((member) => (
            <VStack key={member.name} p={4} bg='light' borderRadius='lg' minHeight='216px'>
              <Avatar.Root size='2xl' h='96px' w='96px' mb={3}>
                <Avatar.Image src={member.img} />
              </Avatar.Root>

              <Text fontWeight='600' fontSize='lg' textAlign='center'>
                {member.name}
              </Text>
              <Text color='primary' fontSize='md' textAlign='center'>
                {member.role}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default HomeTeam;
