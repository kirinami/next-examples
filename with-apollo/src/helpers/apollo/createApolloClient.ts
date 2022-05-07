import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export default function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      credentials: 'same-origin',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxOTM5NzI4LCJleHAiOjE2NTIwMjYxMjh9.06mAWueutk91SaeiVN4aSWhNNI8OcUTVDUF4ZU7Oc58',
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
}
