import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from './components/ui/color-mode.tsx';
import { system } from './util/configs/theme.config.ts';
import { BrowserRouter } from 'react-router';

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
