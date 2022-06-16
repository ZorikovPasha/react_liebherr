import React from 'react';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { Layout } from '../components';
import { fetchProducts } from "../redux/slices/productsSlice";

import '../styles/style.scss';

type AppPropsWithLayout = AppProps & {
  Component: NextPage
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout >
      <Component {...pageProps}/>
    </Layout>
  )
};

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  await store.dispatch(fetchProducts("?chunk=1"))

  return { pageProps: {} }
});

export default  wrapper.withRedux(MyApp);
