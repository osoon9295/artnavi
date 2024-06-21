import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import HomePage from './pages/HomePage';
import queryClient from './query-client/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
};

export default App;
