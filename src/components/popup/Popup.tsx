import { Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot } from '../../components/ui/dialog';
import { Field } from '../../components/ui/field';
import { Checkbox } from '../../components/ui/checkbox';
import { Link } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import popup from '../../assets/images/popup.png';
import logo from '../../assets/sawin.svg';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  acceptPrivacy: boolean;
}

const Popup = ({ open, setOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert('Form submitted!');
    console.log(data);
  };

  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} size='xl' scrollBehavior='inside'>
      <DialogContent p={6} rounded='3xl'>
        <Image src={popup}></Image>
        <Flex flexDirection='column' width='545px' mx='auto' align='center' pt={6}>
          <Image src={logo} height='23px' fit='contain' />
          <DialogHeader textAlign='center' fontSize='3xl' fontWeight='600'>
            Teremtsünk értéket közösen!
          </DialogHeader>
          <Text textAlign='center' mb={4} fontSize='md'>
            Kérjük add meg pár adatod, hogy felvehessük veled a kapcsolatot és megbeszéljük a tanácsadás részleteit és
            időpontját.
          </Text>
        </Flex>
        <DialogBody p={0}>
          <Flex flexDirection='column' width='393px' mx='auto' align='center' pt={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field label='Név' pb={4}>
                <Input
                  placeholder='Gipsz Jakab'
                  h='44px'
                  {...register('name', { required: 'A név megadása kötelező!' })}
                />
                {errors.name && <Text color='red'>{errors.name.message}</Text>}
              </Field>

              <Field label='Email' pb={4}>
                <Input
                  type='email'
                  placeholder='gipsz.jakab@gmail.com'
                  h='44px'
                  {...register('email', { required: 'Az email-cím megadása kötelező!' })}
                />
                {errors.email && <Text color='red'>{errors.email.message}</Text>}
              </Field>

              <Field label='Telefonszám' pb={4}>
                <Input
                  type='tel'
                  placeholder='+36 70 123 4567'
                  h='44px'
                  {...register('phone', { required: 'A telefonszám megadása kötelező!' })}
                />
                {errors.phone && <Text color='red'>{errors.phone.message}</Text>}
              </Field>

              <Field label='Irányítószám' pb={4}>
                <Input
                  type='number'
                  placeholder='1052'
                  h='44px'
                  {...register('postalCode', {
                    maxLength: 4,
                    minLength: 4,
                  })}
                />
              </Field>

              <Checkbox
                mb={4}
                {...register('acceptPrivacy', {
                  required: 'El kell fogadnod az adatvédelmi nyilatkozatot!',
                })}>
                <Text fontSize='12px'>
                  Az adataid védelme fontos számunkra! Kérjük fogadd el{' '}
                  <Text as='span' color='teal.500'>
                    <Link to='/privacy'>az adatvédelmi nyilatkozatunkban</Link>
                  </Text>{' '}
                  foglalt feltételeket.{' '}
                  <Text as='span' color='red'>
                    *
                  </Text>
                </Text>
              </Checkbox>
              {errors.acceptPrivacy && <Text color='red'>{errors.acceptPrivacy.message}</Text>}

              <Button
                size='2xl'
                bg='primary'
                w='full'
                rounded={'8px'}
                fontSize='lg'
                fontWeight='600'
                color='white'
                type='submit'>
                Jelentkezem a tanácsadásra!
              </Button>
            </form>
          </Flex>
        </DialogBody>
        <DialogCloseTrigger top='0' insetEnd='-12' bg='bg' rounded='full' />
      </DialogContent>
    </DialogRoot>
  );
};

export default Popup;
