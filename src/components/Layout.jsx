import Head from 'next/head'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../shared/hooks/useLocalStorage'
import { Agreement } from '../widgets/Agreement'
import { Banner } from '../widgets/Banner'

import { Footer } from '../widgets/Footer'
import { Frame } from '../widgets/Frame'
import { Header } from '../widgets/Header'

export const Layout = ({
	pageTitle,
	pageKeywords,
	pageDescription,
	pageType,
	children
}) => {
	const TriumfDomen = useRouter()

	const [agreement, setAgreement] = useLocalStorage('agreement', false)

	return (
		<>
			<Head>
				<title>{`«Триумф» — ${pageTitle}`}</title>
				<meta name='keywords' content={pageKeywords} />
				<meta name='description' content={pageDescription} />

				<meta property='og:title' content={`«Триумф» — ${pageTitle}`} />
				<meta property='og:description' content={pageDescription} />
				<meta property='og:type' content={pageType} />

				<meta
					property='og:url'
					content={`https://c-triumf.ru${TriumfDomen.asPath}`}
				/>

				<link
					rel='canonical'
					href={`https://c-triumf.ru${TriumfDomen.asPath}`}
				/>
			</Head>
			<Header />
			<main>
				<Banner />
				{children}
				<Frame />
				{!agreement && <Agreement />}
			</main>
			<Footer />
		</>
	)
}
