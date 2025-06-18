import { useContext } from 'react';
import { Stack } from '@chakra-ui/react';
import NavItemWithChildren from './NavItemWithChildren';
import NavItemNoChildren from './NavItemNoChildren';
import { MenuContext } from '../../../api/contexts/MenuContext';

const DesktopNav = () => {
  const menu = useContext(MenuContext).filter((item) => item.available);

  return (
    <Stack direction='row' gap={8}>
      {menu.map((item) =>
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
