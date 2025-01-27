import { Box, Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Adatvédelmi nyilatkozat - Sawin Energy</title>
      </Helmet>
      <Box bgColor='#ebedf0' pt={{ base: 0, lg: 16 }}>
        <NavBar />
      </Box>
      <Flex bg='#ebedf0' justify='center'>
        <Box w={{ base: '95%', lg: '76rem' }} mt={10} mb={20} className='privacy'>
          <h1>Adatvédelmi és Adatkezelési Szabályzat</h1>
          <h2>Bevezetés</h2>
          <p>
            SaWin Energy Kft. (1051 Budapest Nádor utca 11., adó sz.:10436253-2-42) mint a www.sawin.hu weboldal, a
            <a href='https://www.sawinenergy.hu'> www.sawinenergy.hu </a>
            termék oldal valamint az IMPACT Energiahatékonysági Beruházás Tervező Szoftver üzemeltetője (a továbbiakban:
            Szolgáltató, adatkezelő) alá veti magát a következő tájékoztatónak.
          </p>
          <p>
            A természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok
            szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi
            rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) szerint az alábbi
            tájékoztatást adjuk.
          </p>
          <p>
            Jelen adatkezelési tájékoztató az alábbi oldalak adatkezelését szabályozza: www.sawin.hu és
            <a href='https://www.sawinenergy.hu'> www.sawinenergy.hu </a>
          </p>
          <p>
            Az adatkezelési tájékoztató elérhető az alábbi oldalról:
            <a href='www.sawin.hu'> www.sawin.hu </a>
            <a href='https://www.sawinenergy.hu'> www.sawinenergy.hu </a>
          </p>
          <p>A tájékoztató módosításai a fenti címen történő közzététellel lépnek hatályba.</p>
          <p>Az adatkezelő és elérhetőségei:</p>
          <p>Név: SaWin Energy Kft.</p>
          <p>Székhely: 1051 Budapest Nádor utca 11.</p>
          <p>adó sz.: 10436253-2-41</p>
          <p>
            E-mail:
            <a href='mailto:info@ezinnovations.eu'> info@sawin.hu </a>
          </p>
          <p>Telefon: +36-70-6189151</p>
          <h2>Fogalom meghatározások</h2>
          <ol>
            <li>
              „személyes adat”: azonosított vagy azonosítható természetes személyre („érintett”) vonatkozó bármely
              információ; azonosítható az a természetes személy, aki közvetlen vagy közvetett módon, különösen valamely
              azonosító, például név, szám, helymeghatározó adat, online azonosító vagy a természetes személy testi,
              fiziológiai, genetikai, szellemi, gazdasági, kulturális vagy szociális azonosságára vonatkozó egy vagy
              több tényező alapján azonosítható;
            </li>
            <li>
              „adatkezelés”: a személyes adatokon vagy adatállományokon automatizált vagy nem automatizált módon végzett
              bármely művelet vagy műveletek összessége, így a gyűjtés, rögzítés, rendszerezés, tagolás, tárolás,
              átalakítás vagy megváltoztatás, lekérdezés, betekintés, felhasználás, közlés továbbítás, terjesztés vagy
              egyéb módon történő hozzáférhetővé tétel útján, összehangolás vagy összekapcsolás, korlátozás, törlés,
              illetve megsemmisítés;
            </li>
            <li>
              „adatkezelő”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv,
              amely a személyes adatok kezelésének céljait és eszközeit önállóan vagy másokkal együtt meghatározza; ha
              az adatkezelés céljait és eszközeit az uniós vagy a tagállami jog határozza meg, az adatkezelőt vagy az
              adatkezelő kijelölésére vonatkozó különös szempontokat az uniós vagy a tagállami jog is meghatározhatja;
            </li>
            <li>
              „adatfeldolgozó”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb
              szerv, amely az adatkezelő nevében személyes adatokat kezel;
            </li>
            <li>
              „címzett”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv,
              akivel vagy amellyel a személyes adatot közlik, függetlenül attól, hogy harmadik fél-e. Azon közhatalmi
              szervek, amelyek egy egyedi vizsgálat keretében az uniós vagy a tagállami joggal összhangban férhetnek
              hozzá személyes adatokhoz, nem minősülnek címzettnek; az említett adatok e közhatalmi szervek általi
              kezelése meg kell, hogy feleljen az adatkezelés céljainak megfelelően az alkalmazandó adatvédelmi
              szabályoknak;
            </li>
            <li>
              „az érintett hozzájárulása”: az érintett akaratának önkéntes, konkrét és megfelelő tájékoztatáson alapuló
              és egyértelmű kinyilvánítása, amellyel az érintett nyilatkozat vagy a megerősítést félreérthetetlenül
              kifejező cselekedet útján jelzi, hogy beleegyezését adja az őt érintő személyes adatok kezeléséhez;
            </li>
            <li>
              „adatvédelmi incidens”: a biztonság olyan sérülése, amely a továbbított, tárolt vagy más módon kezelt
              személyes adatok véletlen vagy jogellenes megsemmisítését, elvesztését, megváltoztatását, jogosulatlan
              közlését vagy az azokhoz való jogosulatlan hozzáférést eredményezi.
            </li>
          </ol>
          <h2>A személyes adatok kezelésére vonatkozó elvek</h2>
          <p>A személyes adatok:</p>
          <ol>
            <li>
              kezelését jogszerűen és tisztességesen, valamint az érintett számára átlátható módon kell végezni
              („jogszerűség, tisztességes eljárás és átláthatóság”);
            </li>
            <li>
              gyűjtése csak meghatározott, egyértelmű és jogszerű célból történjen, és azokat ne kezeljék ezekkel a
              célokkal össze nem egyeztethető módon; a 89. cikk (1) bekezdésének megfelelően nem minősül az eredeti
              céllal össze nem egyeztethetőnek a közérdekű archiválás céljából, tudományos és történelmi kutatási célból
              vagy statisztikai célból történő további adatkezelés („célhoz kötöttség”);
            </li>
            <li>
              az adatkezelés céljai szempontjából megfelelőek és relevánsak kell, hogy legyenek, és a szükségesre kell
              korlátozódniuk („adattakarékosság”);
            </li>
            <li>
              pontosnak és szükség esetén naprakésznek kell lenniük; minden észszerű intézkedést meg kell tenni annak
              érdekében, hogy az adatkezelés céljai szempontjából pontatlan személyes adatokat haladéktalanul töröljék
              vagy helyesbítsék („pontosság”);
            </li>
            <li>
              tárolásának olyan formában kell történnie, amely az érintettek azonosítását csak a személyes adatok
              kezelése céljainak eléréséhez szükséges ideig teszi lehetővé; a személyes adatok ennél hosszabb ideig
              történő tárolására csak akkor kerülhet sor, amennyiben a személyes adatok kezelésére a 89. cikk (1)
              bekezdésének megfelelően közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy
              statisztikai célból kerül majd sor, az e rendeletben az érintettek jogainak és szabadságainak védelme
              érdekében előírt megfelelő technikai és szervezési intézkedések végrehajtására is figyelemmel
              („korlátozott tárolhatóság”);
            </li>
            <li>
              kezelését oly módon kell végezni, hogy megfelelő technikai vagy szervezési intézkedések alkalmazásával
              biztosítva legyen a személyes adatok megfelelő biztonsága, az adatok jogosulatlan vagy jogellenes
              kezelésével, véletlen elvesztésével, megsemmisítésével vagy károsodásával szembeni védelmet is ideértve
              („integritás és bizalmas jelleg”).
            </li>
          </ol>
          <p>
            Az adatkezelő felelős a fentiek megfelelésért, továbbá képesnek kell lennie e megfelelés igazolására
            („elszámoltathatóság”).
          </p>
          <h2>Adatkezelések</h2>
          <p>Webáruház működtetéshez kapcsolódó adatkezelés</p>
          <ol>
            <li>
              Az adatgyűjtés ténye, a kezelt adatok köre és az
              <strong> adatkezelés célja </strong>:
            </li>
          </ol>
          <table>
            <thead>
              <tr>
                <th>
                  <p>
                    <strong> Személyes adat </strong>
                  </p>
                </th>
                <th>
                  <p>
                    <strong> Az adatkezelés célja </strong>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>
                  <p>Felhasználói név</p>
                </td>
                <td>
                  <p>Azonosítás, a regisztráció lehetővé tétele.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A felhasználói fiókba történő biztonságos belépést szolgálja.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Vezeték-és keresztnév</p>
                </td>
                <td>
                  <p>A kapcsolatfelvételhez, a vásárláshoz és a szabályszerű számla kiállításához szükséges.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>E-mail cím</p>
                </td>
                <td>
                  Kapcsolattartás, a számlázással, vagy a szállítással kapcsolatos kérdések hatékonyabb egyeztetése.
                </td>
              </tr>

              <tr>
                <td>
                  <p>Számlázási név és cím</p>
                </td>
                <td>
                  <p>
                    A szabályszerű számla kiállítása, továbbá a szerződés létrehozása, tartalmának meghatározása,
                    módosítása, teljesítésének figyelemmel kísérése, az abból származó díjak számlázása, valamint az
                    azzal kapcsolatos követelések érvényesítése.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Szállítási név és cím</p>
                </td>
                <td>
                  <p>A házhoz szállítás lehetővé tétele.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A vásárlás/regisztráció időpontja</p>
                </td>
                <td>
                  <p>Technikai művelet végrehajtása.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A vásárlás/regisztráció kori IP cím</p>
                </td>
                <td>
                  <p>Technikai művelet végrehajtása.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <br />
            Sem a felhasználónév, sem az e-mail cím esetében nem szükséges, hogy személyes adatot tartalmazzon.
          </p>
          <ol>
            <li>
              <strong>Az érintettek köre:</strong> A webshop weboldalon regisztrált/vásárló valamennyi érintett.
            </li>
            <li>
              <strong>Az adatkezelés időtartama, az adatok törlésének határideje:</strong> A regisztráció törlésével
              azonnal. Az érintett által megadott bármely személyes adat törléséről az adatkezelő a GDPR 19. cikke
              alapján, elektronikus úton tájékoztatja az érintettet. Ha az érintett törlési kérelme kiterjed az általa
              megadott e-mail címre is, akkor az adatkezelő a tájékoztatást követően az e-mail címet is törli. Kivéve a
              számviteli bizonylatok esetében, hiszen a számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése
              alapján 8 évig meg kell őrizni ezeket az adatokat.
            </li>
          </ol>
          <p>
            <em>
              A könyvviteli elszámolást közvetlenül és közvetetten alátámasztó számviteli bizonylatot (ideértve a
              főkönyvi számlákat, az analitikus, illetve részletező nyilvántartásokat is), legalább 8 évig kell
              olvasható formában, a könyvelési feljegyzések hivatkozása alapján visszakereshető módon megőrizni.
            </em>
          </p>
          <ol>
            <li>
              <strong>
                Az adatok megismerésére jogosult lehetséges adatkezelők személye, a személyes adatok címzettjei:
              </strong>
              A személyes adatokat az adatkezelő sales és marketing munkatársai kezelhetik, a fenti alapelvek
              tiszteletben tartásával.
            </li>
            <li>
              <strong> Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése </strong>:
            </li>
            <ul>
              <li>
                Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok
                helyesbítését, törlését vagy kezelésének korlátozását, és
              </li>
              <li>tiltakozhat az ilyen személyes adatok kezelése ellen, valamint</li>
              <li>
                az érintettnek joga van az adathordozhatósághoz, továbbá a hozzájárulás bármely időpontban történő
                visszavonásához.
              </li>
            </ul>
            <li>
              <strong>
                A személyes adatokhoz való hozzáférést, azok törlését, módosítását, vagy kezelésének korlátozását, az
                adatok hordozhatóságát, az adatkezelések elleni tiltakozást az alábbi módokon tudja érintett
                kezdeményezni
              </strong>
              :
            </li>
            <ul>
              <li>postai úton a 1051 Budapest Nádor utca 11. címen,</li>
              <li>
                e-mail útján
                <a href='mailto:info@sawin.hu'> info@sawin.hu </a>
                e-mail címen,
              </li>
              <li>telefonon a +36-70/618-9151 számon.</li>
            </ul>
            <li>
              <strong> Az adatkezelés jogalapja </strong>:
            </li>
            <ul>
              <li>a GDPR 6. cikk (1) bekezdés b) pontja,</li>
              <li>
                Az elektronikus kereskedelemi szolgáltatások, valamint az információs társadalommal összefüggő
                szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény (a továbbiakban: Elker tv.) 13/A. § (3)
                bekezdése:
              </li>
            </ul>
          </ol>

          <p>
            <em>
              A szolgáltató a szolgáltatás nyújtása céljából kezelheti azon személyes adatokat, amelyek a szolgáltatás
              nyújtásához technikailag elengedhetetlenül szükségesek. A szolgáltatónak az egyéb feltételek azonossága
              esetén úgy kell megválasztania és minden esetben oly módon kell üzemeltetnie az információs társadalommal
              összefüggő szolgáltatás nyújtása során alkalmazott eszközöket, hogy személyes adatok kezelésére csak akkor
              kerüljön sor, ha ez a szolgáltatás nyújtásához és az e törvényben meghatározott egyéb célok teljesüléséhez
              feltétlenül szükséges, azonban ebben az esetben is csak a szükséges mértékben és ideig.
            </em>
          </p>
          <ol>
            <li>A számviteli jogszabályoknak megfelelő számlát kiállítása esetén a 6. cikk (1) bekezdés c) pontja.</li>
            <li>
              A szerződésből eredő követelések érvényesítése esetén a Polgári Törvénykönyvről szóló 2013. évi V. törvény
              6:21. §-a szerint 5 év.
            </li>
          </ol>
          <p>
            <em> 6:22. § [Elévülés] </em>
          </p>
          <p>
            <em> (1) Ha e törvény eltérően nem rendelkezik, a követelések öt év alatt évülnek el. </em>
          </p>
          <p>
            <em> (2) Az elévülés akkor kezdődik, amikor a követelés esedékessé válik. </em>
          </p>
          <p>
            <em> (3) Az elévülési idő megváltoztatására irányuló megállapodást írásba kell foglalni. </em>
          </p>
          <p>
            <em> (4) Az elévülést kizáró megállapodás semmis. </em>
          </p>
          <ol>
            <li>Tájékoztatjuk, hogy</li>
            <ul>
              <li>
                <strong>az adatkezelés szerződés teljesítéséhez szükséges </strong>.
              </li>
              <li>
                <strong>köteles </strong>a személyes adatokat megadni, hogy tudjuk a rendelését teljesíteni.
              </li>
              <li>
                az adatszolgáltatás elmaradása azzal a <strong>következményekkel </strong>
                jár, hogy nem tudjuk a rendelését feldolgozni.
              </li>
            </ul>
          </ol>

          <h2>Az igénybe vett adatfeldolgozók</h2>
          <h3>Szállítás</h3>
          <ol>
            <li>
              A SaWin Energy Kft. által üzemeltetett IMPACT Beruházás Tervező Szoftverben a SaWIn Energy Kft és annak
              nevesített Tanácsadói és Kivitelező partnerei teljeskörű adatkezeléssel,
            </li>
            <li>
              A SaWIn Energy Kft. által megbízott szállító cégek, a Szállítási név, szállítási cím, telefonszám, e-mail
              cím. adatkezelésével.
            </li>
            <ul>
              <li>Az érintettek köre: A házhozszállítást kérő valamennyi érintett.</li>
              <li>Az adatkezelés célja: A megrendelt termék házhoz szállítása.</li>
              <li>
                Az adatkezelés időtartama, az adatok törlésének határideje: A házhozszállítás lebonyolításáig tart.
              </li>
            </ul>
            <li>Az adatfeldolgozás jogalapja: 6. cikk (1) bekezdés b) pontja.</li>
          </ol>
          <h3>Tárhely-szolgáltató</h3>
          <ol>
            <li>Adatfeldolgozó által ellátott tevékenység: Tárhely-szolgáltatás</li>
            <li>
              Adatfeldolgozó megnevezése és elérhetősége:
              <br />
              Tárhelyszolgáltató adatai
              <br />
              Név:
              <a href='http://www.odoo.com/'> WWW.ODOO.COM </a>
              és
              <a href='http://www.aws.com/'> WWW.AWS.COM </a>
            </li>
            <li>Az adatkezelés ténye, a kezelt adatok köre: Az érintett által megadott valamennyi személyes adat.</li>
            <li>Az érintettek köre: A weboldalt használó valamennyi érintett.</li>
            <li>Az adatkezelés célja: A weboldal elérhetővé tétele, megfelelő működtetése.</li>
            <li>
              Az adatkezelés időtartama, az adatok törlésének határideje: Az adatkezelő és a tárhely-szolgáltató közötti
              megállapodás megszűnéséig, vagy az érintettnek a tárhely-szolgáltató felé intézett törlési kérelméig tart
              az adatkezelés.
            </li>
            <li>
              Az adatfeldolgozás jogalapja: a 6. cikk (1) bekezdés c) és f) pontja, illetve az elektronikus
              kereskedelemi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes
              kérdéseiről szóló 2001. évi CVIII. törvény 13/A. § (3) bekezdése.
            </li>
          </ol>
          <h2>Címzettek, akikkel a személyes adatokat közlik (Adattovábbítás):</h2>
          <h3>Online fizetés</h3>
          <ol>
            <li>A Címzett által ellátott tevékenység: Online fizetés</li>
            <li>
              Címzett megnevezése és elérhetősége:
              <br />
              ODOO
              <br />
              <a href='http://www.odoo.com/'> www.odoo.com </a>
            </li>

            <li>Az adatkezelés ténye, a kezelt adatok köre: Számlázási adatok, név, e-mail cím</li>
            <li>Az érintettek köre: A weboldalon fizetést választó valamennyi érintett.</li>
            <li>
              Az adatkezelés célja: Az online fizetés lebonyolítása, a tranzakciók visszaigazolása és a felhasználók
              védelme érdekében végzett fraud-monitoring (visszaélések ellenőrzése)
            </li>
            <li>Az adatkezelés időtartama, az adatok törlésének határideje: Az online fizetés lebonyolításáig tart.</li>
            <li>
              Az adatfeldolgozás jogalapja: a GDPR 6. cikk (1) bekezdés b) pontja. Az adatkezelés az érintett kérésére
              történő online fizetés teljesítéséhez szükséges.
            </li>
            <li>Az érintett jogai:</li>
            <ol>
              <li>Ön tájékozódhat az adatkezelés körülményeiről</li>
              <li>
                Ön jogosult arra, hogy az adatkezelőtől visszajelzést kapjon, hogy a személyes adatainak kezelése
                folyamatban van-e, illetve hozzáférhet az adatkezeléssel kapcsolatos valamennyi információhoz
              </li>
              <li>
                Ön jogosult arra, hogy az Önre vonatkozó személyes adatait tagolt, széles körben használt, géppel
                olvasható formátumban megkapja
              </li>
              <li>
                Ön jogosult arra, hogy kérésére az adatkezelő indokolatlan késedelem nélkül helyesbítse a pontatlan
                személyes adatait.
              </li>
            </ol>
          </ol>
          <h3>Cookie-k (sütik) kezelése</h3>
          <ol>
            <li>
              Webáruházakra jellemző cookie-k az úgynevezett „jelszóval védett munkamenethez használt cookie”,
              „bevásárlókosárhoz szükséges cookie-k” és „biztonsági cookie-k”, melyek használatához nem szükséges
              előzetes hozzájárulást kérni az érintettektől.
            </li>
            <li>Az adatkezelés ténye, a kezelt adatok köre: Egyedi azonosítószám, dátumok, időpontok</li>
            <li>Az érintettek köre: A weboldalt látogató valamennyi érintett.</li>
            <li>
              Az adatkezelés célja: A felhasználók azonosítása, a „bevásárlókosár” nyilvántartására és a látogatók
              nyomon követése.
            </li>
            <li>Az adatkezelés időtartama, az adatok törlésének határideje:</li>
          </ol>
          <table>
            <thead>
              <tr>
                <th>
                  <p>
                    <strong> Süti típusa </strong>
                  </p>
                </th>
                <th>
                  <p>
                    <strong> Adatkezelés jogalapja </strong>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Munkamenet sütik (session)</p>
                </td>
                <td>
                  <p>
                    Az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalmi szolgáltatások egyes
                    kérdéseiről szóló 2001. CVIII. törvény (Elkertv.) 13/A. § (3) bekezdése
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong> Adatkezelés </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong> Kezelt adatkör </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A felhasználó vagy a szolgáltató visszavonásig.</p>
                </td>
                <td>
                  <p>connect.sid</p>
                </td>
              </tr>
            </tbody>
          </table>
          <ol>
            <li>
              Az adatok megismerésére jogosult lehetséges adatkezelők személye: A cookie-k használatával nem kezel
              személyes adatokat az adatkezelő.
            </li>
            <li>
              Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése: Az érintettnek lehetőségük van a cookie-kat
              törölni a böngészők Eszközök/Beállítások menüjében általában az Adatvédelem menüpont beállításai alatt.
            </li>
            <li>
              Az adatkezelés jogalapja: Az érintettől hozzájárulás nem szükséges, amennyiben a cookie-k használatának
              kizárólagos célja az elektronikus hírközlő hálózaton keresztül történő közléstovábbítás vagy arra az
              előfizető vagy felhasználó által kifejezetten kért, az információs társadalommal összefüggő szolgáltatás
              nyújtásához a szolgáltatónak feltétlenül szüksége van.
            </li>
          </ol>
          <h3>Google Adwords konverziókövetés használata</h3>
          <ol>
            <li>
              A „Google AdWords” nevű online reklámprogramot használja az adatkezelő, továbbá annak keretein belül
              igénybe veszi a Google konverziókövető szolgáltatását. A Google konverziókövetés a Google Inc. elemző
              szolgáltatása (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google“).
            </li>
            <li>
              Amikor Felhasználó egy weboldalt Google-hirdetés által ér el, akkor egy a konverziókövetéshez szükséges
              cookie kerül a számítógépére. Ezeknek a cookie-knak az érvényessége korlátozott, és nem tartalmaznak
              semmilyen személyes adatot, így a Felhasználó nem is azonosítható általuk.
            </li>
            <li>
              Amikor a Felhasználó a weboldal bizonyos oldalait böngészi, és a cookie még nem járt le, akkor a Google és
              az adatkezelő is láthatja, hogy Felhasználó a hirdetésre kattintott.
            </li>
            <li>
              Minden Google AdWords ügyfél másik cookie-t kap, így azokat az AdWords ügyfeleinek weboldalain keresztül
              nem lehet nyomon követni.
            </li>
            <li>
              Az információk - melyeket a konverziókövető cookie-k segítségével szereztek - azt a célt szolgálják, hogy
              az AdWords konverziókövetést választó ügyfeleinek számára konverziós statisztikákat készítsenek. Az
              ügyfelek így tájékozódnak a hirdetésükre kattintó és konverziókövető címkével ellátott oldalra továbbított
              felhasználók számáról. Azonban olyan információkhoz nem jutnak hozzá, melyekkel bármelyik felhasználót
              azonosítani lehetne.
            </li>
            <li>
              Ha nem szeretne részt venni a konverziókövetésben, akkor ezt elutasíthatja azáltal, hogy böngészőjében
              letiltja a cookie-k telepítésének lehetőségét. Ezután Ön nem fog szerepelni a konverziókövetési
              statisztikákban.
            </li>
            <li>
              További információ, valamint a Google adatvédelmi nyilatkozata az alábbi oldalon érhető el:
              <a href='http://www.google.de/policies/privacy/'> www.google.de/policies/privacy/ </a>
            </li>
          </ol>
          <h3>A Google Analytics alkalmazása</h3>
          <ol>
            <li>
              Ez a honlap a Google Analytics alkalmazást használja, amely a Google Inc. („Google”) webelemző
              szolgáltatása. A Google Analytics úgynevezett „cookie-kat”, szövegfájlokat használ, amelyeket a
              számítógépére mentenek, így elősegítik Felhasználó által látogatott weblap használatának elemzését.
            </li>
            <li>
              A Felhasználó által használt weboldallal kapcsolatos cookie-kkal létrehozott információk rendszerint a
              Google egyik USA-beli szerverére kerülnek és tárolódnak. Az IP-anonimizálás weboldali aktiválásával a
              Google a Felhasználó IP-címét az Európai Unió tagállamain belül vagy az Európai Gazdasági Térségről szóló
              megállapodásban részes más államokban előzőleg megrövidíti.
            </li>
            <li>
              A teljes IP-címnek a Google USA-ban lévő szerverére történő továbbítására és ottani lerövidítésére csak
              kivételes esetekben kerül sor. Eme weboldal üzemeltetőjének megbízásából a Google ezeket az információkat
              arra fogja használni, hogy kiértékelje, hogyan használta a Felhasználó a honlapot, továbbá, hogy a
              weboldal üzemeltetőjének a honlap aktivitásával összefüggő jelentéseket készítsen, valamint, hogy a
              weboldal- és az internethasználattal kapcsolatos további szolgáltatásokat teljesítsen.
            </li>
          </ol>
          <p>
            A Google Analytics keretein belül a Felhasználó böngészője által továbbított IP-címet nem vezeti össze a
            Google más adataival. A cookie-k tárolását a Felhasználó a böngészőjének megfelelő beállításával
            megakadályozhatja, azonban felhívjuk figyelmét, hogy ebben az esetben előfordulhat, hogy ennek a honlapnak
            nem minden funkciója lesz teljes körűen használható. Megakadályozhatja továbbá, hogy a Google gyűjtse és
            feldolgozza a cookie-k általi, a Felhasználó weboldalhasználattal kapcsolatos adatait (beleértve az IP-címet
            is), ha letölti és telepíti a következő linken elérhető böngésző plugint.
          </p>
          <h3>Hírlevél, DM tevékenység</h3>
          <ol>
            <li>
              A gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól szóló 2008. évi XLVIII. törvény
              6. §-a értelmében Felhasználó előzetesen és kifejezetten hozzájárulhat ahhoz, hogy Szolgáltató
              reklámajánlataival, egyéb küldeményeivel a regisztrációkor megadott elérhetőségein megkeresse.
            </li>
            <li>
              Továbbá Ügyfél a jelen tájékoztató rendelkezéseit szem előtt tartva hozzájárulhat ahhoz, hogy Szolgáltató
              a reklámajánlatok küldéséhez szükséges személyes adatait kezelje.
            </li>
            <li>
              Szolgáltató nem küld kéretlen reklámüzenetet, és Felhasználó korlátozás és indokolás nélkül, ingyenesen
              leiratkozhat az ajánlatok küldéséről. Ebben az esetben Szolgáltató minden - a reklámüzenetek küldéséhez
              szükséges - személyes adatát törli nyilvántartásából és további reklámajánlataival nem keresi meg a
              Felhasználót. Felhasználó a reklámokról leiratkozhat az üzenetben lévő linkre kattintva.
            </li>
            <li>
              Az adatgyűjtés ténye, a kezelt adatok köre és az
              <strong> adatkezelés célja: </strong>
            </li>
          </ol>
          <table>
            <thead>
              <tr>
                <th>
                  <p>
                    <strong> Személyes adat </strong>
                  </p>
                </th>
                <th>
                  <p>
                    <strong> Az adatkezelés célja </strong>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Név, e-mail cím</p>
                </td>
                <td>
                  <p>Azonosítás, a hírlevélre való feliratkozás lehetővé tétele.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A feliratkozás időpontja</p>
                </td>
                <td>
                  <p>Technikai művelet végrehajtása.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A feliratkozás kori IP cím</p>
                </td>
                <td>
                  <p>Technikai művelet végrehajtása.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <ol>
            <li>Az érintettek köre: A hírlevélre feliratkozó valamennyi érintett.</li>
            <li>
              Az adatkezelés célja: reklámot tartalmazó elektronikus üzenetek (e-mail, sms, push üzenet) küldése az
              érintett részére, tájékoztatás nyújtása az aktuális információkról, termékekről, akciókról, új funkciókról
              stb.
            </li>
            <li>
              Az adatkezelés időtartama, az adatok törlésének határideje: a hozzájáruló nyilatkozat visszavonásáig, azaz
              a leiratkozásig tart az adatkezelés.
            </li>
            <li>Az adatkezelés nyilvántartási száma: folyamatban...</li>
            <li>
              <strong>
                {' '}
                Az adatok megismerésére jogosult lehetséges adatkezelők személye, a személyes adatok címzettjei{' '}
              </strong>
              : A személyes adatokat az adatkezelő sales és marketing munkatársai kezelhetik, a fenti alapelvek
              tiszteletben tartásával.
            </li>
            <li>
              <strong> Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése </strong>:
            </li>
            <ul>
              <li>
                Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok
                helyesbítését, törlését vagy kezelésének korlátozását, és
              </li>
              <li>tiltakozhat az ilyen személyes adatok kezelése ellen, valamint</li>
              <li>
                az érintettnek joga van az adathordozhatósághoz, továbbá a hozzájárulás bármely időpontban történő
                visszavonásához.
              </li>
            </ul>

            <li>
              <strong>
                A személyes adatokhoz való hozzáférést, azok törlését, módosítását, vagy kezelésének korlátozását, az
                adatok hordozhatóságát, az adatkezelések elleni tiltakozást az alábbi módokon tudja érintett
                kezdeményezni
              </strong>
              :
            </li>
            <ul>
              <li>postai úton a 1051 Budapest, Nádor utca 11. címen,</li>
              <li>
                e-mail
                <a href='mailto:útján info@sawin.hu'> útján info@sawin.hu </a>
                e-mail címen,
              </li>
              <li>telefonon a +36-70/618-9151 számon.</li>
            </ul>

            <li>
              Az érintett bármikor,
              <strong> ingyenesen leiratkozhat </strong>a hírlevélről.
            </li>
            <li>
              <strong> Az adatkezelés jogalapja </strong>: az érintett hozzájárulása, 6. cikk (1) bekezdés a) és f)
              pontja, és a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól szóló 2008. évi
              XLVIII. törvény 6. § (5) bekezdése:
            </li>
          </ol>
          <p>
            <em>
              A reklámozó, a reklámszolgáltató, illetve a reklám közzétevője - a hozzájárulásban meghatározott körben -
              a náluk hozzájáruló nyilatkozatot tevő személyek személyes adatairól nyilvántartást vezet. Az ebben a
              nyilvántartásban rögzített - a reklám címzettjére vonatkozó - adat csak a hozzájáruló nyilatkozatban
              foglaltaknak megfelelően, annak visszavonásáig kezelhető, és harmadik fél számára kizárólag az érintett
              személy előzetes hozzájárulásával adható át.
            </em>
          </p>
          <ol>
            <li>Tájékoztatjuk, hogy</li>
            <ul>
              <li>
                <strong> az adatkezelés az Ön hozzájárulásán </strong>
                alapul.
              </li>
              <li>
                <strong> köteles </strong>a személyes adatokat megadni, ha hírlevelet szeretne kapni tőlünk.
              </li>
              <li>
                az adatszolgáltatás elmaradása azzal a<strong> következményekkel </strong>
                jár, hogy nem tudunk Önnek hírlevelet küldeni.
              </li>
            </ul>
          </ol>

          <h3>Panaszkezelés</h3>
          <ol>
            <li>
              Az adatgyűjtés ténye, a kezelt adatok köre és az
              <strong> adatkezelés célja </strong>:
            </li>
          </ol>
          <table>
            <thead>
              <tr>
                <th>
                  <p>
                    <strong> Személyes adat </strong>
                  </p>
                </th>
                <th>
                  <p>
                    <strong> Az adatkezelés célja </strong>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Vezeték-és keresztnév</p>
                </td>
                <td>
                  <p>Azonosítás, kapcsolattartás.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>E-mail cím</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <p>Számlázási név és cím</p>
                </td>
                <td>
                  <p>
                    Azonosítás, a megrendelt termékekkel kapcsolatosan felmerülő minőségi kifogások, kérdések és
                    problémák kezelése.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <ol>
            <li>
              Az érintettek köre: A webshop weboldalon vásárló és minőségi kifogással élő, panaszt tevő valamennyi
              érintett.
            </li>
            <li>
              Az adatkezelés időtartama, az adatok törlésének határideje: A felvett kifogásról felvett jegyzőkönyv,
              átirat és az arra adott válasz másolati példányait a fogyasztóvédelemről szóló 1997. évi CLV. törvény
              17/A. § (7) bekezdése alapján 5 évig kell megőrizni.
            </li>
            <li>
              <strong>
                {' '}
                Az adatok megismerésére jogosult lehetséges adatkezelők személye, a személyes adatok címzettjei{' '}
              </strong>
              : A személyes adatokat az adatkezelő sales és marketing munkatársai kezelhetik, a fenti alapelvek
              tiszteletben tartásával.
            </li>
            <li>
              <strong> Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése </strong>:
            </li>
            <ul>
              <li>
                Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok
                helyesbítését, törlését vagy kezelésének korlátozását, és
              </li>
              <li>tiltakozhat az ilyen személyes adatok kezelése ellen, valamint</li>
              <li>
                az érintettnek joga van az adathordozhatósághoz, továbbá a hozzájárulás bármely időpontban történő
                visszavonásához.
              </li>
            </ul>
            <li>
              <strong>
                A személyes adatokhoz való hozzáférést, azok törlését, módosítását, vagy kezelésének korlátozását, az
                adatok hordozhatóságát, az adatkezelések elleni tiltakozást az alábbi módokon tudja érintett
                kezdeményezni
              </strong>
              :
            </li>
            <ul>
              <li>postai úton a 1051 Budapest Nádor utca 11. címen,</li>
              <li>
                e-mail
                <a href='mailto:útján info@sawin.hu'> útján info@sawin.hu </a>
                e-mail címen,
              </li>
              <li>telefonon a +36-70/618-9151 számon.</li>
            </ul>
            <li>
              <strong> Az adatkezelés jogalapja </strong>: 6. cikk (1) bekezdés c) pont, és a fogyasztóvédelemről szóló
              1997. évi CLV. törvény 17/A. § (7) bekezdése.
            </li>
            <li>Tájékoztatjuk, hogy</li>

            <ul>
              <li>
                a személyes adat szolgáltatása
                <strong> szerződéses kötelezettségen </strong>
                alapul.
              </li>
              <li>
                a szerződés megkötésének
                <strong> előfeltétele </strong>a személyes adatok kezelése.
              </li>
              <li>
                <strong> köteles </strong>a személyes adatokat megadni, hogy panaszát kezelni tudjuk.
              </li>
              <li>
                az adatszolgáltatás elmaradása azzal a<strong> következményekkel </strong>
                jár, hogy nem tudjuk kezelni a hozzánk beérkezett panaszát.
              </li>
            </ul>
          </ol>
          <h3>Közösségi oldalak</h3>
          <ol>
            <li>
              Az adatgyűjtés ténye, a kezelt adatok köre: Facebook/Google+/Twitter/Pinterest/Youtube/Instagram stb.
              közösségi oldalakon regisztrált neve, illetve a felhasználó nyilvános profilképe.
            </li>
            <li>
              Az érintettek köre: Valamennyi érintett, aki regisztrált a
              Facebook/Google+/Twitter/Pinterest/Youtube/Instagram stb. közösségi oldalakon, és „lájkolta” a weboldalt.
            </li>
            <li>
              Az adatgyűjtés célja: A közösségi oldalakon, a weboldal egyes tartalmi elemeinek, termékeinek, akcióinak
              vagy magának a weboldalnak a megosztása, illetve „lájkolása”, népszerűsítése.
            </li>
            <li>
              Az adatkezelés időtartama, az adatok törlésének határideje, az adatok megismerésére jogosult lehetséges
              adatkezelők személye és az érintettek adatkezeléssel kapcsolatos jogainak ismertetése: Az adatok
              forrásáról, azok kezeléséről, illetve az átadás módjáról, és jogalapjáról az adott közösségi oldalon
              tájékozódhat az érintett. Az adatkezelés a közösségi oldalakon valósul meg, így az adatkezelés
              időtartamára, módjára, illetve az adatok törlési és módosítási lehetőségeire az adott közösségi oldal
              szabályozása vonatkozik.
            </li>
            <li>
              Az adatkezelés jogalapja: az érintett önkéntes hozzájárulása személyes adatai kezeléséhez a közösségi
              oldalakon.
            </li>
          </ol>
          <h3>Ügyfélkapcsolatok és egyéb adatkezelések</h3>
          <ol>
            <li>
              Amennyiben az adatkezelő szolgáltatásaink igénybevétele során kérdés merülne fel, esetleg problémája lenne
              az érintettnek, a honlapon megadott módokon (telefon, e-mail, közösségi oldalak stb.) kapcsolatba léphet
              az adatkezelővel.
            </li>
            <li>
              Adatkezelő a beérkezett e-maileket, üzeneteket, telefonon, Facebook-on stb. megadott adatokat az érdeklődő
              nevével és e-mail címével, valamint más, önként megadott személyes adatával együtt, az adatközléstől
              számított legfeljebb 2 év elteltével törli.
            </li>
            <li>E tájékoztatóban fel nem sorolt adatkezelésekről az adat felvételekor adunk tájékoztatást.</li>
            <li>
              Kivételes hatósági megkeresésre, illetőleg jogszabály felhatalmazása alapján más szervek megkeresése
              esetén a Szolgáltató köteles tájékoztatás adására, adatok közlésére, átadására, illetőleg iratok
              rendelkezésre bocsátására.
            </li>
            <li>
              A Szolgáltató ezen esetekben a megkereső részére - amennyiben az a pontos célt és az adatok körét
              megjelölte - személyes adatot csak annyit és olyan mértékben ad ki, amely a megkeresés céljának
              megvalósításához elengedhetetlenül szükséges.
            </li>
          </ol>
          <h3>Intézkedési határidő</h3>
          <p>
            Az adatkezelő indokolatlan késedelem nélkül, de mindenféleképpen a kérelem beérkezésétől számított
            <strong> 1 hónapon belül </strong>
            tájékoztatja Önt a fenti kérelmek nyomán hozott intézkedésekről.
          </p>
          <p>
            Szükség esetén ez
            <strong> 2 hónappal meghosszabbítható </strong>. A határidő meghosszabbításáról az adatkezelő a késedelem
            okainak megjelölésével a kérelem kézhezvételétől számított
            <strong> 1 hónapon belül </strong>
            tájékoztatja Önt.
          </p>
          <p>
            Ha az adatkezelő nem tesz intézkedéseket Ön kérelme nyomán,
            <strong>
              késedelem nélkül, de legkésőbb a kérelem beérkezésétől számított egy hónapon belül tájékoztatja Önt az
              intézkedés elmaradásának okairól
            </strong>
            , valamint arról, hogy Ön panaszt nyújthat be valamely felügyeleti hatóságnál, és élhet bírósági
            jogorvoslati jogával.
          </p>
          <p>
            <strong> Az érintett tájékoztatása az adatvédelmi incidensről </strong>
          </p>
          <p>
            Ha az adatvédelmi incidens valószínűsíthetően magas kockázattal jár a természetes személyek jogaira és
            szabadságaira nézve, az adatkezelő indokolatlan késedelem nélkül tájékoztatja az érintettet az adatvédelmi
            incidensről.
          </p>
          <p>
            Az érintett részére adott tájékoztatásban <strong>világosan és közérthetően</strong>
            ismertetni kell az adatvédelmi incidens jellegét, és közölni kell az adatvédelmi tisztviselő vagy a további
            tájékoztatást nyújtó egyéb kapcsolattartó nevét és elérhetőségeit; ismertetni kell az
          </p>
          <p>
            adatvédelmi incidensből eredő, valószínűsíthető következményeket; ismertetni kell az adatkezelő által az
            adatvédelmi incidens orvoslására tett vagy tervezett intézkedéseket, beleértve adott esetben az adatvédelmi
            incidensből eredő esetleges hátrányos következmények enyhítését célzó intézkedéseket.
          </p>
          <p>Az érintettet nem kell tájékoztatni, ha a következő feltételek bármelyike teljesül:</p>
          <ul>
            <li>
              az adatkezelő
              <strong> megfelelő technikai és szervezési védelmi intézkedéseket hajtott végre </strong>, és ezeket az
              intézkedéseket az adatvédelmi incidens által érintett adatok tekintetében alkalmazták, különösen azokat az
              intézkedéseket - mint például a titkosítás alkalmazása -, amelyek a személyes adatokhoz való hozzáférésre
              fel nem jogosított személyek számára
              <strong> értelmezhetetlenné teszik az adatokat; </strong>
            </li>
            <li>
              az adatkezelő az adatvédelmi incidenst követően olyan további intézkedéseket tett, amelyek
              <strong>
                biztosítják, hogy az érintett jogaira és szabadságaira jelentett, magas kockázat a továbbiakban
                valószínűsíthetően nem valósul meg
              </strong>
              ;
            </li>
            <li>
              a tájékoztatás
              <strong> aránytalan erőfeszítést tenne szükségessé </strong>. Ilyen esetekben az érintetteket nyilvánosan
              közzétett információk útján kell tájékoztatni, vagy olyan hasonló intézkedést kell hozni, amely biztosítja
              az érintettek hasonlóan hatékony tájékoztatását.
            </li>
          </ul>
          <p>
            Ha az adatkezelő még nem értesítette az érintettet az adatvédelmi incidensről, a felügyeleti hatóság, miután
            mérlegelte, hogy az adatvédelmi incidens valószínűsíthetően magas kockázattal jár-e, elrendelheti az
            érintett tájékoztatását.
          </p>
          <h3>Adatvédelmi incidens bejelentése a hatóságnak</h3>
          <p>
            Az adatvédelmi incidenst az adatkezelő indokolatlan késedelem nélkül, és ha lehetséges, legkésőbb 72 órával
            azután, hogy az adatvédelmi incidens a tudomására jutott, bejelenti az 55. cikk alapján illetékes
            felügyeleti hatóságnak, kivéve, ha az adatvédelmi incidens valószínűsíthetően nem jár kockázattal a
            természetes személyek jogaira és szabadságaira nézve. Ha a bejelentés nem történik meg 72 órán belül,
            mellékelni kell hozzá a késedelem igazolására szolgáló indokokat is
          </p>
          <h3>Panasztételi lehetőség</h3>
          <p>
            Az adatkezelő esetleges jogsértése ellen panasszal a Nemzeti Adatvédelmi és Információszabadság Hatóságnál
            lehet élni:
          </p>
          <p>Nemzeti Adatvédelmi és Információszabadság Hatóság</p>
          <p>1125 Budapest, Szilágyi Erzsébet fasor 22/C.</p>
          <p>Levelezési cím: 1530 Budapest, Postafiók: 5.</p>
          <p>Telefon: +36 -1-391-1400</p>
          <p>Fax: +36-1-391-1410</p>
          <p>
            E-mail:
            <a href='mailto:ugyfelszolgalat@naih.hu'> ugyfelszolgalat@naih.hu </a>
          </p>
          <p>A tájékoztató elkészítése során figyelemmel voltunk az alábbi jogszabályokra:</p>
          <ul>
            <li>
              A természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok
              szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi
              rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.)
            </li>
            <li>
              2011. évi CXII. törvény - az információs önrendelkezési jogról és az információszabadságról (a
              továbbiakban: Infotv.)
            </li>
            <li>
              2001. évi CVIII. törvény - az elektronikus kereskedelmi szolgáltatások, valamint az információs
              társadalommal összefüggő szolgáltatások egyes kérdéseiről (főképp a 13/A. §-a)
            </li>
            <li>
              2008. évi XLVII. törvény - a fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról;
            </li>
            <li>
              2008. évi XLVIII. törvény - a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól
              (különösen a 6.§-a)
            </li>
            <li>2005. évi XC. törvény az elektronikus információszabadságról</li>
            <li>2003. évi C. törvény az elektronikus hírközlésről (kifejezetten a 155.§-a)</li>
            <li>
              16/2011. sz. vélemény a viselkedésalapú online reklám bevált gyakorlatára vonatkozó EASA/IAB-ajánlásról
            </li>
            <li>
              A Nemzeti Adatvédelmi és Információszabadság Hatóság ajánlása az előzetes tájékoztatás adatvédelmi
              követelményeiről
            </li>
            <li>
              Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (2016. április 27.) a természetes személyeknek a
              személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint
              a 95/46/EK rendelet hatályon kívül helyezéséről
            </li>
          </ul>
          <p>
            A jelen adatkezelési szabályzat a <a href='https://www.sawin.hu/'>www.sawin.hu</a>
            weboldalra és a <a href='https://www.sawin-energy.hu/'> www.sawinenergy.hu </a>
            webáruházba valamint az Adatkezelők egyéb elektronikus és nem elektronikus értékesítési felületeire a
            látogatók által önkéntes hozzájárulással megadott adatok tárolására és kezelésére vonatkozik.
          </p>
          <p>
            Az adatok kezelését és feldolgozását az Adatkezelő és a közreműködő végzik. Az adatokat az adatkezelő
            harmadik személynek, - kivételt képeznek ez alól az értékesítési felületre látogató vevő által igénybe vett,
            az adatkezelő értékesítési csatornáival összekacsolt pénzügyi szolgáltatók, - a nem adjuk ki, azokat
            kizárólag az adatkezelő által az ügyfél külön hozzájárulásával megküldött hírlevelek megküldésére, az ezzel
            kapcsolatos írásbeli tájékoztatás fenntartására használja.
          </p>
          <h2>Vonatkozó jogszabályok</h2>
          <p>
            Az adatkezelő kötelezettséget vállal arra, hogy ez irányú tevékenységét a mindenkor hatályos jogszabályok
            szerint végzi. Ezek a jelen dokumentum kiadásakor az alábbiak:
          </p>
          <ul>
            <li>
              2001.évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal
              összefüggő szolgáltatások egyes kérdéseiről (a továbbiakban: elektronikus kereskedelmi törvény).
            </li>
            <li>
              2001.évi XLVIII. törvény a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól (a
              továbbiakban: gazdasági reklámtörvény).
            </li>
            <li>
              2001.évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról. A jogszabály
              legfrissebb állapota elérhető a net.jogtar.hu oldalán, ide kattintva.
            </li>
          </ul>
          <h2>Fogalmak</h2>
          <p>2001.évi CXII. törvény 3. § alapján</p>
          <p>
            érintett: bármely meghatározott, személyes adat alapján azonosított vagy - közvetlenül vagy közvetve -
            azonosítható természetes személy;
          </p>
          <p>
            személyes adat: az érintettel kapcsolatba hozható adat - különösen az érintett neve, azonosító jele,
            valamint egy vagy több fizikai, fiziológiai, mentális, gazdasági, kulturális vagy szociális azonosságára
            jellemző ismeret -, valamint az adatból levonható, az érintettre vonatkozó következtetés;
          </p>
          <p>különleges adat:</p>
          <ul>
            <li>
              a faji eredetre, a nemzeti és etnikai kisebbséghez tartozásra, a politikai véleményre vagy pártállásra, a
              vallásos vagy más világnézeti meggyőződésre, az érdek-képviseleti szervezeti tagságra, a szexuális életre
              vonatkozó személyes adat,
            </li>
            <li>
              az egészségi állapotra, a kóros szenvedélyre vonatkozó személyes adat, valamint a bűnügyi személyes adat;
            </li>
          </ul>
          <p>
            bűnügyi személyes adat: a büntetőeljárás során vagy azt megelőzően a bűncselekménnyel vagy a
            büntetőeljárással összefüggésben, a büntetőeljárás lefolytatására, illetve a bűncselekmények felderítésére
            jogosult szerveknél, továbbá a büntetés-végrehajtás szervezeténél keletkezett, az érintettel kapcsolatba
            hozható, valamint a büntetett előéletre vonatkozó személyes adat;
          </p>
          <p>
            közérdekű adat: az állami vagy helyi önkormányzati feladatot, valamint jogszabályban meghatározott egyéb
            közfeladatot ellátó szerv vagy személy kezelésében lévő és tevékenységére vonatkozó vagy közfeladatának
            ellátásával összefüggésben keletkezett, a személyes adat fogalma alá nem eső, bármilyen módon vagy formában
            rögzített információ vagy ismeret, függetlenül kezelésének módjától, önálló vagy gyűjteményes jellegétől,
            így különösen a hatáskörre, illetékességre, szervezeti felépítésre, szakmai tevékenységre, annak
            eredményességére is kiterjedő értékelésére, a birtokolt adatfajtákra és a működést szabályozó
            jogszabályokra, valamint a gazdálkodásra, a megkötött szerződésekre vonatkozó adat;
          </p>
          <p>
            közérdekből nyilvános adat: a közérdekű adat fogalma alá nem tartozó minden olyan adat, amelynek
            nyilvánosságra hozatalát, megismerhetőségét vagy hozzáférhetővé tételét törvény közérdekből elrendeli;
          </p>
          <p>
            hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson
            alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok - teljes körű vagy
            egyes műveletekre kiterjedő - kezeléséhez;
          </p>
          <p>
            tiltakozás: az érintett nyilatkozata, amellyel személyes adatainak kezelését kifogásolja, és az adatkezelés
            megszüntetését, illetve a kezelt adatok törlését kéri;
          </p>
          <p>
            adatkezelő: az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki
            vagy amely önállóan vagy másokkal együtt az adatok kezelésének célját meghatározza, az adatkezelésre
            (beleértve a felhasznált eszközt) vonatkozó döntéseket meghozza és végrehajtja, vagy az általa megbízott
            adatfeldolgozóval végrehajtatja;
          </p>
          <p>
            adatkezelés: az alkalmazott eljárástól függetlenül az adatokon végzett bármely művelet vagy a műveletek
            összessége, így különösen gyűjtése, felvétele, rögzítése, rendszerezése, tárolása, megváltoztatása,
            felhasználása, lekérdezése, továbbítása, nyilvánosságra hozatala, összehangolása vagy összekapcsolása,
            zárolása, törlése és megsemmisítése, valamint az adatok további felhasználásának megakadályozása, fénykép-,
            hang- vagy képfelvétel készítése, valamint a személy azonosítására alkalmas fizikai jellemzők (pl. ujj- vagy
            tenyérnyomat, DNS-minta, íriszkép) rögzítése;
          </p>
          <p>adattovábbítás: az adat meghatározott harmadik személy számára történő hozzáférhetővé tétele;</p>
          <p>nyilvánosságra hozatal: az adat bárki számára történő hozzáférhetővé tétele;</p>
          <p>adattörlés: az adatok felismerhetetlenné tétele oly módon, hogy a helyreállításuk többé nem lehetséges;</p>
          <p>adatmegjelölés: az adat azonosító jelzéssel ellátása annak megkülönböztetése céljából;</p>
          <p>
            adatzárolás: az adat azonosító jelzéssel ellátása további kezelésének végleges vagy meghatározott időre
            történő korlátozása céljából;
          </p>
          <p>adatmegsemmisítés: az adatokat tartalmazó adathordozó teljes fizikai megsemmisítése;</p>
          <p>
            adatfeldolgozás: az adatkezelési műveletekhez kapcsolódó technikai feladatok elvégzése, függetlenül a
            műveletek végrehajtásához alkalmazott módszertől és eszköztől, valamint az alkalmazás helyétől, feltéve hogy
            a technikai feladatot az adatokon végzik;
          </p>
          <p>
            adatfeldolgozó: az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet,
            aki vagy amely az adatkezelővel kötött szerződése alapján - beleértve a jogszabály rendelkezése alapján
            történő szerződéskötést is - adatok feldolgozását végzi;
          </p>
          <p>
            adatfelelős: az a közfeladatot ellátó szerv, amely az elektronikus úton kötelezően közzéteendő közérdekű
            adatot előállította, illetve amelynek a működése során ez az adat keletkezett;
          </p>
          <p>
            adatközlő: az a közfeladatot ellátó szerv, amely - ha az adatfelelős nem maga teszi közzé az adatot - az
            adatfelelős által hozzá eljuttatott adatait honlapon közzéteszi;
          </p>
          <p>adatállomány: az egy nyilvántartásban kezelt adatok összessége;</p>
          <p>
            harmadik személy: olyan természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet,
            aki vagy amely nem azonos az érintettel, az adatkezelővel vagy az adatfeldolgozóval;
          </p>
          <p>
            EGT-állam: az Európai Unió tagállama és az Európai Gazdasági Térségről szóló megállapodásban részes más
            állam, továbbá az az állam, amelynek állampolgára az Európai Unió és tagállamai, valamint az Európai
            Gazdasági Térségről szóló megállapodásban nem részes állam között létrejött nemzetközi szerződés alapján az
            Európai Gazdasági Térségről szóló megállapodásban részes állam állampolgárával azonos jogállást élvez;
          </p>
          <p>harmadik ország: minden olyan állam, amely nem EGT-állam.</p>
          <h2>Adatkezelési alapelvek a SaWin Energy Kft adatkezelése során</h2>
          <p>Személyes adat akkor kezelhető, ha</p>
          <ul>
            <li>ahhoz az érintett hozzájárul, vagy</li>
            <li>
              azt törvény vagy - törvény felhatalmazása alapján, az abban meghatározott körben - helyi önkormányzat
              rendelete elrendeli.
            </li>
          </ul>
          <p>
            Cselekvőképtelen és korlátozottan cselekvőképes kiskorú személy nyilatkozatához a törvényes képviselőjének
            hozzájárulása szükséges, kivéve azon szolgáltatás részeket, ahol a nyilatkozat a mindennapi életben
            tömegesen előforduló regisztrációt céloz, és különösebb megfontolást nem igényel.
          </p>
          <p>
            Személyes adatot kezelni csak meghatározott célból, jog gyakorlása és kötelezettség teljesítése érdekében
            lehet. Az adatkezelésnek minden szakaszában meg kell felelnie e célnak.
          </p>
          <p>
            Csak olyan személyes adat kezelhető, amely az adatkezelés céljának megvalósulásához elengedhetetlen, a cél
            elérésére alkalmas, csak a cél megvalósulásához szükséges mértékben és ideig.
          </p>
          <p>Személyes adat csak megfelelő tájékoztatáson alapuló beleegyezéssel kezelhető.</p>
          <p>
            Az érintettet - egyértelműen, közérthetően és részletesen - tájékoztatni kell az adatai kezelésével
            kapcsolatos minden tényről, így különösen az adatkezelés céljáról és jogalapjáról, az adatkezelésre és az
            adatfeldolgozásra jogosult személyéről, az adatkezelés időtartamáról, illetve arról, hogy kik ismerhetik meg
            az adatokat. A tájékoztatásnak ki kell terjednie az érintett adatkezeléssel kapcsolatos jogaira és
            jogorvoslati lehetőségeire is.
          </p>
          <p>A kezelt személyes adatoknak meg kell felelniük az alábbi követelményeknek:</p>
          <ul>
            <li>felvételük és kezelésük tisztességes és törvényes;</li>
            <li>pontosak, teljesek és ha szükséges időszerűek;</li>
            <li>
              tárolásuk módja alkalmas arra, hogy az érintettet csak a tárolás céljához szükséges ideig lehessen
              azonosítani.
            </li>
          </ul>
          <p>Korlátozás nélkül használható, általános és egységes személyazonosító jel alkalmazása tilos.</p>
          <p>
            A személyes adatok akkor továbbíthatók, valamint a különböző adatkezelések akkor kapcsolhatók össze, ha az
            érintett ahhoz hozzájárult, vagy törvény azt megengedi, és ha az adatkezelés feltételei minden egyes
            személyes adatra nézve teljesülnek.
          </p>
          <p>
            Személyes adat (beleértve a különleges adatot is) az országból - az adathordozótól vagy az adatátvitel
            módjától függetlenül - harmadik országban lévő adatkezelő vagy adatfeldolgozó részére akkor továbbítható, ha
            ahhoz az érintett kifejezetten hozzájárult, vagy azt törvény lehetővé teszi, és a harmadik országban az
            átadott adatok kezelése, illetőleg feldolgozása során biztosított a személyes adatok megfelelő szintű
            védelme. Az EGT-államokba irányuló adattovábbítást úgy kell tekinteni, mintha a Magyar Köztársaság területén
            belüli adattovábbításra kerülne sor.
          </p>
          <p>A penzugyeinkrol.hu oldalon kezelt személyes adatok, az adatkezelés célja és időtartama</p>
          <p>Az adatkezelő megnevezése: SaWin Energy Kft.</p>
          <p>
            Az adatkezelés megnevezése: SaWin Energy Kft. által folytatott elektronikus és nem elektronikus értékesítési
            csatornák és weboldal.
          </p>
          <p>
            Az adatkezelés célja: tájékoztatás, oktatás , energetikai beruházás tervezéssel és kivitelezéssel összefüggő
            tevékenységek és egyéb tartalmak.
          </p>
          <p>Az adatkezelés jogalapja: Az érintett önkéntes hozzájárulása (2011. évi CXII. törvény 5. § (1) a))</p>
          <p>A tényleges adatkezelés helye: elektronikus adathordozókon és szerveren</p>
          <p>Az adatkezelés automatizáltsága: gépi</p>
          <p>
            Az adatok törlési határideje: Az ügylet befejezése illetve a feliratkozó önkéntes törlési kérelme, melyet
            minden hírlevél végéhez csatolt linken, önállóan megtehet.
          </p>
          <p>Az érintettek köre: ügyfelek, vevők és hírlevélre feliratkozók.</p>
          <p>Az adatkezelő adatai, elérhetősége</p>
          <p>Név: SaWin Energy Kft.</p>
          <p>Cím: 1051 Budapest Nádor utca 11.</p>
          <p>Adószám: 10436253-2-42</p>
          <p>Adatkezelés nyilvántartási száma: NAIH-105439/2016.</p>
          <p>Telefon: +36 70 618 91 51</p>
          <p>
            <a href='mailto:Email: info@sawin.hu'> Email: info@sawin.hu </a>
          </p>
          <h2>Jogorvoslat</h2>
          <p>
            Az érintett tájékoztatást kérhet személyes adatai kezeléséről, valamint kérheti személyes adatainak
            helyesbítését, illetve - a jogszabályban elrendelt adatkezelések kivételével - törlését az adatfelvételénél
            jelzett módon, illetve az adatkezelő ügyfélszolgálata útján.
          </p>
          <p>
            Az érintett kérelmére az adatkezelő tájékoztatást ad az általa kezelt adatairól, az adatkezelés céljáról,
            jogalapjáról, időtartamáról, az adatfeldolgozó nevéről, címéről (székhelyéről) és az adatkezeléssel
            összefüggő tevékenységéről, továbbá arról, hogy kik és milyen célból kapják vagy kapták meg az adatokat. Az
            adatkezelő a kérelem benyújtásától számított legrövidebb idő alatt, legfeljebb azonban 30 napon belül
            írásban, közérthető formában adja meg a tájékoztatást. E tájékoztatás ingyenes, ha a tájékoztatást kérő a
            folyó évben azonos területre vonatkozó tájékoztatási kérelmet az adatkezelőhöz még nem nyújtott be. Egyéb
            esetekben az adatkezelő költségtérítést állapíthat meg.
          </p>
          <p>
            Az adatkezelő a személyes adatot törli, ha kezelése jogellenes, az érintett kéri, az adatkezelés célja
            megszűnt, vagy az adatok tárolásának törvényben meghatározott határideje lejárt, azt a bíróság vagy az
            adatvédelmi biztos elrendelte.
          </p>
          <p>
            Az adatkezelő a helyesbítésről és a törlésről az érintettet, továbbá mindazokat értesíti, akiknek korábban
            az adatot adatkezelés céljára továbbították. Az értesítést mellőzi, ha ez az adatkezelés céljára való
            tekintettel az érintett jogos érdekét nem sérti.
          </p>
          <p>Az érintett tiltakozhat személyes adatának kezelése ellen, ha</p>
          <ul>
            <li>
              a személyes adatok kezelése (továbbítása) kizárólag az adatkezelő vagy az adatátvevő jogának vagy jogos
              érdekének érvényesítéséhez szükséges, kivéve, ha az adatkezelést törvény rendelte el;
            </li>
            <li>
              a személyes adat felhasználása vagy továbbítása közvetlen üzletszerzés, közvélemény-kutatás vagy
              tudományos kutatás céljára történik;
            </li>
            <li>a tiltakozás jogának gyakorlását egyébként törvény lehetővé teszi.</li>
          </ul>
          <p>
            Az adatkezelő - az adatkezelés egyidejű felfüggesztésével - a tiltakozást a kérelem benyújtásától számított
            legrövidebb időn belül, de legfeljebb 15 nap alatt megvizsgálja, és annak eredményéről a kérelmezőt írásban
            tájékoztatja. Amennyiben a tiltakozás indokolt, az adatkezelő az adatkezelést - beleértve a további
            adatfelvételt és adattovábbítást is - megszünteti, és az adatokat zárolja, valamint a tiltakozásról,
            illetőleg az annak alapján tett intézkedésekről értesíti mindazokat, akik részére a tiltakozással érintett
            személyes adatot korábban továbbította, és akik kötelesek intézkedni a tiltakozási jog érvényesítése
            érdekében.
          </p>
          <p>
            Amennyiben az érintett az adatkezelőnek a meghozott döntésével nem ért egyet, az ellen - annak közlésétől
            számított 30 napon belül - bírósághoz fordulhat.
          </p>
          <p>
            Az adatkezelő az érintett adatát nem törölheti, ha azt az adatkezelést törvény rendelte el. Az adat azonban
            nem továbbítható az adatátvevő részére, ha az adatkezelő egyetértett a tiltakozással, illetőleg a bíróság a
            tiltakozás jogosságát megállapította.
          </p>
          <p>
            Az érintett a jogainak megsértése esetén az adatkezelő ellen bírósághoz fordulhat. A bíróság az ügyben soron
            kívül jár el.
          </p>
          <p>Jogorvoslati lehetőséggel, panasszal a Nemzeti Adatvédelmi és Információs Hatóságnál lehet élni:</p>
          <p>Név: Nemzeti Adatvédelmi és Információs Hatóság</p>
          <p>Székhely: 1125 Budapest Szilágyi Erzsébet fasor 22/c.</p>
          <p>Postacím: 1530 Budapest, Pf.: 5.</p>
          <p>Telefon: +36 (1) 391-1400</p>
          <p>Fax: +36 (1) 391-1410</p>
          <p>Honlap: https://naih.hu</p>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Privacy;
