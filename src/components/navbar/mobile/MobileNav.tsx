import { useContext } from 'react';
import { Stack } from '@chakra-ui/react';
import NavItemWithChildren from './NavItemWithChildren';
import NavItemNoChildren from './NavItemNoChildren';
import {
  MenuContext,
  HeatpumpMenuContext,
  IsolationMenuContext,
  RealestateMenuContext,
} from '../../../api/contexts/MenuContext';

const MobileNav = () => {
  const menu = useContext(MenuContext).filter((item) => item.available);

  const heatpumpMenu = useContext(HeatpumpMenuContext).filter((item) => item.available);

  const isolationMenu = useContext(IsolationMenuContext).filter((item) => item.available);

  const realestateMenu = useContext(RealestateMenuContext).filter((item) => item.available);

  let currentMenu;

  if (window.location.pathname.startsWith('/hoszivattyu')) {
    currentMenu = heatpumpMenu;
  } else if (window.location.pathname.startsWith('/hoszigeteles')) {
    currentMenu = isolationMenu;
  } else if (window.location.pathname.startsWith('/ingatlan')) {
    currentMenu = realestateMenu;
  } else {
    currentMenu = menu;
  }

  return (
    <Stack gap={4} p={4} align='center' display={{ base: 'flex', md: 'none' }} bgColor='light'>
      {currentMenu.map((menu) =>
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
