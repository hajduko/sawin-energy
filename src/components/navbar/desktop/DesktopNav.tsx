import { Stack } from '@chakra-ui/react';
import { menus } from '../menu';
import NavItemWithChildren from './NavItemWithChildren';
import NavItemNoChildren from './NavItemNoChildren';

const DesktopNav = () => {
  return (
    <Stack direction='row' gap={8}>
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

export default DesktopNav;
