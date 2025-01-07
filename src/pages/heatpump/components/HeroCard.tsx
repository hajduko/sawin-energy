import { Box, Heading, Image } from '@chakra-ui/react';
import rect from '../../../assets/images/heatpump/rect_green.svg';

interface CardProps {
  isHovered: boolean;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  imageSrc: string;
  text: string;
}

const HeroCard: React.FC<CardProps> = ({ isHovered, isOpen, onMouseEnter, onMouseLeave, imageSrc, text }) => {
  return (
    <Box
      flex={isHovered || isOpen ? 3 : 1}
      transition='flex 1s ease'
      height='100%'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      bg='white'
      borderRadius='2xl'
      overflow='hidden'
      cursor='default'
      maxWidth='360px'>
      <Box height='100%' display='flex' flexDirection='column' justifyContent='space-between' position='relative'>
        {isHovered ? (
          <>
            <Box p={6}>
              <Heading as='h3' size='4xl' fontWeight='500' fontStyle='italic' textWrap='nowrap' truncate>
                {text}
              </Heading>
            </Box>
            <Image src={rect} position='absolute' right={0} bottom='250px' />
            <Box height='250px' bgImage={`url(${imageSrc})`} bgSize='cover' bgPos='center' />
          </>
        ) : (
          <Box flex='1' bgImage={`url(${imageSrc})`} bgSize='cover' bgPos='center' />
        )}
      </Box>
    </Box>
  );
};

export default HeroCard;
