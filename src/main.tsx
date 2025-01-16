import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from './components/ui/color-mode.tsx';
import { system } from './util/configs/theme.config.ts';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';

import outputs from './amplify_outputs.json';

Amplify.configure(outputs);

const client = generateClient<Schema>();

client.queries.sayHello({
  name: 'Amplify',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ChakraProvider value={system}>
          <ColorModeProvider defaultTheme='light'>
            <App />
          </ColorModeProvider>
        </ChakraProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
