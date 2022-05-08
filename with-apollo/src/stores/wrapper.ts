import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import createWrapper from '@/helpers/apollo/createWrapper';

const makeApolloClient = () => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: 'same-origin',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyMDI4MTk4LCJleHAiOjE2NTIxMTQ1OTh9.O2dGBezrQDST9NLCTLDvtokEz3FonLNclYUYkkQ38Zs',
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

const wrapper = createWrapper(makeApolloClient);

export default wrapper;
