import { useState, useEffect } from 'react';
import { IconButton, Image } from '@chakra-ui/react';
import arrow from '../../assets/icons/arrow_up_white.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    const element = document.getElementById('root');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsVisible(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return <></>;

  return (
    <IconButton
      position='fixed'
      bottom='40px'
      right='40px'
      bgColor='primary'
      rounded='full'
      h='64px'
      w='64px'
      onClick={() => scrollToTop()}
      zIndex={999}>
      <Image src={arrow} />
    </IconButton>
  );
};

export default ScrollToTop;
