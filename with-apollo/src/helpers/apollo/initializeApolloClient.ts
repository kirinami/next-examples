import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import createApolloClient from './createApolloClient';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export default function initializeApolloClient(initialState: NormalizedCacheObject | null = null) {
  const localApolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = localApolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    // const data = merge(existingCache, initialState, {
    //   // combine arrays using object equality (like in sets)
    //   arrayMerge: (destinationArray, sourceArray) => [
    //     ...sourceArray,
    //     ...destinationArray.filter((d) =>
    //       sourceArray.every((s) => !isEqual(d, s)),
    //     ),
    //   ],
    // });

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    // and restore the cache with the merged data
    localApolloClient.restore({
      ...existingCache,
      ...initialState,
    });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return localApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = localApolloClient;
  }

  return localApolloClient;
}
