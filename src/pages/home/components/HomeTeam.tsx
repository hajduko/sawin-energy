import { Box, Flex, Heading, SimpleGrid, VStack, Text, Em } from '@chakra-ui/react';
import { Avatar } from '../../../components/ui/avatar';

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
              role: 'Cégvezető, alapító',
              quote:
                'A mi Impact üzletünkben a társadalmi és környezeti hasznosság és a profit kéz a kézben járnak. Nem a GDP, hanem a GNH, az Össznemzeti Boldogság indexét akarjuk növelni.',
            },
          ].map((highlight, index) => (
            <VStack key={index} minH='287px' p={6} bg='light' borderRadius='lg' align='center'>
              <Avatar size='2xl' h='96px' w='96px' name={highlight.name} mb={3} />
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
            { name: 'Horváth Márkus', role: 'Ügyvezető, operatív vezető' },
            { name: 'Jakab Dávid', role: 'Tulajdonosi képviselő' },
            { name: 'Kovács László', role: 'Értékesítési vezető' },
            { name: 'Mahan Shafiei', role: 'Felülvizsgálat és fejlesztés' },
            { name: 'Hajdu Kolos', role: 'Szoftverfejlesztés' },
            { name: 'Konkolyi Péter', role: 'Építész szakág' },
            { name: 'Vesztergom Gábor', role: 'Gépészeti szakág' },
            { name: 'Jobbágy Norbert', role: 'Előgyártás' },
          ].map((member, index) => (
            <VStack key={index} p={4} bg='light' borderRadius='lg' minHeight='216px'>
              <Avatar size='2xl' h='96px' w='96px' name={member.name} mb={3} />
              <Text fontWeight='600' fontSize='lg'>
                {member.name}
              </Text>
              <Text color='primary' fontSize='md'>
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
