import { createSystem, defaultConfig } from '@chakra-ui/react';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        primary: { value: '#017649' },
        light: { value: '#efffe5' },
        dark: { value: '#062617' },
        accent: { value: '#07f258' },
      },
    },
    tokens: {
      fonts: {
        body: { value: 'Poppins, sans-serif' },
        heading: { value: 'Poppins, sans-serif' },
      },
      fontSizes: {
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '18px' },
        xl: { value: '20px' },
        '2xl': { value: '24px' },
        '3xl': { value: '28px' },
        '4xl': { value: '32px' },
        '5xl': { value: '36px' },
        '6xl': { value: '46px' },
        '7xl': { value: '65px' },
        '8xl': { value: '104px' },
      },
    },
    breakpoints: {
      sm: '37em',
      lg: '77em',
    },
  },
});
