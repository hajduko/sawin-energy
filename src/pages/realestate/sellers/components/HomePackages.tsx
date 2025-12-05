import { Box, Flex, Heading, Image, Card, Tabs, Separator, List } from '@chakra-ui/react';

import check from '../../../../assets/icons/realestatecheck.png';

import turnkey from '../../../../assets/images/realestate/turnkey.png';
import financing from '../../../../assets/images/realestate/financing.png';
import plan from '../../../../assets/images/realestate/plan.png';

import key from '../../../../assets/icons/key.svg';
import clipboard from '../../../../assets/icons/clipboard.svg';

const HomePackages = () => {
  const services = [
    {
      title: 'Kulcsrakész csomag',
      value: 'turnkey',
      icon: key,
      img: turnkey,
      card: {
        description:
          'A Te költségedre, saját forrásodból és/vagy általunk intézett támogatásból vagy hitelből elvégezzük az ingatlanod teljes felújítását: megtervezzük, kivitelezzük, majd a piaci árnál jóval magasabb áron gyorsan értékesítjük, - mert a kész ingatlan nem csak korszerűbb, hanem vonzóbb is lesz a piacon.',
        points: [
          'Jutalékunk a csomagban: Csak 2% jutalék az értékesítés után',
          'Ideális választás, ha a lehető legmagasabb áron szeretnéd értékesíteni az ingatlanod.',
        ],
      },
    },
    {
      title: 'Terv csomag',
      value: 'plan',
      icon: clipboard,
      img: plan,
      card: {
        description:
          'Ingyenesen elkészítjük az ingatlanodra szabott felújítási tervet, költségkalkulációt, energetikai és megtérülési számításokat és az értéknövekményt, de a kivitelezést nem kezdjük el, azt már a Vevő költségére végezzük. Az ingatlant így - egyedi fejlesztési lehetőséggel, elkészült tervvel, jövőbeli értékbecsléssel – értékesítjük, ami különösen vonzó a befektetői kör számára.',
        points: [
          'Jutalékunk a csomagban: 2% értékesítési jutalék és értékesítési prémiumként az eladott ingatlan értéknövekmény nyereségének 25%-a.',
          'Ideális választás, ha befektetés nélkül szeretnéd a jelenleginél magasabb áron értékesíteni ingatlanod, vagy ha ingatlanod régóta értékesítésre vár, de nem jelentkeznek rá vevők. Ebben az esetben a leendő vevővel osztozol az Energiahatékonysági beruházás értéknövekményén.',
        ],
      },
    },
    {
      title: 'Finanszírozás csomag',
      value: 'financing',
      icon: key,
      img: financing,
      card: {
        description:
          'Speciális esetekbe elérhető ajánlatunk. Ilyenkor a SaWin csoport finanszírozza az Energiahatékonysági felújítást, hogy az ingatlan magasabb áron értékesíthető legyen, neked nem kell befektetned.',
        points: [
          'Jutalékunk a csomagban: 2% értékesítési jutalék és értékesítési prémiumként az eladott ingatlan értéknövekmény nyereségének 50%-a.',
          'Ideális választás, ha biztosan, befektetés nélkül a legnagyobb nyereséggel szeretnéd a jelenleginél magasabb áron értékesíteni ingatlanod, vagy ha ingatlanod régóta értékesítésre vár, de nem jelentkeznek rá vevők. Ebben az esetben a SaWIngatlannal osztozol az Energiahatékonysági beruházás értéknövekményén, ezért jogi garanciát kérünk arra, hogy csak mi értékesíthetjük az Ingatlanodat.',
        ],
      },
    },
  ];

  return (
    <Flex bg='#ebedf0' justify='center' id='#services'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={{ base: 12, md: 20 }} mb={{ base: 12, md: 20 }}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Csomagok
        </Heading>
        <Heading
          as='h3'
          size={{ base: '4xl', sm: '5xl' }}
          textAlign='center'
          fontWeight='600'
          lineHeight='short'
          mb={{ base: 8, md: 16 }}>
          Minden ingatlan érték, hozd ki belőle, amit csak lehet!
        </Heading>

        <Tabs.Root
          defaultValue='turnkey'
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
                <Card.Root width='100%' minHeight='230px' h='100%' rounded='20px' mb={8} p={6}>
                  <Card.Body p={0}>
                    <Image src={service.icon} height='24px' width='24px' fit='contain' mb={4} />
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      {service.title}
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467' mb={4}>
                      {service.card.description}
                    </Card.Description>
                    <List.Root gap='4' variant='plain'>
                      {service.card.points.map((point, index) => (
                        <List.Item key={index} fontSize='xl' color='primary' fontWeight='600'>
                          <List.Indicator asChild>
                            <Image src={check} height='24px' width='24px' fit='contain' />
                          </List.Indicator>
                          {point}
                        </List.Item>
                      ))}
                    </List.Root>
                  </Card.Body>
                </Card.Root>
                <Image src={service.img} rounded='20px' fit='cover' maxHeight='350px' width='100%' />
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
                <Card.Root width='100%' minHeight='230px' h='100%' rounded='20px' mb={8} p={6}>
                  <Card.Body p={0}>
                    <Image src={service.icon} height='24px' width='24px' fit='contain' mb={4} />
                    <Card.Title fontSize='xl' fontWeight='600' mb={2}>
                      {service.title}
                    </Card.Title>
                    <Card.Description fontSize='md' color='#475467' mb={4}>
                      {service.card.description}
                    </Card.Description>
                    <List.Root gap='4' variant='plain'>
                      {service.card.points.map((point, index) => (
                        <List.Item key={index} fontSize='xl' color='primary' fontWeight='600'>
                          <List.Indicator asChild>
                            <Image src={check} height='24px' width='24px' fit='contain' />
                          </List.Indicator>
                          {point}
                        </List.Item>
                      ))}
                    </List.Root>
                  </Card.Body>
                </Card.Root>

                <Image src={service.img} mt={12} rounded='20px' fit='cover' height='400px' width='100%' />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Box>
    </Flex>
  );
};

export default HomePackages;
