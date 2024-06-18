
import React from 'react';
import { kcisaApi } from './api/kcisa.api';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './query-client/queryClient';
import BasicMap from './components/BasicMap';


const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
     <BasicMap />
    </QueryClientProvider>

  );
};

export default App;
