import { Flex } from '@chakra-ui/react';
import HeroCard from './HeroCard';
import { useState } from 'react';

interface CardData {
  id: number;
  imageSrc: string;
  text: string;
}

const HeroCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);

  const cards: CardData[] = [
    { id: 0, imageSrc: 'https://placehold.co/360x300.png', text: 'Hűtés-fűtés' },
    { id: 1, imageSrc: 'https://placehold.co/360x300.png', text: 'Gépészeti tervezés' },
    { id: 2, imageSrc: 'https://placehold.co/360x300.png', text: 'Gyors kivitelezés' },
  ];

  return (
    <Flex maxWidth='900px' height='440px' overflow='hidden' gap={2}>
      {cards.map((card) => (
        <HeroCard
          key={card.id}
          isHovered={hoveredCard === card.id}
          isOpen={card.id === 0 && hoveredCard === 0}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(0)}
          imageSrc={card.imageSrc}
          text={card.text}
        />
      ))}
    </Flex>
  );
};

export default HeroCards;
