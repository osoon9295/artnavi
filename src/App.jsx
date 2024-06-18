import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Map from './components/Map';
import queryClient from './query-client/queryClient';
import { useStore } from './zustand/store';

const App = () => {
  const { showInfo } = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
  );
};

export default App;
