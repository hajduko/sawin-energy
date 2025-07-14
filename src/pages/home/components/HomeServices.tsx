import { Box, Flex, Grid, GridItem, Heading, Image, Card, Text, Tabs, Separator, List } from '@chakra-ui/react';
import { HoverCardContent, HoverCardRoot, HoverCardTrigger, HoverCardArrow } from '../../../components/ui/hover-card';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from '../../../components/ui/drawer';
import React, { useState } from 'react';

import solar from '../../../assets/images/home/solar.jpg';
import heatpump from '../../../assets/images/home/heatpump.jpeg';
import insulation from '../../../assets/images/home/insulation.jpeg';
import ecar from '../../../assets/images/home/ecar.jpg';

import lightning_green from '../../../assets/icons/lightning_green.svg';
import settings_outline from '../../../assets/icons/settings-outline-green.svg';
import home_outline from '../../../assets/icons/home-outline-green.svg';
import car from '../../../assets/icons/car.svg';

import huawei from '../../../assets/images/home/Huawei logo.png';
import deye from '../../../assets/images/home/Deye.png';

import olimpia from '../../../assets/images/home/Olimpia.png';
import phnix from '../../../assets/images/home/PHNIX.png';
import mastertherm from '../../../assets/images/home/Mastertherm.png';
import raygex from '../../../assets/images/home/Raygex.png';
import effi from '../../../assets/images/home/Effi.png';

import isover from '../../../assets/images/home/Isover.png';
import weber from '../../../assets/images/home/Weber.svg';
import rigips from '../../../assets/images/home/Rigips.png';
import hilti from '../../../assets/images/home/Hilti.svg';
import sawin from '../../../assets/sawin_white.svg';

import wallbox from '../../../assets/images/home/Wallbox.png';
import gewiss from '../../../assets/images/home/Gewiss.png';

