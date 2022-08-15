function Error({ statusCode }) {
	return (
		<p>
			{statusCode
				? `Ошибка ${statusCode} произошла со стороны сервера.`
				: 'Ошибка 404'}
		</p>
	)
}

Error.pageTitle = 'Ошибка'
Error.keywords = 'Ключи'
Error.description = 'Описание'
Error.pageType = 'website'

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
