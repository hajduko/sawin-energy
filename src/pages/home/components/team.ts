import tomi from '../../../assets/images/home/team/tomi3.png';
import dave from '../../../assets/images/home/team/dave.jpg';
import gabi from '../../../assets/images/home/team/gabi.jpg';
import kolos from '../../../assets/images/home/team/kolos.jpg';
import laci from '../../../assets/images/home/team/laci.png';
import mahan from '../../../assets/images/home/team/mahan.jpg';
import marcus from '../../../assets/images/home/team/marcus.jpg';
import moni from '../../../assets/images/home/team/moni.jpg';
import norbi from '../../../assets/images/home/team/norbi.jpg';

export interface ITeamMember {
  name: string;
  role: string;
  img?: string;
  email?: string;
  bio?: string[];
}

export interface IHighlightTeamMember extends ITeamMember {
  quote: string;
}

export const highlightTeamMembers: IHighlightTeamMember[] = [
  {
    name: 'Dr. Jakab Tamás',
    role: 'Alapító',
    email: 'drjakab@sawin.hu',
    img: tomi,
    quote:
      'A mi Impact üzletünkben a társadalmi és környezeti hasznosság és a profit kéz a kézben járnak. Nem a GDP, hanem a GNH, az Össznemzeti Boldogság indexét akarjuk növelni.',
    bio: [
      'A SaWin alapítója, aki jogászként, üzletemberként és műszaki szakemberként a kereskedelem, a vendéglátás a turizmus, a hűtéstechnológia, az építőipar és az ingatlanfejlesztés területén hozott létre sikeres vállalkozásokat.',
      'Minden siker után új dologba fogott, hogy fejlessze magát, újabb vállalkozásokban próbálja ki és fejlessze képességeit. Ezekkel a tapasztalatokkal kezdett bele egy, az Energiahatékonyságot széles tömegek számára elérhető vállalkozás létrehozásába.',
      'Elhivatott a természeti és környezetvédelmi hasznosság iránt. Elhatározása, a Tanácsadást és segítség nyújtás ingyenessé tevő üzleti vállalkozás létrehozása, ahol a profit és a társadalmi hasznosság kéz a kézben járnak. Ez a SaWin!',
    ],
  },
];

