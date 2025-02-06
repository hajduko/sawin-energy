import { Box, Flex, Grid, GridItem, Heading, Image, Card, Text, Tabs, Separator } from '@chakra-ui/react';
import { HoverCardContent, HoverCardRoot, HoverCardTrigger, HoverCardArrow } from '../../../components/ui/hover-card';

import solar from '../../../assets/images/home/solar.jpg';
import heatpump from '../../../assets/images/home/heatpump.png';
import insulation from '../../../assets/images/home/insulation.jpeg';
import ecar from '../../../assets/images/home/ecar.jpg';

import lightning_green from '../../../assets/icons/lightning_green.svg';
import settings_outline from '../../../assets/icons/settings-outline-green.svg';
import home_outline from '../../../assets/icons/home-outline-green.svg';
import car from '../../../assets/icons/car.svg';

import huawei from '../../../assets/images/home/Huawei logo.png';

import olimpia from '../../../assets/images/home/Olimpia.png';
import phnix from '../../../assets/images/home/PHNIX.png';
import raygex from '../../../assets/images/home/Raygex.png';

import isover from '../../../assets/images/home/Isover.png';

import wallbox from '../../../assets/images/home/Wallbox.png';
import gewiss from '../../../assets/images/home/Gewiss.png';

const HomeServices = () => {
  const services = [
    {
      title: 'Napelemes rendszerek',
      value: 'solar',
      icon: lightning_green,
      img: solar,
      cards: [
        {
          title: 'Visszwattos napelemes rendszerek',
          subtitle: 'Csökkentsd az energiafüggőségedet!',
          description:
            'Függetlenedj a folyamatosan változó energiaáraktól a nap segítségével! Egy pontosan méretezett napelemes rendszerrel a fogyasztásod nagyrészét kiválthatod!',
        },
        {
          title: 'Akkumulátoros rendszerek',
          subtitle: 'Maximalizáld a megtakarításod!',
          description:
            'Legyen egy napelemes rendszer otthonod vagy üzemed energiatermelő központja. Így fűthetsz, hűthetsz vagy autót is tölthetsz a nappal!',
        },
      ],
      brands: [
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
    {
      title: 'Hőszivattyús rendszerek',
      value: 'heatpump',
      icon: settings_outline,
      img: heatpump,
      cards: [
        {
          title: 'Lakossági és ipari hőszivattyúk',
          subtitle: 'Lépj le a gázról!',
          description:
            'Hűts és fűts modern hőszivattyúval és szabadulj meg a gázszámlától örökre. Kínálatunkban lakossági monoblock hőszivattyúk és ipari méretű berendezések is elérhetők.',
        },
        {
          title: 'Teljeskörű szerviz és garancia',
          subtitle: 'Garantált biztonság!',
          description:
            'Termékeink hivatalos szervizeként biztosítjuk számodra a gyors probléma megoldást és személyre szabott garanciális feltételeket. Így tényleg biztonságban érezheted magad!',
        },
      ],
      brands: [
        {
          name: 'Olimpia Splendid teljes portfólió',
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
      title: 'Hőmegtartó beruházások',
      value: 'insulation',
      icon: home_outline,
      img: insulation,
      cards: [
        {
          title: 'Ingatlanok hőszigetelése',
          subtitle: 'A legolcsóbb energia az, amit nem használsz fel!',
          description:
            'Minden energetikailag modern ingatlan kulcsa, hogy a lehető legtöbb hőt tudja megtartani. Az ingatlanok legnagyobb határoló felületei a külső falak és a födém, így ezek megfelelő szigetelése nélkül egy ingatlant sem lehet energetikailag modernné tenni.',
        },
        {
          title: 'Nyílászáró beépítés',
          subtitle: 'Minden nyílászáró egy potenciális hőhíd!',
          description:
            'Egy régi ingatlan legsebezhetőbb pontja a régi nyílászáróknál található, ezért azok cseréje szinte mindíg indokolt, míg új építéskor nem szabad kockáztatni, hiszen egy modern otthon csak energiatakarékos nyílászárókkal készülhet!',
        },
      ],
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
      title: 'Elektromos autó',
      value: 'ecar',
      icon: car,
      img: ecar,
      cards: [
        {
          title: 'Elektromos autótöltők',
          subtitle: 'Töltsd elektromos autód Otthon!',
          description:
            'Élvezd az olcsó otthontöltés minden kényelmét! A szükséges áramot napelemmel is megtermelheted, így ingyen „tankolhatsz” a nap segítségével!',
        },
        {
          title: 'EV tartósbérlet',
          subtitle: 'Válts elektromos autóra könnyedén!',
          description:
            'Vegyél tartósbérletbe használt elektromos autót és használd ki, hogy konstrukciónkban a bérlet lejártakor megvásárolhatod a járművet. Céges partnerünkként lehetőséged van áfa visszaigénylésre is.',
        },
      ],
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
      ],
    },
  ];

  return (
    <Flex bg='#ebedf0' justify='center' id='#services'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={{ base: 12, md: 20 }} mb={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Szolgáltatások
        </Heading>
        <Heading
          as='h3'
          size={{ base: '4xl', sm: '5xl' }}
          textAlign='center'
          fontWeight='600'
          lineHeight='short'
          mb={{ base: 8, md: 16 }}>
          Szabadulj ki a Rezsicsapdából
          <br />
          megoldásainkkal
        </Heading>

        <Tabs.Root
          defaultValue='solar'
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

          <Box minHeight='694px' width='full'>
            {services.map((service) => (
              <Tabs.Content
                key={service.value}
                value={service.value}
                _open={{
                  animationName: 'fade-in, scale-in',
                  animationDuration: '300ms',
                }}>
                <Grid
                  templateColumns={{
                    base: '1fr',
                    md: '1fr 1fr',
                  }}
                  mt={8}
                  gap={6}>
                  {service.cards.map((card) => (
                    <GridItem key={card.subtitle} colSpan={1}>
                      <Card.Root width='100%' minHeight='230px' h='100%' rounded='20px'>
                        <Card.Body>
                          <Flex>
                            <Image src={service.icon} height='24px' width='24px' fit='contain' mr={4} />
                            <Text color='primary'>{card.title}</Text>
                          </Flex>
                        </Card.Body>
                        <Card.Footer flexDirection='column' alignItems='flex-start'>
                          <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                            {card.subtitle}
                          </Card.Title>
                          <Card.Description fontSize='md' color='#475467'>
                            {card.description}
                          </Card.Description>
                        </Card.Footer>
                      </Card.Root>
                    </GridItem>
                  ))}
                </Grid>
                <Heading
                  as='h3'
                  size={{ base: '3xl', sm: '4xl' }}
                  textAlign='center'
                  fontWeight='600'
                  lineHeight='short'
                  mt={4}>
                  Termékeink
                </Heading>
                <Flex w='full' justify='center' gap={6} mt={4}>
                  {service.brands.map((brand) => (
                    <HoverCardRoot size='sm' openDelay={0} closeDelay={100} key={brand.name}>
                      <HoverCardTrigger asChild cursor='default'>
                        <Flex
                          bg='white'
                          aspectRatio={1}
                          w='full'
                          maxW='224px'
                          align='center'
                          justify='center'
                          rounded='20px'
                          p={2}>
                          <Image src={brand.img} h='full' aspectRatio={1} fit='contain' />
                        </Flex>
                      </HoverCardTrigger>
                      <HoverCardContent bgColor='white'>
                        <HoverCardArrow />
                        <Text fontSize='lg' fontWeight='600' mb={2} textAlign='center'>
                          {brand.name}
                        </Text>
                        <Text fontSize='md' color='#475467' textAlign='center'>
                          {brand.position}
                        </Text>
                      </HoverCardContent>
                    </HoverCardRoot>
                  ))}
                </Flex>
                <Image src={service.img} mt={12} rounded='20px' fit='cover' height='400px' width='100%' />
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
                p={0}>
                <Grid
                  templateColumns={{
                    base: '1fr',
                    md: '1fr 1fr',
                  }}
                  mt={8}
                  gap={6}>
                  {service.cards.map((card) => (
                    <GridItem key={card.subtitle} colSpan={1}>
                      <Card.Root width='100%' minHeight='230px' h='100%' rounded='20px'>
                        <Card.Body>
                          <Flex>
                            <Image src={service.icon} height='24px' width='24px' fit='contain' mr={4} />
                            <Text color='primary'>{card.title}</Text>
                          </Flex>
                        </Card.Body>
                        <Card.Footer flexDirection='column' alignItems='flex-start'>
                          <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                            {card.subtitle}
                          </Card.Title>
                          <Card.Description fontSize='md' color='#475467'>
                            {card.description}
                          </Card.Description>
                        </Card.Footer>
                      </Card.Root>
                    </GridItem>
                  ))}
                </Grid>
                <Image src={service.img} mt={12} rounded='20px' fit='cover' height='400px' width='100%' />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Box>
    </Flex>
  );
};

export default HomeServices;
