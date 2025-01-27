import { Text } from '@chakra-ui/react';
import { Menu } from '../menu';
import LinkComponent from '../LinkComponent';

type Props = {
  menu: Menu;
};

const NavItemNoChildren = ({ menu }: Props) => {
  return (
    <LinkComponent url={menu.url} external={menu.external} target={menu.target}>
      <Text
        color='dark'
        _hover={{
          color: 'primary',
        }}
        fontSize='xl'
        fontWeight={location.pathname === menu.url ? '700' : '400'}>
        {menu.name}
      </Text>
    </LinkComponent>
  );
};

export default NavItemNoChildren;
