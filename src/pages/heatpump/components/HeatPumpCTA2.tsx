import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import cta_phone from '../../../assets/images/heatpump/cta_phone.png';
import cta_screen from '../../../assets/images/heatpump/cta_screen.png';

interface Props {
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => void;
}

const HeatPumpCTA2 = ({ dialogOpen, setDialogOpen }: Props) => {
  return (
    <Flex bg='#ebedf0' justify='center' pt={20} pb={20}>
      <Box
        bgColor='primary'
        width={{ base: '95%', lg: '76rem' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        minH='540px'
        overflow='hidden'
        rounded='2xl'
        p={12}
        position='relative'>
        <Flex
          flexDirection={'column'}
          h='100%'
          justify='space-between'
          width={{ base: '100%', md: '540px' }}
          zIndex={3}>
          <Box>
            <Heading as='h2' size='md' fontWeight='600' color='white'>
              Ingyenes pályázatírás
            </Heading>
            <Heading as='h3' size='5xl' fontWeight='600' color='white' zIndex={3} mb={{ base: '4', md: '0' }}>
              Élj a pályázati lehetőségekkel
            </Heading>
          </Box>
          <Text fontSize='xl' color='light' zIndex={3} mb={{ base: '4', md: '0' }}>
            Teljeskörű pályázati ügyintézést vállalunk, ha a hőszivattyús beruházásodat valamelyik elérhető támogatásból
            szeretnéd megvalósítani. Legyen szó az Energetikai otthonfelújítási támogatásról vagy a 3+3 milliós
            otthonfelújítási programról, tapasztalt kollégáink segítenek eligazodni a feltételek között.
          </Text>
          <Text fontSize='sm' color='light' zIndex={3} mb={{ base: '4', md: '0' }}>
            Csak egy gombnyomás és az összes pályázatokkal kapcsolatos kérdésedre választ kaphatsz!
          </Text>
          <Button
            size='2xl'
            bg='accent'
            w={{ base: '100%', md: 'fit-content' }}
            rounded={'8px'}
            fontSize='lg'
            fontWeight='600'
            color='dark'
            onClick={() => setDialogOpen(!dialogOpen)}
            zIndex={3}>
            Jelentkezem a tanácsadásra!
          </Button>
        </Flex>
        <Image
          src={cta_phone}
          display={{ base: 'none', md: 'block' }}
          opacity={{ base: '40%', lg: '100%' }}
          position='absolute'
          right={300}
          bottom={0}
          zIndex={2}
        />
        <Image
          src={cta_screen}
          display={{ base: 'none', md: 'block' }}
          opacity={{ base: '40%', lg: '100%' }}
          position='absolute'
          right={0}
          bottom={0}
          zIndex={1}
        />
      </Box>
    </Flex>
  );
};

export default HeatPumpCTA2;