const HomeServices = () => {
  const [open, setOpen] = useState(false);

  const services = [
    {
      title: 'Napelemes rendszerek',
      value: 'solar',
      icon: lightning_green,
      img: solar,
      img_desc_1: '100kW szolár rendszer, energia tároló fogadására előkészítve',
      img_desc_2: 'Huawei inverter, DAH Solar napelem panelek',
      img_desc_3: 'Nádszeg, ipari park',
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
          position: 'Huawei inverterrel szerelt napelemes rendszerek',
          img: huawei,
          highlight: false,
        },
        {
          name: 'Deye',
          position: 'Deye inverterrel szerelt napelemes rendszerek energiatárolóval kiegészítve',
          img: deye,
          highlight: false,
        },
      ],
    },
    {
      title: 'Hőszivattyús rendszerek',
      value: 'heatpump',
      icon: settings_outline,
      img: heatpump,
      img_desc_1: '10kW hőszivattyú és melegvíz rendszer',
      img_desc_2: 'Olimpia Splendid S2E monoblock hőszivattyú',
      img_desc_3: 'Tényő, családi ház',
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
          name: 'Olimpia Splendid',
          position: 'Lakossági levegő-víz hőszivattyúk',
          img: olimpia,
          highlight: false,
        },
        {
          name: 'PHNIX',
          position: 'Levegő-víz hőszivattyúk, lakossági és ipari méretekben',
          img: phnix,
          highlight: false,
        },
        {
          name: 'MasterTherm',
          position: 'Levegő-víz és víz-víz hőszivattyúk, lakossági és ipari méretekben',
          img: mastertherm,
          highlight: false,
        },
        {
          name: 'Raygex',
          position: 'Lakossági és kereskedelmi fűtési és hűtési mennyezeti sugárzó rendszer',
          img: raygex,
          highlight: false,
        },
        {
          name: 'EFFI',
          position: 'Ipari és kereskedelmi fűtési és hűtési mennyezeti sugárzó rendszer',
          img: effi,
          highlight: false,
        },
      ],
    },
    {
      title: 'Hőmegtartó beruházások',
      value: 'insulation',
      icon: home_outline,
      img: insulation,
      img_desc_1: '15 cm utólagos homlokzati szigetelés',
      img_desc_2: 'SaWin Easy Facade átszellőztetett szigetelő rendszer',
      img_desc_3: 'Budapest 2. kerület, társasház',
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
          name: 'Saint-Gobain Isover',
          position: '',
          img: isover,
          highlight: false,
        },
        {
          name: 'Saint-Gobain Rigips',
          position: '',
          img: rigips,
          highlight: false,
        },
        {
          name: 'SaWin Easy Facade',
          position: 'További információért kattints!',
          img: sawin,
          highlight: true,
        },
        {
          name: 'Saint-Gobain Weber',
          position: '',
          img: weber,
          highlight: false,
        },
        {
          name: 'Hilti',
          position: 'Hilti függesztett homlokzati rendszer',
          img: hilti,
          highlight: false,
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
          position: 'Lakossági elektromos autó töltők',
          img: wallbox,
          highlight: false,
        },
        {
          name: 'Gewiss E-töltő',
          position: 'Kereskedelmi és társasházi elektromos autó töltő rendszerek',
          img: gewiss,
          highlight: false,
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

        <DrawerRoot open={open} size='md'>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Sawin Easy Facade</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Text mb={4}>
                Az Easy Facade a SaWin által, a St Gobain cégcsoport, a Rigips, az Isover és a Weber cégek termékei és
                technológiái felhasználásával kifejlesztett előtétfalas hőszigetelési rendszer. Hőszigetelési
                tulajdonságai az EPS rendszerekkel azonosak.
              </Text>
              <Text fontWeight='bold'>Fő előnyei</Text>
              <List.Root gap={1}>
                <List.Item>mechanikai tulajdonságai tökéletesek,</List.Item>
                <List.Item>A1 tűzvédelmi besorolású (a teljes rendszer),</List.Item>
                <List.Item>tökéletes felülettel és élekkel rendelkezik,</List.Item>
                <List.Item>
                  teljes mértékben száraz technológiával készül, ezért tiszta és hulladékmentes kivitelezést biztosít,
                </List.Item>
                <List.Item>
                  előre vágott/gyártott elemekkel is készülhet (társasházaknál és új építésnél ajánlott lidar
                  felméréssel és lézeres kitűzéssel),
                </List.Item>
                <List.Item>gyorsan (kb. fele annyi idő alatt) kivitelezhető,</List.Item>
                <List.Item>hidegben és nagy melegben is felrakható,</List.Item>
                <List.Item>felújítás esetén külön mechanikai és párazárást ad a meglévő falnak/vakolatnak,</List.Item>
                <List.Item>állványozás mentesen felrakható,</List.Item>
                <List.Item>
                  gipszkartonos és festő szakemberek végzik a kivitelezést, szükség szerint mérnöki kitűzéssel és
                  felügyelettel,
                </List.Item>
                <List.Item>
                  alapkivitelben mosható szilikonos festékkel minimálisan olcsóbb, mint a hagyományos EPS rendszerek,
                </List.Item>
                <List.Item>kérés esetén vékonyvakolattal is készülhet</List.Item>
                <List.Item>3 év teljeskörű rendszer garancia</List.Item>
              </List.Root>
            </DrawerBody>
            <DrawerCloseTrigger onClick={() => setOpen(false)} />
          </DrawerContent>
        </DrawerRoot>

        <Tabs.Root
          defaultValue='solar'
          variant='enclosed'
          fitted
          orientation='horizontal'
          display={{ base: 'none', md: 'block' }}>
          <Tabs.List>
            {services.map((service) => (
              <React.Fragment key={service.value}>
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
              </React.Fragment>
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
                          bg={brand.highlight ? 'primary' : 'white'}
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
                        <Text
                          fontSize='md'
                          color='#475467'
                          textAlign='center'
                          onClick={brand.highlight ? () => setOpen(true) : () => {}}
                          cursor={brand.highlight ? 'pointer' : 'default'}>
                          {brand.position}
                        </Text>
                      </HoverCardContent>
                    </HoverCardRoot>
                  ))}
                </Flex>
                <Box
                  bgImage={`url(${service.img})`}
                  bgSize='cover'
                  mt={12}
                  rounded='20px'
                  height='400px'
                  width='100%'
                  position='relative'>
                  {service.img_desc_1 && (
                    <Box
                      position='absolute'
                      right={5}
                      bottom={5}
                      bgColor='white'
                      padding={2}
                      rounded='10px'
                      shadow='2px 2px 2px 1px rgba(0, 0, 0, .4)'>
                      <Text textAlign='left' color='black' fontSize='sm' fontWeight='600'>
                        {service.img_desc_1}
                      </Text>
                      <Text textAlign='left' color='black' fontSize='sm'>
                        {service.img_desc_2}
                      </Text>
                      <Text textAlign='right' color='gray.500' fontSize='sm' mt={2}>
                        📍 {service.img_desc_3}
                      </Text>
                    </Box>
                  )}
                </Box>
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
