import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='ru'>
            <Head>
                <meta name='robots' content='index, follow' />
                <meta
                    name='keywords'
                    content='проверка на полиграфе, проверка на детекторе лжи, полиграфолог, полиграф при приеме на работу, проверка при приеме на работу проверка на полиграфе в москве, полиграф москва, пройти полиграф, полиграф проверка, услуги полиграфа, полиграф в суде, полиграф, полиграфолог'
                />

                <meta property='og:image' content='/logo.svg' />
                <meta property='og:image:width' content='512' />
                <meta property='og:image:height' content='512' />
                <meta property='og:locale' content='ru_RU' />
                <meta property='og:site_name' content='Полиграф, АНО СЭЦ «Триумф» г. Москва' />
                <meta property='og:type' content='website' />

                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='msapplication-TileImage' content='/icon.svg' />
                <meta name='theme-color' content='#ffffff' />

                <meta name='author' content='Kirill Borisov' />

                <link rel='apple-touch-icon' href='/icon.svg' />
                <link rel='icon' href='/icon.svg' size='all' />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                <link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap' rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
