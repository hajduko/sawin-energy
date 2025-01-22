import { Accordion, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import faq_minus from '../../../assets/icons/faq_minus.svg';
import faq_plus from '../../../assets/icons/faq_plus.svg';

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
      answer:
        'A hőszivattyú bármilyen időben képes melegvizet előállítani. Működése során mindíg előnyben részesíti a melegvíz készítést. Nyáron a hűtési funkcióról percek alatt automatikusan átáll melegvíz készítési funkcióra. Ehhez szükésges egy emelt hőcserélővel rendelkező, legalább 150 lieteres melegvíz tartály beépítése a rendszerbe. ',
    },
    {
      id: '2',
      question: 'Mekkora teljesítményű hőszivattyúra van szükségem?',
      answer:
        'A ház négyzetmétere alapján, vagy hasonló ökölszabályok szerint nem lehet hőszivattyút méretezni. A pontos méretezéshez mérnöki pontosságú hőszükséglet és hőterhelés számítást kell végezni az ingatlan összes hőtani paramétere alapján. Ezt a számítást kell a kiválasztott berendezés működési és üzemi paramétereihez illeszteni. ',
    },
    {
      id: '3',
      question: 'Mikor van szükségem a H tarifára?',
      answer:
        'Hacsak nincsen már meglévő szaldós szolár rendszer, akkor mindenképpen érdemnes és megtérülő beruházás a H tarifás mérőóra kialakítása. H tarifán a fűtési időszakban 26ft/kW kedvezményes áron működtethetjük a hőszivattyút, ami jelentős megtakarítást eredményez. A H-tartifás mérőhely kiépítéséhez arra jogosult villanyszerelőinkkel külön ajánlatot adunk. Az ár szolgáltatónként és a jelenlegi villanyóra elhelyezésétől függően változik.',
    },
  ];
  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', md: '48rem' }} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Gyakran ismételt kérdések
        </Heading>
        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600' mb={6}>
          Hőszivattyú tudástár
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
                  <Image src={faq_plus} minW='24px' />
                </Accordion.ItemIndicator>
                <Accordion.ItemIndicator display={{ base: 'none', _open: 'block' }}>
                  <Image src={faq_minus} minW='24px' />
                </Accordion.ItemIndicator>
                <Text fontSize={{ base: 'lg', sm: 'xl' }} fontWeight='500' color='black' textAlign='left'>
                  {item.question}
                </Text>
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
