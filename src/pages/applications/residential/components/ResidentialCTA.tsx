import { Box, Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import cta_bg from '../../../../assets/images/residential/cta_bg.png';

interface Props {
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => void;
}

const ResidentialCTA = ({ dialogOpen, setDialogOpen }: Props) => {
  const jumpToKnowledgeBase = () => {
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Flex bg='#ebedf0' justify='center' pb={20}>
      <Box bg='primary' width={{ base: '95%', lg: '76rem' }} minH='330px' overflow='hidden' rounded='2xl'>
        <Box bgImage={`url(${cta_bg})`} bgRepeat='no-repeat' bgSize='cover' h='100%' w='100%' rounded='2xl' p={16}>
          <Grid
            templateColumns={{
              base: '1fr',
              lg: '2fr 1fr',
            }}
            height='100%'
            gap={20}>
            <GridItem colSpan={1}>
              <Flex flexDirection={'column'} h='100%' justify='center'>
                <Heading as='h2' size='4xl' fontWeight='600' color='white' letterSpacing='wide'>
                  Személyes tanácsadódtól bármilyen a pályázatokkal kapcsolatos kérdésedre választ kaphatsz.
                </Heading>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex flexDirection={'column'} h='100%' justify='space-between'>
                <Button
                  size='2xl'
                  bg='accent'
                  w='full'
                  rounded={'8px'}
                  fontSize='lg'
                  fontWeight='600'
                  color='dark'
                  onClick={() => setDialogOpen(!dialogOpen)}>
                  Jelentkezem a tanácsadásra!
                </Button>
                <Button
                  size='2xl'
                  bg='light'
                  w='full'
                  rounded={'8px'}
                  fontSize='lg'
                  fontWeight='600'
                  color='dark'
                  onClick={() => jumpToKnowledgeBase()}>
                  Ugrás a tudástárhoz!
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default ResidentialCTA;
