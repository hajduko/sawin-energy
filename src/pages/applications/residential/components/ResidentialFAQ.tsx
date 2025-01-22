import { Accordion, Box, Flex, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react';
import faq_minus from '../../../../assets/icons/faq_minus.svg';
import faq_plus from '../../../../assets/icons/faq_plus.svg';

const ResidentialFAQ = () => {
  const faqs = [
    {
      id: '0',
      question: 'Mely ingatlanokra igényelhető a támogatás?',
      eoft: [
        'Az igénylőnek tulajdoni hányaddal vagy holtig, de legalább a hitel futamidejének végéig tartó haszonélvezeti joggal kell rendelkeznie az érintett ingatlanban.',
        'Az ingatlan egy 2007. január 1. előtt használatbavételi engedélyt kapott, életvitelszerűen lakott egy- vagy többlakásos családi ház.',
        'Az igénylő vagy közeli hozzátartozója állandó lakóhelyének vagy tartózkodási helyének kell lennie az igénylésben szereplő ingatlannak legalább 2024. december 19.-től kezdőden. (lakcímkártyával igazolandó).',
        'Az ingatlanban csak lakáscélú energetikai felhasználás történhet.',
        'Adásvétel esetén elfogadott 2024 december 20. előtt készült, ügyvéd által ellenjegyzett adásvételi vagy ajándékozási szerződés.',
      ],
      voft: [
        'Az igénylő(k) és az érintett gyermek(ek) állandó lakcímmel kell, hogy rendelkeznek a felújítandó ingatlanban.',
        'Az igénylő, illetve az igénylő gyermeke vagy szülője összesen legalább 50%-os földhivatali bejegyzéssel igazolt tulajdoni hányaddal rendelkezik az ingatlanban.',
        'A támogatás csak 5000 főnél kisebb lakosságszámú településen található magyarországi ingatlanokra vehető igénybe.',
        '5 éves bentlakási kötelezettséget kell vállalni a felújított ingatlanban (az igénylőre és gyermek(ek)re vonatkozóan is).',
      ],
    },
    {
      id: '1',
      question: 'Kik igényelhetik a támogatást?',
      eoft: [
        'Nagykorú, cselekvőképes természetes személyek, akik rendelkeznek magyar adóazonosító jellel.',
        'Magyar állampolgárok, vagy az EGT más tagállamának állampolgárai, akik (lakcímkártyával igazoltan) legalább egy éve magyarországi állandó lakóhellyel vagy tartózkodási hellyel rendelkeznek.',
        'Eleget tesznek az adósságfék szabályának: a 600.000 Ft-nál kevesebbet keresők fizetésük legfeljebb 50%-át, az ezt meghaladó bevételűek legfeljebb 50%-át fordíthatják törlesztésre.',
        'Nincs a bruttó minimálbért meghaladó köz-, vagy adótartozásuk.',
        'Nincs 60 napnál régebb, a bruttó minimálbért meghaladó közüzemi számlatartozásuk.',
        'Sem az igénylő, sem adóstársa nem szerepel elmaradással a KHR-ben, illetve velük szemben veszteségleírással rendezett elmaradás sem szerepel.',
      ],
      voft: [
        'Legalább egy gyermeket váró szülők (a magzat betöltötte a 12. hetet).',
        'Legalább egy gyermeket nevelő szülők (vér szerinti vagy örökbefogadott gyermek, aki még nem töltötte be a 25. életévét, vagy ha betöltötte, megváltozott munkaképességű).',
        'Az igénylő magyar állampolgár vagy olyan személy, aki a szabad mozgás és tartózkodás jogával rendelkezik Magyarországon.',
        'Azonos lakóhellyel rendelkező házas vagy élettársak a támogatást együttesen igényelhetik.',
        'Legalább 1 éves, folyamatos társadalombiztosítási (TB) jogviszony igazolása szükséges (legfeljebb 30 napos megszakítással). Kivétel: GYOD-ban, ápolási díjban részesülők, illetve megváltozott munkaképességű személyek. (Együttes igénylés esetén elég, ha csak az egyik igénylő tudja igazolni.)',
        'Az igénylő(k)nek nem lehet 5000 forintot meghaladó köztartozása.',
      ],
    },
    {
      id: '2',
      question: 'Mekkora az elérhető vissza nem térítendő támogatás mértéke?',
      eoft: [
        'A pályázat két részből áll, egy vissza nem térítendő támogatásból és egy kamatmentes hitelből. A támogatás és a hitel csak együtt igényelhető. A beruházás maximális mértéke 7 millió forint lehet. Ebből 1 millió forint (kisebb összegű pályázat esetén a projekt érték 1/7 része) az önerő, a fennmaradó 6 millió forintot pedig megosztva 50-50%-ban a támogatás és a hitel teszi ki. Kisebb pályázati összeg esetén a támogatás és a hitel is arányosan csökken. A projekt minimális önrészen felüli összköltsége 2,5 millió forint lehet.',
      ],
      voft: [
        'A vissza nem térítendő támogatás a számlával igazolt felújítási költségek 50 százaléka, de maximum 3 millió forint lehet. Minden pályázó 6 millió forint kamat támogatott hitelre is jogosult. A hitel a beruházás megkezdése előtt lehívható. Az állami támogatás a beruházás megvalósítása után utófinanszírozásban igényelhető. A támogatás lehívásakor a hitel összege csökken a támogatás mértékével és a törlesztő részeltet már csak a fennmaradó hitelrész után kell fizetni. A támogatás lehívásakor a törlesztő részlete újra számolják a csökkentett hitelösszegre.',
      ],
    },
    {
      id: '3',
      question: 'A támogatás részletei',
      eoft: [
        'A támogatás előfinanszírozásban is elérhető, a hitellel egy időben, de külön folyósítják közvetlenül az igénylővel szerződött kivitelező részére.',
        'A vissza nem térítendő támogatás a projekt elvárt önerőn felüli részének 50 százaléka, de maximum 3 millió forint lehet.',
      ],
      voft: [
        'A vissza nem térítendő támogatás mértéke a számlával igazolt felújítási költségek 50 százaléka, de maximum 3 millió forint lehet.',
        'Az támogatási összeg 50-50%-ban oszlik meg anyagköltségre és munkadíjra.',
        'A munkálatok teljes költségének (számlaösszeg) legalább negyedét kell mind az anyagköltségnek, mind a munkadíjnak elérnie. Ha ez nem teljesül, csak az alacsonyabb költség(ek) kétszerese vehető figyelembe a támogatás kiszámításakor.',
      ],
    },
    {
      id: '4',
      question: 'A támogatás mellé igényelhető kölcsön részletei',
      eoft: [
        'A támogatás mellé a kölcsönt mindenképpen igényelni kell! A kölcsön teljesen kamatmentes, így a legjutányosabb konstrukció, ami jelenleg elérhető. Nem jelzáloghitel, azonban a hitel végtörlesztéséig elidegeníthetetlenségi kötelezettséget kell vállalni, vagyis az ingatlan nem értékesíthető.',
        'Futamidő: maximum 12 év (türelmi és rendelkezésre tartási idővel együtt).',
        'Rendelkezésre tartási idő: 6-24 hónap (indokolt esetben 6 hónappal meghosszabbítható).',
        'Türelmi idő: a rendelkezésre tartási idő végétől számított 3 hónap.',
        'Előtörlesztés: részleges előtörlesztés csak eredményességmérés után lehetséges, előtte kizárólag teljes előtörlesztés engedélyezett, vagyis a vissza nem térítendő támogatást is vissza kell fizetni.',
        'Lakástakarék-pénztári megtakarítások: felhasználhatók a kölcsön elő- vagy végtörlesztésére.',
        'Fedezet: nincs jelzálog, viszont elidegenítési tilalom vonatkozik az ingatlanra a teljes visszafizetésig.',
        'A kölcsönhöz nem kapcsolódik kezelési költség, előtörlesztési díj vagy szerződésmódosítási díj, illetve nem ez nem egy jelzáloghitel. Harmadik fél költségei (pl. energetikai tanúsítvány, tulajdoni lap, közjegyzői díj) azonban a kérelmezőt terhelik, viszont ezek az önerőbe beszámíthatóak.',
      ],
      voft: [
        'A támogatás mellé a kölcsönt nem kötelező igényelni, azonban a támogatás utófinanszírozott, míg a kölcsönt előzetesen is igényelni lehet. A kölcsön egy kamat támogatott jelzáloghitel konstrukció.',
        'Akik jogosultak a támogatásra és hitelképesek, kedvezményes kölcsönt igényelhetnek. Ezt azonban nem muszáj igénybe venni, amennyiben a beruházást önerőből finanszírozza az igénylő.',
        'Az ügyleti kamat nem haladhatja meg az ÁKK által havi rendszerességgel közzétett, a közzétételt megelőző 3 naptári hónapban tartott 5 éves névleges futamidejű államkötvény aukcióin kialakult átlaghozamok adott aukciókon elfogadott mennyiségekkel súlyozott számtani átlaga 110 százalékának 1 százalékponttal növelt mértékét.',
        'Az állami kamattámogatás mértéke az ügyleti kamaton 3 százalékpont.',
        'Nagyjából 4-5%- os kamatszinttel lehet számolni azonban ez bankonként eltérhet.',
        'A kölcsön összege maximum 6 millió forint.',
        'Az állami kamattámogatás a futamidő végéig, de legfeljebb 10 évre szól.',
        'Az állami támogatás megérkezésekor a hitel tőketartozása automatikusan csökken a támogatás összegével, és újra számolják a törlesztőrészletet.',
      ],
    },
    {
      id: '5',
      question: 'Milyen további szabályok és korlátozások vannak?',
      eoft: [
        'A beruházással legalább 30%-os energetikai megtakarítást kell elérni, amit energetikai tanúsítvánnyal igazolni kell.',
        'Ha az igénylő a kölcsön futam idejének végéig betölti a 75. életévét, szükséges egy olyan adóstárs bevonása, aki megfelel az életkori és jövedelmi elvárásoknak is.',
        'Elfogadható a 2024. december 19-ig kelt, ügyvéd által ellenjegyzett vagy közjegyző által hitelesített adásvételi szerződés. A kölcsönkérelem feltétele, hogy a szerződést a Földhivatalnál érkeztetni kell és széljegyre kell kerüljön. Elfogadható továbbá ajándékozási szerződés, haszonélvezeti szerződés, vagy egyéb tulajdonjogot igazoló okirat.',
      ],
      voft: [
        'Egy gyermek csak egy igénylésnél vehető figyelembe.',
        'A 2021-2022-es otthonfelújítási támogatást korábban részben kihasználók a fennmaradó keretösszeg erejéig igényelhetnek támogatást.',
      ],
    },
  ];
  return (
    <Flex bg='#ebedf0' justify='center' id='faq'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={10} mb={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Gyakran ismételt kérdések
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' mb={6}>
          Pályázati tudástár
        </Heading>

        <Accordion.Root collapsible multiple size='lg' variant='plain'>
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
                <Text fontSize='xl' fontWeight='500' color='black' textAlign='left' hyphens='auto'>
                  {item.question}
                </Text>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody pl={{ base: 0, sm: 9 }} pr={{ base: 0, sm: 9 }} fontSize='md' color='#475467'>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    <Box borderColor='primary' borderWidth={2} borderRadius='20px' padding={6}>
                      <Heading color='black' mb={2}>
                        EOFT
                      </Heading>
                      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {item.eoft.map((eoft) => (
                          <li key={eoft} style={{ marginBottom: '4px', textAlign: 'justify' }}>
                            {eoft}
                          </li>
                        ))}
                      </ul>
                    </Box>

                    <Box borderColor='primary' borderWidth={2} borderRadius='20px' padding={6}>
                      <Heading color='black' mb={2}>
                        VOFT
                      </Heading>
                      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {item.voft.map((voft) => (
                          <li key={voft} style={{ marginBottom: '4px', textAlign: 'justify' }}>
                            {voft}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </SimpleGrid>
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
