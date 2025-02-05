import { Box, Flex, Heading, IconButton, Image, Text, List } from '@chakra-ui/react';
import left_arrow from '../../../assets/icons/left_arrow.svg';
import right_arrow from '../../../assets/icons/right_arrow.svg';
import check_circle from '../../../assets/icons/check-circle.svg';
import { useState } from 'react';

interface IPosition {
  name: string;
  id: number;
  desc?: string;
  props: string[];
}

const RecruitmentPositions = () => {
  const products: IPosition[] = [
    {
      name: 'SaWin Tanácsadó',
      id: 0,
      desc: 'Közreműködnek a SaWin-nél jelentkező Ügyfelek szerződéseinek a megkötésében és SaWin támogatásával maguk is hoznak saját Ügyfeleket.',
      props: [
        'Alap vagy mesterképzésen tanuló egyetemistákat vagy pályakezdőket',
        'Bátor, jó kommunikációs képességgel rendelkező fiatalokat',
        'Előny, ha építész, gépész vagy management szakos hallgató vagy',
      ],
    },
    {
      name: 'SaWin Tervező',
      id: 1,
      desc: ' A SaWin IMPACT Energiahatékonysági Szoftverben beruházásokat terveznek (NEM RAJZOLÁSI FELADAT!) és azokat egyeztetik a Tanácsadókkal és Ügyfelekkel.',
      props: [
        'Alap vagy mesterképzésen tanuló egyetemistákat vagy pályakezdőket',
        'Bátor, jó kommunikációs képességgel rendelkező fiatalokat',
        'Előny, ha építész, gépész vagy management szakos hallgató vagy',
      ],
    },
    {
      name: 'SaWin Projekt Manager',
      id: 2,
      desc: 'A SaWin Vállalatirányítási rendszerben (ERP) irányítják és szervezik SaWin értékesítési és kivitelezési tevékenységét és azokat egyeztetik a Tanácsadókkal, Kivitelezőkkel és Ügyfelekkel.',
      props: [
        'Alap vagy mesterképzésen tanuló egyetemistákat vagy pályakezdőket',
        'Bátor, jó kommunikációs képességgel rendelkező fiatalokat',
        'Előny, ha építész, gépész vagy management szakos hallgató vagy',
      ],
    },
    {
      name: 'SaWin Vezető Tanácsadó',
      id: 3,
      desc: 'Csoportos, Kereskedelmi és Ipari ügyleteknél közreműködnek a SaWin-nél jelentkező Ügyfelek szerződéseinek a megkötésében és SaWin támogatásával maguk is hoznak saját Ügyfeleket. A Vezető Tanácsadók feladata SaWin külső Tanácsadók ilyen ügyleteinek szakmai lebonyolítása is.',
      props: [
        'Középkorú és idősebb, értékesítési tapasztalattal és/vagy kapcsolatrendszerrel rendelkező jó kommunikációs készségű diplomás munkatársakat',
        'Műszaki és Management ismeretek szükségesek, de bármilyen szakmából várunk jelentkezőket',
        'A szakmai tudás magas szintű elsajátítása a munkakör betöltésének előfeltétele, az oktatást SaWin biztosítja',
      ],
    },
    {
      name: 'Külső Tanácsadó',
      id: 4,
      desc: 'TODO',
      props: [
        'Energetikusokat',
        'Építész és Gépész Tervezőket',
        'Ingatlan tanácsadókat és szakértőket',
        'Biztosítási szakértőket',
        'Társasház kezelőket',
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState<number>(0);

  const prev = () => (selectedId > 0 ? setSelectedId(selectedId - 1) : setSelectedId(products.length - 1));
  const next = () => (selectedId < products.length - 1 ? setSelectedId(selectedId + 1) : setSelectedId(0));

  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '46rem' }} mt={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Pozíciók
        </Heading>
        <Heading as='h3' size={{ base: '4xl', sm: '5xl' }} textAlign='center' fontWeight='600' mb={6}>
          Kiket keresünk?
        </Heading>
        {products.map((prod) => (
          <Box
            key={prod.id}
            display={prod.id === selectedId ? 'block' : 'none'}
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            bgColor='white'
            rounded='2xl'
            p={6}>
            <Flex flexDirection='column' h='100%' minH='490px'>
              <Text fontSize='5xl' fontWeight='600' mb={4}>
                {prod.name}
              </Text>
              <Text fontSize='lg' mb={8} textAlign='justify' minH='108px'>
                {prod.desc}
              </Text>
              <Text fontSize='lg' mb={4} fontWeight='600'>
                Várunk:
              </Text>
              <List.Root variant='plain'>
                <Flex minH='200px' flexDirection='column'>
                  {prod.props.map((prop) => (
                    <List.Item key={prop} width='100%' mb={4}>
                      <List.Indicator asChild color='green.500'>
                        <Image src={check_circle} h='28px' w='28px' />
                      </List.Indicator>
                      <Text color='#101828' fontSize='lg'>
                        {prop}
                      </Text>
                    </List.Item>
                  ))}
                </Flex>
              </List.Root>
            </Flex>
            <Flex justifyContent='right'>
              <IconButton
                rounded='full'
                bgColor='white'
                border='1px solid'
                borderColor='primary'
                h='56px'
                w='56px'
                mr={6}
                onClick={prev}
                _hover={{ bgColor: 'accent', border: '0' }}>
                <Image src={left_arrow} />
              </IconButton>
              <IconButton
                rounded='full'
                bgColor='primary'
                h='56px'
                w='56px'
                onClick={next}
                _hover={{ bgColor: 'accent' }}>
                <Image src={right_arrow} />
              </IconButton>
            </Flex>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default RecruitmentPositions;
