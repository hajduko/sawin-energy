import { Stack } from '@chakra-ui/react';
import { menu } from '../../../util/menu';
import NavItemWithChildren from './NavItemWithChildren';
import NavItemNoChildren from './NavItemNoChildren';

const MobileNav = () => {
  return (
    <Stack gap={4} p={4} align='center' display={{ base: 'flex', md: 'none' }} bgColor='light'>
      {menu.map((menu) =>
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
