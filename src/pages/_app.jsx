import { Layout } from '../components/Layout'
import '../shared/styles/globals.css'

function App({ Component, pageProps }) {
    return (
        <Layout pageTitle={Component.pageTitle} pageDescription={Component.pageDescription}>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
