import withYM from 'next-ym'
import Router from 'next/router'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import { Layout } from '../components/Layout'
import '../shared/styles/globals.css'

function App({ Component, pageProps }) {
    return (
        <Layout pageTitle={Component.pageTitle} pageDescription={Component.pageDescription}>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
        </Layout>
    )
}

export default withYM('90055985', Router)(App)
