function Error({ statusCode }) {
    return <p>{statusCode ? `Ошибка ${statusCode}` : 'Ошибка 404'}</p>
}

Error.pageTitle = 'Ошибка'
Error.description = 'Произошла ошибка!'

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
