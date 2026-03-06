import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import TeamMemberCard from './TeamMemberCard';
import HighlightTeamMemberCard from './HighlightTeamMemberCard';

import { highlightTeamMembers, teamMembers } from './team';

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
      </Box>
    </Flex>
  );
};

export default HomeTeam;
