import { useMemo } from 'react';
import { AppProps } from 'next/app';

import { APOLLO_STATE_PROP_NAME } from './constants';
import initializeApolloClient from './initializeApolloClient';

export default function useApolloClient(pageProps: AppProps['pageProps']) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];

  return useMemo(() => initializeApolloClient(state), [state]);
}
