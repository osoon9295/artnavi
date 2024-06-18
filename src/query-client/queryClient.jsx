import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60 * 2
  }
});

export default queryClient;
