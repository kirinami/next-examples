import { FC, useMemo } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import { initReduxStore } from '@/helpers/initReduxStore';
import '@/styles/_app.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const reduxStore = useMemo(() => initReduxStore(pageProps.extractData), [pageProps.extractData]);

  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
