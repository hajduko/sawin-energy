import { Flex } from '@chakra-ui/react';
import HeroCard from './HeroCard';
import { useState } from 'react';
import card_0 from '../../../assets/images/heatpump/card_0.png';
import card_1 from '../../../assets/images/heatpump/card_1.png';
import card_2 from '../../../assets/images/heatpump/card_2.jpg';

interface CardData {
  id: number;
  imageSrc: string;
  text: string;
}

const HeroCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);

  const cards: CardData[] = [
    { id: 0, imageSrc: card_0, text: 'Hűtés-fűtés' },
    { id: 1, imageSrc: card_1, text: 'Gépészeti tervezés' },
    { id: 2, imageSrc: card_2, text: 'Gyors kivitelezés' },
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
