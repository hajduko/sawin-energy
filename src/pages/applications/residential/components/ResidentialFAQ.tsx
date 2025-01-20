import { Accordion, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import faq_minus from '../../../../assets/icons/faq_minus.svg';
import faq_plus from '../../../../assets/icons/faq_plus.svg';

const ResidentialFAQ = () => {
  const faqs = [
    {
      id: '0',
      question: 'Mi történik a meglévő gázkazánommal?',
      eoft: 'asdfasdfasdfasdfwerljchjmskdfhglkjhdgjkhsdfkgvmsdfngjkfdkjghfgjhsdflkjgh',
      voft: 'asdffffffffffffffffffffffasdfasdfasdfasdfsdfghertnzberteimkjvdrhgvkjshlk',
    },
    {
      id: '1',
      question: 'Mi történik a meglévő gázkazánommal?',
      eoft: '',
      voft: '',
    },
    {
      id: '2',
      question: 'Mi történik a meglévő gázkazánommal?',
      eoft: '',
      voft: '',
    },
    {
      id: '3',
      question: 'Mi történik a meglévő gázkazánommal?',
      eoft: '',
      voft: '',
    },
  ];
  return (
    <Flex bg='#ebedf0' justify='center' id='faq'>
      <Box w={{ base: '95%', md: '48rem' }} mt={10} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Gyakran ismételt kérdések
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' mb={6}>
          Pályázati tudástár
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
                <Text fontSize='xl' fontWeight='500' color='black' textAlign='left'>
                  {item.question}
                </Text>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody pl={9} pr={9} fontSize='md' color='#475467'>
                  <Box borderColor='primary' borderWidth={2} borderRadius='20px' padding={6} mb={6}>
                    <Heading color='black' mb={2}>
                      EOFT
                    </Heading>
                    <Text>{item.eoft}</Text>
                  </Box>

                  <Box borderColor='primary' borderWidth={2} borderRadius='20px' padding={6}>
                    <Heading color='black' mb={2}>
                      VOFT
                    </Heading>
                    <Text>{item.voft}</Text>
                  </Box>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Flex>
  );
};

export default ResidentialFAQ;
