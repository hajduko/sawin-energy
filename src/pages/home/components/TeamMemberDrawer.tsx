import React from 'react';
import { Text, Avatar, Drawer, Portal, Grid, GridItem, Clipboard, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { ITeamMember } from './team';

export interface ITeamMemberDrawerProps {
  member: ITeamMember;
  children: React.ReactNode;
}

const TeamMemberDrawer = ({ member, children }: ITeamMemberDrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} size='md'>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body p={8}>
              <Grid
                templateAreas={{
                  base: `"avatar" "name" "bio"`,
                  md: `"avatar name" "bio bio"`,
                }}
                templateColumns={{ base: '1fr', md: '200px 1fr' }}
                gap={8}>
                <GridItem area='avatar' aspectRatio='1' w='200px'>
                  <Avatar.Root size='2xl' h='200px' w='200px'>
                    <Avatar.Image src={member.img} />
                    <Avatar.Fallback name={member.name} />
                  </Avatar.Root>
                </GridItem>
                <GridItem area='name' display='flex' flexDirection='column' alignItems='start' justifyContent='center'>
                  <Text fontWeight='600' fontSize='lg' mb={1}>
                    {member.name}
                  </Text>
                  <Text color='primary' fontSize='md' mb={2}>
                    {member.role}
                  </Text>
                  {member.email && (
                    <Clipboard.Root value={member.email}>
                      <Clipboard.Trigger asChild>
                        <Link fontSize='md' color='gray.500'>
                          <Clipboard.ValueText />
                          <Clipboard.Indicator />
                        </Link>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  )}
                </GridItem>
                <GridItem area='bio'>
                  <Text>
                    {member.bio?.map((paragraph) => (
                      <Text textAlign='justify'>{paragraph}</Text>
                    ))}
                  </Text>
                </GridItem>
              </Grid>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default TeamMemberDrawer;
