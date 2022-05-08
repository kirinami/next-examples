import { FC, useMemo } from 'react';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export default function createWrapper(makeApolloClient: () => ApolloClient<NormalizedCacheObject>) {
  let apolloClient: ApolloClient<NormalizedCacheObject>;

  const initializeApolloClient = (initialState: NormalizedCacheObject | null = null) => {
    const localApolloClient = apolloClient ?? makeApolloClient();

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
      //     ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)),
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
  };

  const withApollo = (MyApp: FC<AppProps>) => {
    const ApolloWrapper: FC<AppProps> = (props) => {
      const state = props.pageProps[APOLLO_STATE_PROP_NAME];
      const apolloClient = useMemo(() => initializeApolloClient(state), [state]);

      return (
        <ApolloProvider client={apolloClient}>
          <MyApp {...props}/>
        </ApolloProvider>
      );
    };

    return ApolloWrapper;
  };

  const getServerSideProps = (makePageProps: ({ apolloClient }: { apolloClient: ApolloClient<NormalizedCacheObject> }) => (context: NextPageContext) => Promise<{ props: Record<string, unknown> }>) => {
    return async (context: NextPageContext) => {
      const apolloClient = initializeApolloClient();

      const pageProps = await makePageProps({ apolloClient })(context);

      if (pageProps.props != null) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = apolloClient.extract();
      }

      return pageProps;
    };
  };

  return {
    withApollo,
    getServerSideProps,
  };
}
