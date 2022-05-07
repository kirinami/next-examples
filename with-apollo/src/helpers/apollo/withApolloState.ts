import { AppProps } from 'next/app';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { APOLLO_STATE_PROP_NAME } from './constants';

export default function withApolloState(apolloClient: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']) {
  pageProps.props[APOLLO_STATE_PROP_NAME] = apolloClient.extract();

  return pageProps;
}
