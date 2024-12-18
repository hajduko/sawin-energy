import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        primary: { value: '#007648' },
        light: { value: '#efffe5' },
        dark: { value: '#062617' },
        accent: { value: '#0df157' },
      },
    },
  },
});
