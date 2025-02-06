import { Box, Flex, Heading, Text, Input, Textarea } from '@chakra-ui/react';
import { Field } from '../../../components/ui/field';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { apiGatewayService, RecruitmentFormData } from '../../../util/configs/api.config';

const RecruitmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecruitmentFormData>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<RecruitmentFormData> = async (data) => {
    setSubmitting(true);
    try {
      const response = await apiGatewayService.submitRecruitmentForm(data);

      if (response.status === 200) {
        alert('Sikeresen elküldve!');
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
    <Flex bg='#ebedf0' justify='center' id='recruitmentForm'>
      <Box w={{ base: '95%', lg: '46rem' }} mt={20} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Jelentkezés
        </Heading>
        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600' mb={6}>
          Jelentkezz és dolgozzunk együtt!
        </Heading>

        <Box bgColor='white' rounded='2xl' p={6}>
          <Flex flexDirection='column' h='100%' minH='490px'>
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

              <Field label='Bemutatkozás' pb={4}>
                <Textarea autoresize {...register('me', { required: 'A bemutatkozás megírása kötelező!' })} />
                {errors.me && <Text color='red'>{errors.me.message}</Text>}
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
                type='submit'
                loading={submitting}
                loadingText='Küldés...'>
                Jelentkezem az állásra!
              </Button>
            </form>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default RecruitmentForm;
