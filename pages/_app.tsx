import React from 'react';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Layout } from '../components';
import '../styles/style.scss';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  return (
    <Provider store={store}>
      <Layout >
        <Component {...pageProps}/>
      </Layout>
    </Provider>
  )
};

export default MyApp;