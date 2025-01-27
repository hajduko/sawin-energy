import { Stack } from '@chakra-ui/react';
import { menus } from '../menu';
import NavItemWithChildren from './NavItemWithChildren';
import NavItemNoChildren from './NavItemNoChildren';

const MobileNav = () => {
  return (
    <Stack gap={4} p={4} align='center' display={{ base: 'flex', md: 'none' }} bgColor='light'>
      {menus.map((menu) =>
        menu.children && menu.children.length > 0 ? (
          <NavItemWithChildren key={menu.name} menu={menu} />
        ) : (
          <NavItemNoChildren key={menu.name} menu={menu} />
        )
      )}
    </Stack>
  );
};

export default MobileNav;
