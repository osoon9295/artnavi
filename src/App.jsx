import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import queryClient from './query-client/queryClient';
import BasicMap from './components/BasicMap';
import Router from './shared/Router';

const App = () => {
  // const [signIn, setSignIn] = useState(false);

  // async function login() {
  //   let { data, error } = await supabase.auth.signInWithPassword({
  //     email: 'someone@email.com',
  //     password: 'dokBnFAovckgcMBlzqvT'
  //   });
  // }

  // async function logOut() {
  //   let { error } = await supabase.auth.signOut();
  // }

  // async function checkSignIn() {
  //   const session = await supabase.auth.getSession();
  //   const isSignIn = !!session.data.session;

  //   setSignIn(isSignIn);
  //   console.log(signIn);
  // }

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
