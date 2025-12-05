import { Box, Flex, Grid, GridItem, Heading, Table, List, Text, Image } from '@chakra-ui/react';

import check from '../../../../assets/icons/check-full.svg';

const ForAgentsCalculation = () => {
  return (
    <Flex bg='dark' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} pt={12}>
        <Heading as='h2' size='md' fontWeight='600' color='accent' mb={2}>
          Példa számítás
        </Heading>
        <Heading as='h3' size='5xl' fontWeight='600' color='white' mb={12} lineHeight={1.2}>
          Nézzük számokban
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: '3fr 5fr',
          }}
          textAlign='center'
          gap={{ base: 4, md: 0 }}
          mb={12}>
          <GridItem colSpan={1}>
            <List.Root gap='6' variant='plain' align='center'>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='white'>
                <List.Indicator asChild>
                  <Image src={check} />
                </List.Indicator>
                Ingatlan alapértéke:{' '}
                <Text color='accent' ml={2} fontWeight='600'>
                  60 M Ft
                </Text>
              </List.Item>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='white'>
                <List.Indicator asChild>
                  <Image src={check} />
                </List.Indicator>
                Beruházás összege:{' '}
                <Text color='accent' ml={2} fontWeight='600'>
                  12 M Ft
                </Text>
              </List.Item>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='white'>
                <List.Indicator asChild>
                  <Image src={check} />
                </List.Indicator>
                Új eladási ár:{' '}
                <Text color='accent' ml={2} fontWeight='600'>
                  84 M Ft
                </Text>
              </List.Item>
              <List.Item fontSize='xl' textAlign={{ base: 'left', md: 'justify' }} color='white'>
                <List.Indicator asChild>
                  <Image src={check} />
                </List.Indicator>
                Értéknövekmény:{' '}
                <Text color='accent' ml={2} fontWeight='600'>
                  12 M Ft
                </Text>
              </List.Item>
            </List.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <Table.Root h='100%'>
              <Table.Header>
                <Table.Row bg='dark'>
                  <Table.ColumnHeader color='accent' textAlign='center' fontWeight={600} fontSize='xl'>
                    Csomag
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color='accent' textAlign='center' fontWeight={600} fontSize='xl'>
                    Jutalék
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color='accent' textAlign='center' fontWeight={600} fontSize='xl'>
                    Prémium
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color='accent' textAlign='center' fontWeight={600} fontSize='xl'>
                    Összesen
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row bg='dark' color='white'>
                  <Table.Cell textAlign='center'>Kulcsrakész</Table.Cell>
                  <Table.Cell textAlign='center'>840.000 Ft</Table.Cell>
                  <Table.Cell textAlign='center'>600.000 Ft</Table.Cell>
                  <Table.Cell textAlign='center'>1.440.000 Ft</Table.Cell>
                </Table.Row>
                <Table.Row bg='dark' color='white'>
                  <Table.Cell textAlign='center'>Terv</Table.Cell>
                  <Table.Cell textAlign='center'>840.000 Ft</Table.Cell>
                  <Table.Cell textAlign='center'>1.200.000 Ft</Table.Cell>
                  <Table.Cell textAlign='center'>2.040.000 Ft</Table.Cell>
                </Table.Row>
                <Table.Row bg='dark' color='white'>
                  <Table.Cell textAlign='center'>Finanszírozás</Table.Cell>
                  <Table.Cell textAlign='center'>840.000 Ft</Table.Cell>
                  <Table.Cell textAlign='center'>2.400.000 Ft</Table.Cell>
                  <Table.Cell textAlign='center'>3.240.000 Ft</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ForAgentsCalculation;
