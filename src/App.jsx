import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import OnlyLayout from './components/OnlyLayout';
import queryClient from './query-client/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <OnlyLayout />
      {/* <OnBasicMap /> */}
    </QueryClientProvider>
  );
};

export default App;
