import React from 'react';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { Layout } from '../components';
import { set } from "../redux/slices/productsSlice";
import { publicApi } from "../api";

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
  const items = await publicApi.getMachinery("");
  store.dispatch(set(items))

  return { pageProps: {} }
});

export default  wrapper.withRedux(MyApp);
