import { Box, Heading, Image } from '@chakra-ui/react';
import rect from '../../../assets/rect_green.svg';

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
      flex={isHovered || isOpen ? 2 : 1}
      transition='flex 0.5s ease'
      height='100%'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      bg='white'
      borderRadius='md'
      overflow='hidden'
      cursor='default'>
      <Box height='100%' display='flex' flexDirection='column' justifyContent='space-between' position='relative'>
        {isHovered ? (
          <>
            <Box p={6}>
              <Heading as='h3' size='3xl' fontStyle='italic' textWrap='nowrap' truncate>
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