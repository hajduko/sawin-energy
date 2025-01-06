import { Accordion, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import faq_minus from '../../../assets/faq_minus.svg';
import faq_plus from '../../../assets/faq_plus.svg';

const HeatPumpFAQ = () => {
  const faqs = [
    {
      id: '0',
      question: 'Mi történik a meglévő gázkazánommal?',
      answer:
        'Felújításnál, ha később még hőszigetelni is fogjuk a házat mindenképpen bent hagyjuk a gázkazánt, ami nagy hidegbe rásegít a fűtésre, mivel a hőszivattyú teljesítményét a költségek csökkentése érdekében a hőszigetelt állapotra méretezzük. Kérésre egyéb esetben is bent hagyjuk a meglévő gázkazánt, azonban ez műszakilag nem indokolt.',
    },
    {
      id: '1',
      question: 'Hogyan lesz melegvizem télen-nyáron?',
      answer: 'TODO',
    },
    {
      id: '2',
      question: 'Mekkora teljesítményű hőszivattyúra van szükségem?',
      answer: 'TODO',
    },
    {
      id: '3',
      question: 'Mikor van szükségem a H tarifára?',
      answer: 'TODO',
    },
  ];
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', md: '48rem' }} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          FAQ
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' mb={6}>
          Teremtsünk értéket közösen!
        </Heading>

        <Accordion.Root collapsible multiple size='lg' variant='plain' defaultValue={['0']}>
          {faqs.map((item) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              px={8}
              my={8}
              _open={{ bgColor: 'white', rounded: 'xl', p: 8 }}
              _last={{ mb: 0 }}>
              <Accordion.ItemTrigger>
                <Accordion.ItemIndicator display={{ base: 'block', _open: 'none' }}>
                  <Image src={faq_plus} h='24px' w='24px' />
                </Accordion.ItemIndicator>
                <Accordion.ItemIndicator display={{ base: 'none', _open: 'block' }}>
                  <Image src={faq_minus} h='24px' w='24px' />
                </Accordion.ItemIndicator>
                <Text fontSize='xl' fontWeight='500' color='black'>
                  {item.question}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody pl={9} fontSize='md' color='#475467'>
                  {item.answer}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Flex>
  );
};

export default HeatPumpFAQ;
