import { Box, Flex, Heading, Image, Text, Tabs, Separator } from '@chakra-ui/react';

import isover from '../../../assets/images/home/Isover.png';

import olimpia from '../../../assets/images/home/Olimpia.png';
import phnix from '../../../assets/images/home/PHNIX.png';
import raygex from '../../../assets/images/home/Raygex.png';

import wallbox from '../../../assets/images/home/Wallbox.png';
import gewiss from '../../../assets/images/home/Gewiss.png';
import huawei from '../../../assets/images/home/Huawei logo.png';

const HomeProducts = () => {
  const services = [
    {
      title: 'Hőszigetelés',
      value: 'insulation',
      brands: [
        {
          name: 'St Gobain Isover/Weber/Rigips',
          position: '',
          img: isover,
        },
        {
          name: 'Sawin EaSy Facade',
          position: 'Kizárólagos telepítő',
          img: '',
        },
      ],
    },
    {
      title: 'Fűtés/hűtés',
      value: 'heatingcooling',
      brands: [
        {
          name: 'Olimpia Splendid teljes protfólió',
          position: 'Importőr, regionális forgalmazó és szervíz',
          img: olimpia,
        },
        {
          name: 'PHNIX Ipari/kereskedelmi hőszivattyúk',
          position: 'Importőr, regionális forgalmazó és szervíz',
          img: phnix,
        },
        {
          name: 'MasterTherm teljes portfólió',
          position: '',
          img: '',
        },
        {
          name: 'Raygex felületfűtési rendszerek',
          position: 'Importőr, regionális forgalmazó és szervíz',
          img: raygex,
        },
        {
          name: 'SaWin Hydroboxok és Melegvizes hőtároló rendszerek',
          position: 'Kizárólagos telepítő',
          img: '',
        },
      ],
    },
    {
      title: 'Napelem, E-töltő',
      value: 'solarecar',
      brands: [
        {
          name: 'Wallbox E-töltő',
          position: '',
          img: wallbox,
        },
        {
          name: 'Gewiss E-töltő',
          position: '',
          img: gewiss,
        },
        {
          name: 'Huawei',
          position: '',
          img: huawei,
        },
        {
          name: 'Deye',
          position: '',
          img: '',
        },
      ],
    },
  ];

  return (
    <Flex bg='#ebedf0' justify='center' id='#products'>
      <Box w={{ base: '95%', lg: '76rem' }} mb={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Termékeink
        </Heading>
        <Heading
          as='h3'
          size={{ base: '4xl', sm: '5xl' }}
          textAlign='center'
          fontWeight='600'
          lineHeight='short'
          mb={{ base: 8, md: 16 }}>
          Kiemelt márkáink, megoldásaink
        </Heading>

        <Tabs.Root
          defaultValue='insulation'
          variant='enclosed'
          fitted
          orientation='horizontal'
          display={{ base: 'none', md: 'block' }}>
          <Tabs.List>
            {services.map((service) => (
              <>
                <Tabs.Trigger
                  key={service.value}
                  value={service.value}
                  _selected={{ color: 'accent', bgColor: 'primary' }}
                  minH={{ base: 20, md: 12 }}>
                  {service.title}
                </Tabs.Trigger>
                <Separator
                  key={service.value + 'separator'}
                  orientation='vertical'
                  height='10'
                  size='md'
                  display={{ base: 'block', _last: 'none' }}
                  my='auto'
                  borderColor='gray.300'
                />
              </>
            ))}
          </Tabs.List>

          <Box minHeight='278px' width='full'>
            {services.map((service) => (
              <Tabs.Content
                key={service.value}
                value={service.value}
                _open={{
                  animationName: 'fade-in, scale-in',
                  animationDuration: '300ms',
                }}>
                <Flex minH='278px' w='full' justify='space-evenly' bg='white' rounded='20px' gap={4} p={6}>
                  {service.brands.map((brand) => (
                    <Flex key={brand.name} flex={1} flexDirection='column' alignItems='center'>
                      <Image src={brand.img} maxH='120px' fit='contain' />
                      <Text fontSize='xl' fontWeight='600' mb={2} textAlign='center'>
                        {brand.name}
                      </Text>
                      <Text fontSize='md' color='#475467' textAlign='center'>
                        {brand.position}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>

        <Tabs.Root
          defaultValue='solar'
          variant='enclosed'
          fitted
          orientation='vertical'
          display={{ base: 'block', md: 'none' }}>
          <Tabs.List>
            {services.map((service) => (
              <Tabs.Trigger
                key={service.value}
                value={service.value}
                _selected={{ color: 'accent', bgColor: 'primary' }}
                minH={{ base: 12 }}>
                {service.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box minHeight='694px' width='full'>
            {services.map((service) => (
              <Tabs.Content
                key={service.value}
                value={service.value}
                _open={{
                  animationName: 'fade-in, scale-in',
                  animationDuration: '300ms',
                }}
                p={0}></Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Box>
    </Flex>
  );
};

export default HomeProducts;
