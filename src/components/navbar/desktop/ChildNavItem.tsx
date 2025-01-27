import { Text } from '@chakra-ui/react';
import { Menu } from '../menu';
import LinkComponent from '../LinkComponent';

const ChildNavItem = ({ name, url, external, target }: Menu) => {
  return (
    <LinkComponent url={url} external={external} target={target}>
      <Text
        color='dark'
        _hover={{
          color: 'primary',
        }}
        fontSize='xl'>
        {name}
      </Text>
    </LinkComponent>
  );
};

export default ChildNavItem;
