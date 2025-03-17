import { Flex, Image, Text } from '@chakra-ui/react';
import { DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot } from '../ui/dialog';
import logo from '../../assets/sawin.svg';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Popup = ({ open, setOpen }: Props) => {
  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} size='lg' placement='center'>
      <DialogContent p={6} rounded='3xl'>
        <Flex flexDirection='column' maxWidth='545px' mx='auto' align='center' pt={6}>
          <Image src={logo} height='23px' fit='contain' />
          <DialogHeader textAlign='center' fontSize='3xl' fontWeight='600' lineHeight={1.2}>
            Köszönjük a jelentkezésedet!
          </DialogHeader>
          <Text textAlign='center' mb={4} fontSize='md'>
            <Text as='b'>Örülünk,</Text> hogy szívesen csatlakoznál a csapatunkhoz!
          </Text>
          <Text textAlign='center' mb={4} fontSize='md'>
            Kollégánk rövidesen felveszi veled a kapcsolatot, hogy megismerd a részleteket.
          </Text>
        </Flex>
        <DialogCloseTrigger rounded='full' />
      </DialogContent>
    </DialogRoot>
  );
};

export default Popup;
