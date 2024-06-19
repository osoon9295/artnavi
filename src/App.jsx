import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import queryClient from './query-client/queryClient';
import BasicMap from './components/BasicMap';
import Router from './shared/Router';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <OnlyLayout /> */}
        <BasicMap />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
