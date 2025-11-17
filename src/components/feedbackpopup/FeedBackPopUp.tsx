import { Flex, Image, Text } from '@chakra-ui/react';
import { DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot } from '../../components/ui/dialog';
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
            Sikeres jelentkezés!
          </DialogHeader>
          <Text textAlign='center' mb={4} fontSize='md'>
            <Text as='b'>Köszönjük,</Text> hogy regisztráltál ingyenes tanácsadásunkra. Személyes tanácsadód rövidesen
            felveszi veled a kapcsolatot a megadott elérhetőségeiden.
          </Text>
        </Flex>
        <DialogCloseTrigger rounded='full' />
      </DialogContent>
    </DialogRoot>
  );
};

export default Popup;