export const teamMembers: ITeamMember[] = [
  {
    name: 'Horváth Márkus',
    role: 'Ügyvezető, Operatív vezető',
    email: 'marcus@sawin.hu',
    img: marcus,
    bio: [
      'A SaWin alapítótársa, ügyvezetője. A Corvinus Egyetemen végzett közgazdász.',
      'Szakterülete az üzleti működés digitalizációja. Fejlesztette és működteti a SaWin vállalatirányítási rendszerét, koordinálja és ellenőrzi az üzletviteli folyamatokat, azon belül a Back Office és a Projekt Managerek munkáját.',
      'Nagy munkabírású, erőssége a precizitás és a harmonikus ügyfélkapcsolatok megteremtése.',
    ],
  },
  {
    name: 'Jakab Dávid',
    role: 'Cégvezető, Műszaki vezető',
    email: 'dave@sawin.hu',
    img: dave,
    bio: [
      'A SaWin alapítótársa és cégvezetője. A Corvinus Egyetemen végzett közgazdász Manager.',
      'A SaWin kivitelezési üzletágának vezetője, aki aktív részese volt az innovatív műszaki megoldásaink kifejlesztésének. Ő a SaWin nemzetközi partnerkapcsolatainak megteremtője és irányítója, továbbá ő határozza meg a SaWin Marketing stratégiáját is.',
      'Erőssége a kreativitás a kapcsolatteremtés és az alaposság minden műszaki területen.',
    ],
  },
  {
    name: 'Fodor Mónika',
    role: 'Értékesítési vezető',
    email: 'fodor.monika@sawin.hu',
    img: moni,
    bio: [
      'Több évtizedes tapasztalata van az ingatlanszakma minden területén. Az ingatlanüzemeltetést követően ingatlan fejlesztéssel, majd az elmúlt 15 évben ingatlan értékesítéssel foglalkozott.',
      'A SaWin szíve, a Tanácsadók vezetője, az energiahatékony ingatlanértékesítés irányítója, a Faluprogram egyik megálmodója és kidolgozója. Született vezetőként irányítja az értékesítési üzletágat.',
      'Erőssége az empátia és a kreativitás, ami következetességgel párosul.',
    ],
  },
  {
    name: 'Kovács László',
    role: 'Hőszigetelési üzletág vezető',
    email: 'laci@sawin.hu',
    img: laci,
    bio: [
      'Építőmérnök és közlekedésmérnök diplomával egy hőszigeteléssel foglalkozó családi vállalkozás volt az első munkahelye, ahol elméleti és gyakorlati tapasztalatot szerzett minden fajta épület hőszigetelésében és a vállalatirányításba is beletanult. Először párhuzamos tevékenységként, majd kizárólagosan szakértő Ingatlan Tanácsadóvá vált. 20 éve foglalkozik Ingatlan értékesítéssel, közben több alkalommal volt az ország legeredményesebb ingatlan értékesítője.',
      'Ezeket a tapasztalatot kamatoztatva lett a SaWin hőszigetelési üzletágának vezetője. Legfőbb feladata a SaWin által fejlesztett forradalmian új Easy Panel és Easy Facade hőszigetelési rendszerek piacra vezetése és egy kivitelezői hálózat felépítése.',
    ],
  },

  {
    name: 'Shafiei Mahan',
    role: 'Sawin Manufacturing vezető',
    email: 'mahan@sawin.hu',
    img: mahan,
    bio: [
      'Fejlesztési vezetőként Mahan a SaWin innovatív szoftvermegoldásainak mozgatórugója. Gépészmérnöki modellezés szakon szerzett mesterdiplomát a Budapesti Műszaki és Gazdaságtudományi Egyetemen.',
      'Kulcsszerepet játszott a vállalat szoftverfolyamatainak rendszerezésében, és a nagy teljesítményű Impact energiahatékonysági szoftver egyik kulcsfontosságú fejlesztője volt. Jelenleg tehetséges tervezőcsapatunk élén áll, és olyan megoldások létrehozásán dolgozik, amelyek egyszerre intelligensek és hatékonyak.',
    ],
  },
  {
    name: 'Hajdu Kolos',
    role: 'Electrics és IOT vezető',
    email: 'kolos@sawin.hu',
    img: kolos,
    bio: [
      'Már gimnáziumi évei alatt csatlakozott a SaWin csapatához. Ma Ő a SaWin szoftver fejlesztője és jelenleg megteremtés alatt álló Easy Electrics szakmai vezetője.',
      'Budapesti Műszaki és Gazdaságtudományi Egyetem hallgatója, ahol tökéletesíti tudását a számítástechnika és elektronika területén.',
    ],
  },
  {
    name: 'Perness Norbert',
    role: 'Technikai vezető',
    email: 'perness@sawin.hu',
    img: norbi,
    bio: [
      'Az Iparművészeti Egyetemen végzett Fotós, Vizuális szakember, a drónozás szerelmese a Széchenyi István Egyetem Drón Laboratóriumának alapítója, Tanár, Drón-pilóta kiképző, Média személyiség, a SaWin Technikai Divíziójának vezetője.',
      'A fotózásban, videók készítésében és drónozásban a legjobb szakemberek közé tartozik. Magas szintű képzettsége és nagy tapasztalata van a fotó geometriai és lidar fájlok feldolgozásában, 3D modellek készítésében.',
      'A SaWin forradalmian új épületfelmérési rendszerének kidolgózójaként a tervezőkkel és projekt mérnökökkel együttműködve irányítja a Technikai üzletágat.',
    ],
  },
  {
    name: 'Vesztergom Gábor',
    role: 'Gépészeti üzletág vezető',
    email: 'gabi@sawin.hu',
    img: gabi,
    bio: [
      'A gépészet minden területén nagy tapasztalattal rendelkező szakember, aki a tekintélyes múltú gépész családi vállalkozásban kezdte karrierjét. A SaWin csapatához történt csatlakozása előtt 8 évig Svédországban szerelt hőszivattyús rendszereket, majd vezette egy cég hőszivattyús üzletágat.',
      'Gábor erőssége a kreativitás, a problémák azonnali felmérése és azok gyors megoldása. Tapasztalata és személyisége alapján méltó vezetője a SaWin gépész diviziójának.',
    ],
  },
];
