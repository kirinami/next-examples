import { FC } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import useApolloClient from '@/helpers/apollo/useApolloClient';

import '@/styles/_app.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApolloClient(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
