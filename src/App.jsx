import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import BasicMap from '../src/components/BasicMap';
import queryClient from './query-client/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <OnlyLayout /> */}
      <BasicMap />
    </QueryClientProvider>
  );
};

export default App;
