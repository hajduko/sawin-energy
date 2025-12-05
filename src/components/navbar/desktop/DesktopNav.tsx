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

const DesktopNav = () => {
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
    <Stack direction='row' gap={8}>
      {currentMenu.map((item) =>
        item.children && item.children.length > 0 ? (
          <NavItemWithChildren key={item.name} menu={item} />
        ) : (
          <NavItemNoChildren key={item.name} menu={item} />
        )
      )}
    </Stack>
  );
};

export default DesktopNav;
