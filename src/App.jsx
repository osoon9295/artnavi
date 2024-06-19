import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import queryClient from './query-client/queryClient';
import BasicMap from './components/BasicMap';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <OnlyLayout /> */}
      <BasicMap />
    </QueryClientProvider>
  );
};

export default App;
