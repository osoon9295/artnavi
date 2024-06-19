import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import queryClient from './query-client/queryClient';
import Layout from './Layout/Layout';
import Router from './shared/Router';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <OnlyLayout /> */}
        <Layout />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
