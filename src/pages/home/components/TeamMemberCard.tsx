import { Text, Avatar, VStack } from '@chakra-ui/react';
import TeamMemberDrawer from './TeamMemberDrawer';
import { ITeamMember } from './team';

const TeamMemberCard = (member: ITeamMember) => {
  return (
    <TeamMemberDrawer member={member}>
      <VStack
        p={4}
        bg='light'
        borderRadius='lg'
        minHeight='216px'
        _hover={{ shadow: '0px 0px 8px 2px rgba(0, 0, 0, 0.3)' }}
        cursor='pointer'>
        <Avatar.Root size='2xl' h='96px' w='96px' mb={3}>
          <Avatar.Image src={member.img} />
          <Avatar.Fallback name={member.name} />
        </Avatar.Root>

        <Text fontWeight='600' fontSize='lg' textAlign='center'>
          {member.name}
        </Text>
        <Text color='primary' fontSize='md' textAlign='center'>
          {member.role}
        </Text>
      </VStack>
    </TeamMemberDrawer>
  );
};

export default TeamMemberCard;
