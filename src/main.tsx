import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from './components/ui/color-mode.tsx';
import { system } from './util/configs/theme.config.ts';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { MenuContext } from './api/contexts/MenuContext.ts';
import { menu } from './util/menu.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ChakraProvider value={system}>
          <ColorModeProvider defaultTheme='light'>
            <MenuContext.Provider value={menu}>
              <App />
            </MenuContext.Provider>
          </ColorModeProvider>
        </ChakraProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
