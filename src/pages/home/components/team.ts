import tomi from '../../../assets/images/home/team/tomi3.png';
import dave from '../../../assets/images/home/team/dave.jpg';
import gabi from '../../../assets/images/home/team/gabi.jpg';
import kolos from '../../../assets/images/home/team/kolos.jpg';
import laci from '../../../assets/images/home/team/laci.png';
import mahan from '../../../assets/images/home/team/mahan.jpg';
import marcus from '../../../assets/images/home/team/marcus.jpg';
import moni from '../../../assets/images/home/team/moni.jpg';

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
      'A Sawin alapítója, aki jogászként, üzletemberként és műszaki szakemberkén a kereskedelem, a vendéglátás a turizmus, a hűtéstechnológia, az építőipar és az ingatlanfejlesztés területén hozott létre sikeres vállalkozásokat. Minden siker után új dologba fogott, hogy fejlessze magát, újabb vállalkozásokban próbálja ki és fejlessze képességeit.  Ezekkel a tapasztalatokkal kezdett bele egy, az Energiahatékonyságot széles tömegek számára elérhető vállalkozás létrehozásába.  Elhivatott a természeti és környezetvédelmi hasznosság iránt. Elhatározása, a Tanácsadást és segítség nyújtás ingyenessé tevő üzleti vállalkozás létrehozása, ahol a profit és a társadalmi hasznosság kéz a kézben járnak. Ez a Sawin!',
    ],
  },
];

export const teamMembers: ITeamMember[] = [
  {
    name: 'Horváth Márkus',
    role: 'Ügyvezető, operatív vezető',
    email: 'marcus@sawin.hu',
    img: marcus,
    bio: [
      'A Sawin alapítótársa, ügyvezetője. A Corvinus Egyetemen végzett közgazdász. Szakterülete az üzleti működés digitalizációja. Fejlesztette és működteti a Sawin vállalatirányítási rendszerét, koordinálja és ellenőrzi az üzletviteli folyamatokat, azon belül a Back Office és a Projekt Managerek munkáját. Nagy munkabírású, erőssége a precizitás és a harmonikus ügyfélkapcsolatok megteremtése.',
    ],
  },
  {
    name: 'Jakab Dávid',
    role: 'Cégvezető, műszaki vezető',
    email: 'dave@sawin.hu',
    img: dave,
    bio: [
      'A Sawin alapítótársa és cégvezetője. A Corvinus Egyetemen végzett közgazdász Manager. A Sawin kivitelezési üzletágának vezetője, aki aktív részese volt az innovatív műszaki megoldásaink kifejlesztésének ő a Sawin nemzetközi partnerkapcsolatainak megteremtője és irányítója, továbbá ő határozza meg a Sawin Marketing stratégiáját is. Erőssége a kreativitás a kapcsolatteremtés és az alaposság minden műszaki területen.',
    ],
  },
  {
    name: 'Fodor Mónika',
    role: 'Értékesítési vezető',
    email: 'fodor.monika@sawin.hu',
    img: moni,
    bio: [
      'Több évtizedes tapasztalata van, az ingatlanszakma minden területén jártas. Az ingatlanüzemeltetést követően ingatlan fejlesztéssel, majd az elmúlt 15 évben ingatlan értékesítéssel foglalkozott. A Sawin szíve, a Tanácsadók vezetője, az energiahatékony ingatlanértékesítés irányítója, a Faluprogram egyik megálmodója és kidolgozója. Született vezetőként irányítja az értékesítési üzletágat. Erőssége az empátia és a kreativitás, ami következetességgel párosul.',
    ],
  },
  { name: 'Kovács László', role: 'Hőszigetelési üzletág vezető', email: 'laci@sawin.hu', img: laci },

  {
    name: 'Shafiei Mahan',
    role: 'Fejlesztési vezető',
    email: 'mahan@sawin.hu',
    img: mahan,
    bio: [
      'Fejlesztési vezetőként Mahan a Sawin innovatív szoftvermegoldásainak mozgatórugója. Gépészmérnöki modellezés szakon szerzett mesterdiplomát a Budapesti Műszaki és Gazdaságtudományi Egyetemen, ami specializált, modellalapú fejlesztési szemléletet biztosít számára. Kulcsszerepet játszott a vállalat szoftverfolyamatainak rendszerezésében, és a nagy teljesítményű Impact energiahatékonysági szoftver egyik kulcsfontosságú fejlesztője volt. Jelenleg tehetséges tervezőcsapatunk élén áll, és olyan megoldások létrehozásán dolgozik, amelyek egyszerre intelligensek és hatékonyak.',
    ],
  },
  {
    name: 'Hajdu Kolos',
    role: 'Szoftver és IOT vezető',
    email: 'kolos@sawin.hu',
    img: kolos,
    bio: [
      'Már gimnáziumi évei alatt csatlakozott a Sawin csapatához. Ma Ő a Sawin szoftver fejlesztője és feltalálótársa az Easy Electrics rendszereknek is. Budapesti Műszaki és Gazdaságtudományi Egyetem hallgatója, ahol tökéletesíti tudását a számítástechnika és elektronika területén.',
    ],
  },
  {
    name: 'Perness Norbert',
    role: 'Technikai vezető',
    email: 'perness@sawin.hu',
    bio: [
      'Az Iparművészeti Egyetemen végzett Fotós, Vizuális szakember, a drónozás szerelmese a Széchenyi István Egyetem Drón Laboratóriumának alapítója, Tanár, Drón-pilóta kiképző, Média személyiség, a Sawin Technikai Divíziójának vezetője. A fotózásban, videók készítésében és drónozásban a legjobb szakemberek közé tartozik. Magas szintű képzettsége és nagy tapasztalata van a fotó geometriai és lidar fájlok feldolgozásában, 3D modellek készítésében.',
    ],
  },
  { name: 'Vesztergom Gábor', role: 'Gépész szakmai vezető', email: 'gabi@sawin.hu', img: gabi },
];
