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

        {/* Top Row: Team Members */}
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
          {[
            { name: 'Horváth Márkus', role: 'Operatív vezető' },
            { name: 'Vesztergom Gábor', role: 'Kivitelezési vezető' },
            { name: 'Mahan Shafiei', role: 'Gépész mérnök' },
            { name: 'Hajdu Kolos', role: 'Mérnökinformatikus' },
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

        {/* Bottom Row: Highlighted Members */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={8}>
          {[
            {
              name: 'Dr. Jakab Tamás',
              role: 'Cégvezető, alapító',
              quote:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
              name: 'Jakab Dávid',
              role: 'Értékesítési vezető',
              quote:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
              <Text mt={2} color='gray.800' fontSize='sm' hyphens='auto'>
                <Em>"{highlight.quote}"</Em>
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default HomeTeam;
