import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../styles/style.scss'
import { Layout } from '../components/layout'
import { store } from '../redux/store'

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
