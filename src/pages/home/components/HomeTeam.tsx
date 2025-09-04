import { Box, Flex, Heading, SimpleGrid, Image } from '@chakra-ui/react';
import TeamMemberCard from './TeamMemberCard';
import HighlightTeamMemberCard from './HighlightTeamMemberCard';

import { highlightTeamMembers, teamMembers } from './team';

import org_chart from '../../../assets/images/home/org_chart.svg';

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

        <SimpleGrid columns={1} gap={6} mb={6}>
          {highlightTeamMembers.map((highlight) => (
            <HighlightTeamMemberCard key={highlight.name} {...highlight} />
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={6}>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </SimpleGrid>

        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary' mt={20}>
          Felépítésünk
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' lineHeight='short' mb={6}>
          Az értékteremtés szervezeti felépítése
        </Heading>

        <Flex w='full' align='center' justify='center' rounded='20px'>
          <Image src={org_chart} h='full' fit='contain' rounded='20px' />
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeTeam;
