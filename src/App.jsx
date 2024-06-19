import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import queryClient from './query-client/queryClient';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <OnlyLayout /> */}
      <Layout />
    </QueryClientProvider>
  );
};

export default App;
