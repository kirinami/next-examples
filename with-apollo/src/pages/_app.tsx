import { FC, useMemo } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { initApolloClient } from '@/helpers/initApolloClient';
import '@/styles/_app.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useMemo(() => initApolloClient(pageProps.extractData), [pageProps.extractData]);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
