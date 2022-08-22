import Link from 'next/link'

function Sitemap() {
    const SitemapContent = [
        {
            id: 0,
            word: 'А',
            content: [{ id: 0, title: 'Алгоритм заказа', path: '' }]
        },
        {
            id: 1,
            word: 'Б',
            content: [{ id: 0, title: 'База знаний Триумф', path: '' }]
        },
        { id: 2, word: 'В' },
        { id: 3, word: 'Г' },
        {
            id: 4,
            word: 'Д',
            content: [
                { id: 0, title: 'Дипломы об образовании', path: '' },
                { id: 1, title: 'Депозит', path: '' }
            ]
        },
        { id: 5, word: 'Е' },
        { id: 6, word: 'Ё' },
        { id: 7, word: 'Ж' },
        {
            id: 8,
            word: 'З',
            content: [
                {
                    id: 0,
                    title: 'Законность проверки на полиграфе',
                    path: '/basic'
                }
            ]
        },
        {
            id: 9,
            word: 'И',
            content: [{ id: 0, title: 'Инструкции', path: '/instructions' }]
        },
        { id: 10, word: 'Й' },
        {
            id: 11,
            word: 'К',
            content: [
                { id: 0, title: 'Контакты', path: '/contacts' },
                { id: 1, title: 'КП', path: '' },
                { id: 2, title: 'Категории экспертов', path: '' },
                { id: 3, title: 'Контроль качества', path: '' },
                { id: 4, title: 'Конфиденциальность результатов', path: '' }
            ]
        },
        { id: 12, word: 'Л' },
        { id: 13, word: 'М' },
        { id: 14, word: 'Н' },
        {
            id: 15,
            word: 'О',
            content: [
                {
                    id: 0,
                    title: 'Образец отчётов',
                    path: ''
                },
                {
                    id: 0,
                    title: 'Образец счет-договора',
                    path: ''
                }
            ]
        },
        {
            id: 16,
            word: 'П',
            content: [
                {
                    id: 0,
                    title: 'Партнеры-полиграфологи',
                    path: ''
                },
                {
                    id: 1,
                    title: 'Публичная оферта',
                    path: '/offer'
                },
                {
                    id: 1,
                    title: 'Политика конфиденциальности',
                    path: ''
                }
            ]
        },
        {
            id: 17,
            word: 'Р',
            content: [
                {
                    id: 0,
                    title: 'Реквизиты. Учетная карточка',
                    path: ''
                }
            ]
        },
        {
            id: 18,
            word: 'С',
            content: [
                {
                    id: 0,
                    title: 'Способы оплаты',
                    path: ''
                }
            ]
        },
        {
            id: 19,
            word: 'Т',
            content: [
                {
                    id: 0,
                    title: 'Требования к проверочным вопросам',
                    path: ''
                },
                {
                    id: 0,
                    title: 'Требования к помещению',
                    path: ''
                }
            ]
        },
        {
            id: 20,
            word: 'У',
            content: [{ id: 0, title: 'Услуги', path: '/basic' }]
        },
        { id: 21, word: 'Ф' },
        { id: 22, word: 'Х' },
        {
            id: 23,
            word: 'Ц',
            content: [{ id: 0, title: 'Цены', path: '/price-basic' }]
        },
        { id: 24, word: 'Ч' },
        { id: 25, word: 'Ш' },
        { id: 26, word: 'Щ' },
        { id: 27, word: 'Э' },
        { id: 28, word: 'Ю' },
        { id: 29, word: 'Я' }
    ]

    return (
        <>
            <section className='w-screen h-full'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='lg:py-8 xs:py-4'>
                        <div className='lg:text-base xs:text-sm font-medium breadcrumbs'>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Главная</a>
                                    </Link>
                                </li>
                                <li>Карта сайта</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-screen h-full'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='lg:pb-24 xs:pb-12'>
                        <div className='flex flex-col lg:gap-16 xs:gap-8'>
                            <div className='w-full flex lg:flex-row xs:flex-col items-center lg:text-start xs:text-center lg:justify-between xs:justify-center lg:gap-16 xs:gap-8'>
                                <h2 className='lg:text-4xl xs:text-3xl font-bold'>Карта сайта</h2>
                                <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>Находите необходимые Вам страницы прямо на сайте, а не в браузерной строке :)</p>
                            </div>
                            <div className='grid grid-cols-4 lg:gap-8 xs:gap-4'>
                                {SitemapContent.map(
                                    (m) =>
                                        m.content && (
                                            <div className='glass rounded-md p-8'>
                                                <div className='flex flex-col gap-8'>
                                                    <h3 className='text-3xl font-bold text-secondary'>{m.word}</h3>
                                                    {m.content ? (
                                                        <ul className='list-inside'>
                                                            {m.content.map((c) => (
                                                                <li
                                                                    className='cursor-pointer w-full text-base font-medium xs:active:text-secondary lg:hover:text-secondary lg:hover:translate-x-1 lg:hover:-translate-y-1 ease-in-out transition-all transform-gpu'
                                                                    key={c.id}
                                                                >
                                                                    <Link href={c.path}>
                                                                        <a>{c.title}</a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className='text-xl text-neutral/75 font-medium'>Страниц нет.</p>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Sitemap.pageTitle = 'Карта сайта'
Sitemap.pageDescription = 'Описание'

export default Sitemap
