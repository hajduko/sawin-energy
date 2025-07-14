import { Text } from '@chakra-ui/react';
import { IMenuItem } from '../../../util/menu';
import LinkComponent from '../LinkComponent';

type Props = {
  menu: IMenuItem;
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
