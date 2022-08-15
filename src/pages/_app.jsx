import { Layout } from '../components/Layout'
import '../shared/styles/globals.css'

function App({ Component, pageProps }) {
	return (
		<Layout
			pageTitle={Component.pageTitle}
			pageKeywords={Component.pageKeywords}
			pageDescription={Component.pageDescription}
			pageType={Component.pageType}
		>
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
