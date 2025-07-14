import { IMenuItem } from '../../../util/menu';
import { useDisclosure, Text, Collapsible, Stack, Box, HStack } from '@chakra-ui/react';
import LinkComponent from '../LinkComponent';
import { FaChevronDown } from 'react-icons/fa';

type Props = {
  menu: IMenuItem;
};

const NavItemWithChildren = ({ menu }: Props) => {
  const { open, onToggle } = useDisclosure();

  return (
    <>
      <Box mt={0} onClick={onToggle}>
        <LinkComponent url={menu.url} external={menu.external} target={menu.target} hasChildren>
          <HStack gap={4} justify='center' align='center'>
            <Text
              color='dark'
              textAlign='center'
              fontSize='xl'
              fontWeight={location.pathname === menu.url ? '700' : '400'}>
              {menu.name}
            </Text>
            <FaChevronDown />
          </HStack>
        </LinkComponent>
      </Box>
      <Collapsible.Root width='100%' bgColor='#ebedf0' rounded='xl' open={open} p={2} display={open ? 'block' : 'none'}>
        <Collapsible.Content>
          <Stack gap={4} align='center'>
            {menu.children?.map((child) => (
              <LinkComponent key={child.name} url={child.url} external={child.external} target={child.target}>
                <Text color='dark' textAlign='center' fontSize='xl'>
                  {child.name}
                </Text>
              </LinkComponent>
            ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
};

export default NavItemWithChildren;
