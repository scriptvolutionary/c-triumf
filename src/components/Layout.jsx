import Head from 'next/head'
import { useRouter } from 'next/router'

import { Banner } from '../widgets/Banner'
import { Footer } from '../widgets/Footer'
import { Frame } from '../widgets/Frame'
import { Header } from '../widgets/Header'

export const Layout = ({ pageTitle, pageDescription, pageType, children }) => {
    const TriumfDomen = useRouter()

    return (
        <>
            <Head>
                <title>{`«Триумф» — ${pageTitle}`}</title>
                <meta name='description' content={pageDescription} />
                <meta property='og:title' content={`«Триумф» — ${pageTitle}`} />
                <meta property='og:description' content={pageDescription} />

                <meta property='og:url' content={`https://c-triumf.ru${TriumfDomen.asPath}`} />
                <link rel='canonical' href={`https://c-triumf.ru${TriumfDomen.asPath}`} />
            </Head>
            <Header />
            <main>
                <Banner />
                {children}
                <Frame />
            </main>
            <Footer />
        </>
    )
}
