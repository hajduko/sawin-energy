import { Box, Text, VStack, Avatar } from '@chakra-ui/react';
import TeamMemberDrawer from './TeamMemberDrawer';
import { IHighlightTeamMember } from './team';

const HighlightTeamMemberCard = (member: IHighlightTeamMember) => {
  return (
    <TeamMemberDrawer member={member}>
      <VStack
        minH='320px'
        p={4}
        bg='light'
        borderRadius='lg'
        align='center'
        justify='center'
        textAlign='center'
        cursor='pointer'
        gap={3}>
        <Avatar.Root size='2xl' h='96px' w='96px' mb={3}>
          <Avatar.Image src={member.img} />
          <Avatar.Fallback name={member.name} />
        </Avatar.Root>
        <Text fontWeight='600' fontSize='lg'>
          {member.name}
        </Text>
        <Text color='primary' fontSize='md'>
          {member.role}
        </Text>
        <Text mt={2} color='gray.800' fontSize='sm' hyphens='auto' textAlign='center' w={{ base: '100%', md: '75%' }}>
          <em>"{member.quote}"</em>
        </Text>
      </VStack>
    </TeamMemberDrawer>
  );
};

export default HighlightTeamMemberCard;
