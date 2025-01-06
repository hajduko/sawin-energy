import { Box, Flex, Grid, GridItem, Heading, IconButton, Image, Text, List } from '@chakra-ui/react';
import left_arrow from '../../../assets/left_arrow.svg';
import right_arrow from '../../../assets/right_arrow.svg';
import check_circle from '../../../assets/check-circle.svg';
import prod1 from '../../../assets/prod1.png';
import { useState } from 'react';

interface IProduct {
  name: string;
  id: number;
  img: string;
  props: IProductProp[];
}

interface IProductProp {
  title: string;
  desc: string;
}

const HeatPumpProducts = () => {
  const products: IProduct[] = [
    {
      name: 'Monoblokk hőszivattyú',
      id: 0,
      img: prod1,
      props: [
        { title: 'R32 vagy R290 gáz', desc: 'Magas- vagy alacsony hőmérsékletű rendszerekhez is!' },
        { title: '6-16 kW', desc: 'Kis és nagy alapterületű ingatlanok fűtése és hűtése is megoldható.' },
        { title: 'H tarifa', desc: 'Igazán alacsony fűtésszámla H tarifa kompatibilis készülékekkel.' },
      ],
    },
    {
      name: 'TODO 1',
      id: 1,
      img: prod1,
      props: [
        { title: 'R32 vagy R290 gáz', desc: 'Magas- vagy alacsony hőmérsékletű rendszerekhez is!' },
        { title: '6-16 kW', desc: 'Kis és nagy alapterületű ingatlanok fűtése és hűtése is megoldható.' },
      ],
    },
    {
      name: 'TODO 2',
      id: 2,
      img: prod1,
      props: [{ title: 'R32 vagy R290 gáz', desc: 'Magas- vagy alacsony hőmérsékletű rendszerekhez is!' }],
    },
  ];

  const [selectedId, setSelectedId] = useState<number>(0);

  const prev = () => (selectedId > 0 ? setSelectedId(selectedId - 1) : setSelectedId(products.length - 1));
  const next = () => (selectedId < products.length - 1 ? setSelectedId(selectedId + 1) : setSelectedId(0));

  return (
    <Flex bg='#ebedf0' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} mt={20}>
        <Heading as='h2' size='md' textAlign='center' fontWeight='600' color='primary'>
          Termékek
        </Heading>
        <Heading as='h3' size='5xl' textAlign='center' fontWeight='600' mb={6}>
          Egy megbízható hőszivattyús rendszer csak magas minőségű alapanyagokból készülhet!
        </Heading>
        {products.map((prod) => (
          <Box
            key={prod.id}
            display={prod.id === selectedId ? 'block' : 'none'}
            minH='450px'
            bgColor='white'
            rounded='2xl'
            p={6}>
            <Grid
              templateColumns={{
                base: '1fr',
                md: '1fr 2fr',
              }}
              minH='402px'
              gap={12}>
              <GridItem colSpan={1} display='flex' justifyContent='center' alignContent='center' flexDirection='column'>
                <Image
                  src={prod.img}
                  aspectRatio={1}
                  fit='contain'
                  border='2px solid'
                  borderColor='#D3D3D3'
                  rounded='xl'
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection='column' justify='space-between' h='100%'>
                  <Box>
                    <Text fontSize='5xl' fontWeight='600' mb={2}>
                      {prod.name}
                    </Text>
                    <List.Root variant='plain'>
                      <Flex minH='200px' maxH={{ base: '600px', lg: '200px' }} flexDirection='column' flexWrap='wrap'>
                        {prod.props.map((prop) => (
                          <List.Item key={prop.title} width={{ base: '100%', lg: '50%' }} mb={4}>
                            <List.Indicator asChild color='green.500'>
                              <Image src={check_circle} h='28px' w='28px' />
                            </List.Indicator>
                            <Text color='#475467' fontSize='lg'>
                              <Text as='span' fontWeight='600' color='#101828'>
                                {prop.title}
                              </Text>
                              <br />
                              {prop.desc}
                            </Text>
                          </List.Item>
                        ))}
                      </Flex>
                    </List.Root>
                  </Box>

                  <Flex justifyContent='right'>
                    <IconButton
                      rounded='full'
                      bgColor='white'
                      border='1px solid'
                      borderColor='primary'
                      h='56px'
                      w='56px'
                      mr={6}
                      onClick={prev}>
                      <Image src={left_arrow} />
                    </IconButton>
                    <IconButton rounded='full' bgColor='primary' h='56px' w='56px' onClick={next}>
                      <Image src={right_arrow} />
                    </IconButton>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default HeatPumpProducts;
