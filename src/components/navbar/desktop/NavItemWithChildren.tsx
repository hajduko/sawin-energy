import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { HoverCardContent, HoverCardRoot, HoverCardTrigger } from '../../ui/hover-card';
import { FaChevronDown } from 'react-icons/fa';
import { Menu } from '../../../util/menu';
import ChildNavItem from './ChildNavItem';

type Props = {
  menu: Menu;
};

const NavItemWithChildren = ({ menu }: Props) => {
  return (
    <Box>
      <HoverCardRoot size='sm' openDelay={0} closeDelay={100}>
        <HoverCardTrigger asChild cursor='default'>
          <HStack
            color='dark'
            _hover={{
              textDecoration: 'none',
              color: 'primary',
            }}>
            <Text fontSize='xl' fontWeight={location.pathname === menu.url ? '700' : '400'}>
              {menu.name}
            </Text>
            <FaChevronDown />
          </HStack>
        </HoverCardTrigger>
        <HoverCardContent mt={4} bgColor='light'>
          <Stack gap='6' p='2'>
            {menu.children?.map((child) => (
              <ChildNavItem key={child.name} {...child} />
            ))}
          </Stack>
        </HoverCardContent>
      </HoverCardRoot>
    </Box>
  );
};

export default NavItemWithChildren;
