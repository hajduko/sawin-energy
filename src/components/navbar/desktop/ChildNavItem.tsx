import { Text } from '@chakra-ui/react';
import { IMenuItem } from '../../../util/menu';
import LinkComponent from '../LinkComponent';

const ChildNavItem = ({ name, url, external, target }: IMenuItem) => {
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
