import { FC } from 'react';
import { AppProps } from 'next/app';

import wrapper from '@/stores/wrapper';
import '@/styles/_app.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default wrapper.withApollo(MyApp);
