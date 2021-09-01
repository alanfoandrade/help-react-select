import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import AppProvider from './hooks';
import { Routes } from './routes';
import theme from './styles/theme';

export const App = (): JSX.Element => (
  <Router>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ChakraProvider>
  </Router>
);
