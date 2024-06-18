import React from 'react';
import { kcisaApi } from './api/kcisa.api';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './query-client/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>App</div>
    </QueryClientProvider>
  );
};

export default App;
