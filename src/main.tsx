import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from '@/components/ui/color-mode.tsx';
import App from './App.tsx';
import './index.css';
import { system } from './util/configs/theme.config.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <ColorModeProvider defaultTheme='light'>
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
