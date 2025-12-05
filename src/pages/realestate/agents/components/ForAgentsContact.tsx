import { Box, Flex, Grid, GridItem, Heading, Text, Image, Input, Textarea } from '@chakra-ui/react';
import { Field } from '../../../../components/ui/field';
import { Button } from '../../../../components/ui/button';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { apiGatewayService, RealEstateFormData } from '../../../../util/configs/api.config';

import mission from '../../../../assets/images/realestate/mission.jpg';

interface Props {
  setFeedBackOpen: (value: boolean) => void;
}

const ForAgentsContact = ({ setFeedBackOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RealEstateFormData>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<RealEstateFormData> = async (data) => {
    setSubmitting(true);
    try {
      const response = await apiGatewayService.submitRealEstateForm(data);

      if (response.status === 200) {
        setFeedBackOpen(true);
      }
    } catch (error) {
      // Handle error
      console.error('Form submission failed:', error);
      alert('Hiba történt! Kérjük próbálja meg újra!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Flex bg='#ebedf0' justify='center' id='agentContact'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' fontWeight='600' color='primary' mb={2}>
          Kapcsolat
        </Heading>

        <Grid
          templateColumns={{
            base: '1fr',
            md: '60fr 55fr',
          }}
          gap={{ base: 0, md: 16 }}>
          <GridItem colSpan={1}>
            <Heading as='h3' size='5xl' fontWeight='600' color='black' mb={6} lineHeight={1.2}>
              Teremtsünk értéket közösen!
            </Heading>
            <Text fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='#475467' mb={8}>
              Ha prémium áron értékesítenéd korszerűtlen ingatlanodat, vagy már próbálkoztál az eladással, de a piacon
              ragadt a házad mindenképpen vedd fel velünk a kapcsolatot! Csomagjaink segítségével a te ingatlanodat is
              garantáltan az elérhető legmagasabb áron értékesítjük.
            </Text>
            <Image src={mission} rounded='20px' fit='cover' maxHeight='400px' width='100%' />
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize='md' textAlign={{ base: 'left', md: 'justify' }} color='#475467' mb={6}>
              Töltsd ki az űrlapot és szaktanácsadó kollégánk rövidesen felveszi veled a kapcsolatot.
            </Text>
            <Flex flexDirection='column' h='100%' minH='490px'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Field label='Név' pb={4}>
                  <Input
                    placeholder='Próba Péter'
                    h='44px'
                    bg='white'
                    {...register('name', { required: 'A név megadása kötelező!' })}
                  />
                  {errors.name && <Text color='red'>{errors.name.message}</Text>}
                </Field>

                <Field label='Email' pb={4}>
                  <Input
                    type='email'
                    placeholder='proba.peter@gmail.com'
                    h='44px'
                    bg='white'
                    {...register('email', { required: 'Az email-cím megadása kötelező!' })}
                  />
                  {errors.email && <Text color='red'>{errors.email.message}</Text>}
                </Field>

                <Field label='Telefonszám' pb={4}>
                  <Input
                    type='tel'
                    placeholder='+36 70 123 4567'
                    h='44px'
                    bg='white'
                    {...register('phone', { required: 'A telefonszám megadása kötelező!' })}
                  />
                  {errors.phone && <Text color='red'>{errors.phone.message}</Text>}
                </Field>

                <Field label='Eladó ingatlan irányítószáma' pb={4}>
                  <Input
                    type='number'
                    placeholder='1052'
                    h='44px'
                    bg='white'
                    {...register('postalCode', {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Field>

                <Field label='Üzenet' pb={4}>
                  <Textarea autoresize bg='white' {...register('me', {})} />
                  {errors.me && <Text color='red'>{errors.me.message}</Text>}
                </Field>

                <Button
                  size='2xl'
                  bg='primary'
                  w='full'
                  rounded={'8px'}
                  fontSize='lg'
                  fontWeight='600'
                  color='white'
                  type='submit'
                  loading={submitting}
                  loadingText='Küldés...'>
                  Eladom az ingatlanom
                </Button>
              </form>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ForAgentsContact;
