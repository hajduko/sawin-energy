import { Badge, Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import cta_bg from '../../../assets/cta_bg.png';
import building from '../../../assets/building.svg';
import lightning from '../../../assets/lightning.svg';
import bar_chart_square from '../../../assets/bar-chart-square.svg';
import coins_hand from '../../../assets/coins-hand.svg';
import tender from '../../../assets/tender.svg';

const HeatPumpCTA1 = () => {
  return (
    <Flex bg='#ebedf0' justify='center' pb={20}>
      <Box
        bgImage={`url(${cta_bg})`}
        width={{ base: '100%', lg: '76rem' }}
        bgRepeat='no-repeat'
        minH='425px'
        overflow='hidden'>
        <Box bgGradient={'linear-gradient(to right, #062617CC, #40F29A14)'} h='100%' w='100%' rounded='2xl' p={12}>
          <Grid
            templateColumns={{
              base: '1fr',
              lg: '5fr 4fr',
            }}
            height='100%'
            gap={6}>
            <GridItem colSpan={1}>
              <Flex flexDirection={'column'} h='100%' justify='space-between'>
                <Heading as='h2' size='md' fontWeight='600' color='light'>
                  Energetikai tanácsadás
                </Heading>
                <Heading as='h3' size='5xl' fontWeight='600' color='white' letterSpacing='wide'>
                  Dönts magabiztosan
                </Heading>
                <Text fontSize='lg' color='white' fontWeight='500'>
                  Minden ajánlatunk mellé teljeskörű energetikai tanácsadást, illetve átfogó energetikai és beruházási
                  számításokat is adunk, hogy valóban tudatos döntést hozhass!
                </Text>
                <Button
                  size='2xl'
                  bg='accent'
                  w={'fit-content'}
                  rounded={'8px'}
                  fontSize='lg'
                  fontWeight='600'
                  color='dark'>
                  Jelentkezem a tanácsadásra!
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex wrap={'wrap'} gap={2}>
                <Badge
                  height='75px'
                  fontSize='sm'
                  fontWeight='500'
                  px={2}
                  color='dark'
                  bgColor='light'
                  flexGrow={1}
                  rounded='8px'
                  justifyContent='center'>
                  <Image src={building} pr={2} />
                  Épületenergetikai méretezés
                </Badge>
                <Badge
                  height='75px'
                  fontSize='sm'
                  fontWeight='500'
                  px={2}
                  color='dark'
                  bgColor='light'
                  flexGrow={1}
                  rounded='8px'
                  justifyContent='center'>
                  <Image src={lightning} pr={2} />
                  Energetikai besorolás
                </Badge>
                <Badge
                  height='75px'
                  fontSize='sm'
                  fontWeight='500'
                  px={2}
                  color='dark'
                  bgColor='light'
                  flexGrow={1}
                  rounded='8px'
                  justifyContent='center'>
                  <Image src={bar_chart_square} pr={2} />
                  Rezsiköltség elemzés
                </Badge>
                <Badge
                  height='75px'
                  fontSize='sm'
                  fontWeight='500'
                  px={2}
                  color='dark'
                  bgColor='light'
                  flexGrow={1}
                  rounded='8px'
                  justifyContent='center'>
                  <Image src={coins_hand} pr={2} />
                  Megtérülés számítás
                </Badge>
                <Badge
                  height='75px'
                  fontSize='sm'
                  fontWeight='500'
                  px={2}
                  color='dark'
                  bgColor='light'
                  flexGrow={1}
                  rounded='8px'
                  justifyContent='center'>
                  <Image src={tender} pr={2} />
                  Pályázati és finanszírozási tanácsadás
                </Badge>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default HeatPumpCTA1;
