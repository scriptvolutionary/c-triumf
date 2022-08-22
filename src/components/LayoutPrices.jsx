import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaLongArrowAltRight, FaQuestionCircle, FaRubleSign } from 'react-icons/fa'

export const LayoutPrices = () => {
    const TriumfDomen = useRouter()

    const LinkCheck = TriumfDomen.pathname == '/price-basic' ? '/price-basic' : TriumfDomen.pathname == '/price-other' ? '/price-other' : TriumfDomen.pathname == '/price-extra' ? '/price-extra' : ''

    const TitleCheck =
        TriumfDomen.pathname == '/price-basic' ? 'Основные проверки' : TriumfDomen.pathname == '/price-other' ? 'Другие проверки' : TriumfDomen.pathname == '/price-extra' ? 'Опции (доп. услуги)' : ''

    const PricesLinks = [
        { id: 0, title: 'Основные проверки', path: '/price-basic' },
        { id: 1, title: 'Другие проверки', path: '/price-other' },
        { id: 2, title: 'Опции (доп. услуги)', path: '/price-extra' }
    ]

    const BasicServicesLinks = [
        {
            id: 0,
            serviceId: 'investigation',
            title: 'Расследование. По факту хищения или другое',
            path: '/price-basic#investigation',
            servicePath: '/basic/investigation',
            priceContent: [
                { id: 1, title: 'Эксперт', price: '5.000' },
                { id: 2, title: 'Эксперт высш. категории', price: '6.000' }
            ]
        },
        {
            id: 1,
            serviceId: 'court-and-lawyer',
            title: 'Для суда и адвокатов',
            path: '/price-basic#court-and-lawyer',
            servicePath: '/basic/court-and-lawyer',
            priceContent: [{ id: 1, title: 'Эксперт', price: '47.500' }]
        },
        {
            id: 2,
            serviceId: 'recruitment',
            title: 'При приеме на работу',
            path: '/price-basic#recruitment',
            servicePath: '/basic/recruitment',
            priceContent: [
                { id: 1, title: 'Эксперт', price: '4.200' },
                { id: 2, title: 'Эксперт высш. категории', price: '4.700' }
            ]
        },
        {
            id: 3,
            serviceId: 'personal-life',
            title: 'Личная жизнь',
            path: '/price-basic#personal-life',
            servicePath: '/basic/personal-life',
            priceContent: [
                {
                    id: 1,
                    title: 'Д. Климов',
                    price: '7.500',
                    desc: 'До 4-х вопросов'
                },
                {
                    id: 2,
                    title: 'Д. Климов',
                    price: '9.500',
                    desc: 'До 8-ми вопросов'
                },
                {
                    id: 3,
                    title: 'Т. Алфеева',
                    price: '10.000',
                    desc: 'До 4-х вопросов'
                },
                {
                    id: 4,
                    title: 'Т. Алфеева',
                    price: '12.000',
                    desc: 'До 8-ми вопросов'
                }
            ]
        }
    ]

    const OtherServicesLinks = [
        {
            id: 0,
            serviceId: 'review',
            title: 'Рецензия (аудит суд. экспертизы)',
            path: '/price-other#review',
            servicePath: '/other/review',
            priceContent: [
                {
                    id: 0.1,
                    title: '',
                    price: '47.500',
                    desc: 'Акция не распространяется'
                }
            ]
        },
        {
            id: 1,
            serviceId: 'fraud-or-it-crimes',
            title: 'Мошенничество или IT преступления',
            path: '/price-other#fraud-or-it-crimes',
            servicePath: '/other/fraud-or-it-crimes',
            priceContent: [
                {
                    id: 0.1,
                    title: '',
                    price: '11.000',
                    desc: 'e-mail отчет 3-4 л.'
                },
                {
                    id: 0.2,
                    title: '',
                    price: '47.500',
                    desc: 'по адв. запросу суд. формат'
                }
            ]
        },
        {
            id: 2,
            serviceId: 'teen-test',
            title: 'Тест подростков (14-17 лет)',
            path: '/price-other#teen-test',
            servicePath: '/other/teen-test',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 3,
            serviceId: 'scheduled-check-of-employees',
            title: 'Плановая проверка работников',
            path: '/price-other#scheduled-check-of-employees',
            servicePath: '/other/scheduled-check-of-employees',
            priceContent: [
                {
                    id: 0.1,
                    title: 'Эскперт',
                    price: '4.700',
                    desc: 'до 7-ми вопросов'
                },
                {
                    id: 0.2,
                    title: 'Эскперт',
                    price: '5.000',
                    desc: '8-15 вопросов'
                },
                {
                    id: 0.3,
                    title: 'Эскперт высш. категории',
                    price: '6.300',
                    desc: 'до 7-ми вопросов'
                },
                {
                    id: 0.4,
                    title: 'Эскперт высш. категории',
                    price: '7.500',
                    desc: '8-15 вопросов'
                }
            ]
        },
        {
            id: 4,
            serviceId: 'your-questions',
            title: 'Свои вопросы',
            path: '/price-other#your-questions',
            servicePath: '/other/your-questions',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 5,
            serviceId: 'trial-testing',
            title: 'Пробное тестирование',
            path: '/price-other#trial-testing',
            servicePath: '/other/trial-testing',
            priceContent: [
                {
                    id: 0.1,
                    title: 'Стандарт',
                    price: '4.700',
                    desc: 'Линейн. п ерсонал'
                },
                {
                    id: 0.2,
                    title: 'Стандарт',
                    price: '5.500',
                    desc: 'Рук. звено'
                },
                {
                    id: 0.3,
                    title: 'Мини-тест',
                    price: '3.000',
                    desc: 'Эксперт'
                },
                {
                    id: 0.3,
                    title: 'Мини-тест',
                    price: '3.500',
                    desc: 'Эксперт высш. категории'
                }
            ]
        }
    ]

    const ExtraServicesLinks = [
        {
            id: 0,
            serviceId: 'departure-to-client',
            title: 'Выезд к Заказчику',
            path: '/price-extra#departure-to-client',
            servicePath: '/extra/departure-to-client',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 1,
            serviceId: 'presence-client-at-test',
            title: 'Присутствие заказчика на тесте',
            path: '/price-extra#presence-client-at-test',
            servicePath: '/extra/presence-client-at-test',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 2,
            serviceId: 'individual-consultation',
            title: 'Индивидуальная консультация',
            path: '/price-extra#individual-consultation',
            servicePath: '/extra/individual-consultation',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 3,
            serviceId: 'mission',
            title: 'Командировка',
            path: '/price-extra#mission',
            servicePath: '/extra/mission',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 4,
            serviceId: 'media',
            title: 'Материалы',
            path: '/price-extra#media',
            servicePath: '/extra/media',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 5,
            serviceId: 'check-on-english',
            title: 'Проверка на английском языке',
            path: '/price-extra#check-on-english',
            servicePath: '/extra/check-on-english',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 6,
            serviceId: 'urgency',
            title: 'Срочность',
            path: '/price-extra#urgency',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 7,
            serviceId: 'other-services',
            title: 'Иные услуги',
            path: '/price-extra#other-services',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        },
        {
            id: 8,
            serviceId: 'work-on-non-working-days-or-hours',
            title: 'Работа в нерабочие дни или часы',
            path: '/price-extra#work-on-non-working-days-or-hours',
            priceContent: [{ id: 0.1, title: '', price: '', desc: '' }]
        }
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
                                <li>
                                    <Link href={LinkCheck}>
                                        <a>{TitleCheck}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-screen h-full'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='lg:pb-24 xs:pb-12'>
                        <div className='grid lg:grid-cols-3 lg:gap-8 xs:gap-4'>
                            {PricesLinks.map((s) => (
                                <Link href={s.path} key={s.id}>
                                    <a
                                        className={
                                            TriumfDomen.pathname == s.path
                                                ? 'w-full lg:glass btn btn-secondary lg:bg-secondary bg-secondary hover:btn-secondary xs:h-24 lg:h-44 lg:text-base lg:font-semibold rounded-md flex flex-col gap-2'
                                                : 'w-full lg:glass xs:shadow btn btn-ghost h-44 lg:text-base lg:font-semibold rounded-md hover:btn-secondary xs:h-24 lg:h-44 lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1 transform-gpu'
                                        }
                                    >
                                        <span>{s.title}</span>
                                        {TriumfDomen.pathname == s.path && <span className='w-2/3 h-1 bg-secondary-content'></span>}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-screen h-full'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='lg:pb-24 xs:pb-12'>
                        <div className='flex flex-col lg:gap-16 xs:gap-8'>
                            <div className='flex flex-col'>
                                <h1 className='lg:text-4xl xs:text-3xl font-bold'>Цены</h1>
                                <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>{TitleCheck}</p>
                            </div>
                            <div className='w-full flex md:flex-row xs:flex-col lg:gap-8 xs:gap-4'>
                                <div className='md:w-1/3 xs:w-full'>
                                    <ul className='sticky top-28 left-0 glass w-full rounded-md'>
                                        {TriumfDomen.pathname == '/price-basic' &&
                                            BasicServicesLinks.map((b) => (
                                                <li key={b.id}>
                                                    <Link href={b.path}>
                                                        <a
                                                            className={
                                                                TriumfDomen.asPath == b.path
                                                                    ? 'btn btn-secondary lg:glass bg-secondary shadow-none hover:btn-secondary btn-block rounded-md normal-case justify-start lg:text-base lg:font-semibold'
                                                                    : 'btn btn-ghost lg:glass lg:hover:btn-secondary shadow-none btn-block rounded-md normal-case justify-start lg:text-base lg:font-semibold lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1'
                                                            }
                                                        >
                                                            {b.title}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        {TriumfDomen.pathname == '/price-other' &&
                                            OtherServicesLinks.map((b) => (
                                                <li key={b.id}>
                                                    <Link href={b.path}>
                                                        <a
                                                            className={
                                                                TriumfDomen.asPath == b.path
                                                                    ? 'btn btn-secondary lg:glass bg-secondary shadow-none hover:btn-secondary btn-block rounded-md normal-case justify-start lg:text-base lg:font-semibold'
                                                                    : 'btn btn-ghost lg:glass lg:hover:btn-secondary shadow-none btn-block rounded-md normal-case justify-start lg:text-base lg:font-semibold lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1'
                                                            }
                                                        >
                                                            {b.title}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        {TriumfDomen.pathname == '/price-extra' &&
                                            ExtraServicesLinks.map((b) => (
                                                <li key={b.id}>
                                                    <Link href={b.path}>
                                                        <a
                                                            className={
                                                                TriumfDomen.asPath == b.path
                                                                    ? 'btn btn-secondary lg:glass bg-secondary shadow-none hover:btn-secondary btn-block rounded-md normal-case justify-start lg:text-base lg:font-semibold'
                                                                    : 'btn btn-ghost lg:glass lg:hover:btn-secondary shadow-none btn-block rounded-md normal-case justify-start lg:text-base lg:font-semibold lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1'
                                                            }
                                                        >
                                                            {b.title}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className='md:w-2/3 xs:w-full'>
                                    <div className='flex flex-col gap-8'>
                                        {TriumfDomen.pathname == '/price-basic' &&
                                            BasicServicesLinks.map((l) => (
                                                <div className='w-full rounded-md glass lg:p-8 xs:p-4' id={l.serviceId} key={l.id}>
                                                    <div className='flex flex-col lg:gap-4 xs:gap-4'>
                                                        <div className='flex xs:flex-col lg:flex-row lg:items-center xs:gap-2 justify-between'>
                                                            <h2 className='flex items-center gap-2 lg:text-end font-semibold lg:text-2xl xs:text-lg'>
                                                                {l.title}
                                                                {l.servicePath && (
                                                                    <span className='tooltip' data-tip='Подробнее'>
                                                                        <Link href={l.servicePath}>
                                                                            <a>
                                                                                <FaQuestionCircle className='text-secondary' size={20} />
                                                                            </a>
                                                                        </Link>
                                                                    </span>
                                                                )}
                                                            </h2>
                                                            <Link href='/contacts'>
                                                                <a className='btn btn-secondary lg:glass lg:bg-secondary bg-secondary shadow-none lg:hover:btn-secondary lg:hover:shadow-lg lg:hover:translate-x-1 rounded-md items-center xs:justify-between gap-4'>
                                                                    Заказать
                                                                    <FaLongArrowAltRight size={18} />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className='stats stats-horizontal lg:glass xs:shadow rounded-md'>
                                                            {l.priceContent?.map((p) => (
                                                                <div className='lg:glass stat flex flex-col items-center' key={p.id}>
                                                                    {p.title && <div className='stat-title'>{p.title}</div>}
                                                                    <div className='lg:stat-value xs:text-3xl flex items-center justify-center gap-1'>
                                                                        {p.price} <FaRubleSign className='lg:w-7 lg:h-7 xs:w-4 xs:h-4' />
                                                                    </div>
                                                                    {p.desc && <div className='stat-desc'>{p.desc}</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        {TriumfDomen.pathname == '/price-other' &&
                                            OtherServicesLinks.map((l) => (
                                                <div className='w-full rounded-md glass lg:p-8 xs:p-4' id={l.serviceId} key={l.id}>
                                                    <div className='flex flex-col lg:gap-4 xs:gap-4'>
                                                        <div className='flex xs:flex-col lg:flex-row lg:items-center xs:gap-2 justify-between'>
                                                            <h2 className='flex items-center gap-2 lg:text-end font-semibold lg:text-2xl xs:text-lg'>
                                                                {l.title}
                                                                {l.servicePath && (
                                                                    <span className='tooltip' data-tip='Подробнее'>
                                                                        <Link href={l.servicePath}>
                                                                            <a>
                                                                                <FaQuestionCircle className='text-secondary' size={20} />
                                                                            </a>
                                                                        </Link>
                                                                    </span>
                                                                )}
                                                            </h2>
                                                            <Link href='/contacts'>
                                                                <a className='btn btn-secondary lg:glass lg:bg-secondary bg-secondary shadow-none lg:hover:btn-secondary lg:hover:shadow-lg lg:hover:translate-x-1 rounded-md items-center xs:justify-between gap-4'>
                                                                    Заказать
                                                                    <FaLongArrowAltRight size={18} />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className='stats stats-horizontal lg:glass xs:shadow rounded-md'>
                                                            {l.priceContent?.map((p) => (
                                                                <div className='lg:glass stat flex flex-col items-center' key={p.id}>
                                                                    {p.title && <div className='stat-title'>{p.title}</div>}
                                                                    <div className='lg:stat-value xs:text-3xl flex items-center justify-center gap-1'>
                                                                        {p.price} <FaRubleSign className='lg:w-7 lg:h-7 xs:w-4 xs:h-4' />
                                                                    </div>
                                                                    {p.desc && <div className='stat-desc'>{p.desc}</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        {TriumfDomen.pathname == '/price-extra' &&
                                            ExtraServicesLinks.map((l) => (
                                                <div className='w-full rounded-md glass lg:p-8 xs:p-4' id={l.serviceId} key={l.id}>
                                                    <div className='flex flex-col lg:gap-4 xs:gap-4'>
                                                        <div className='flex xs:flex-col lg:flex-row lg:items-center xs:gap-2 justify-between'>
                                                            <h2 className='flex items-center gap-2 lg:text-end font-semibold lg:text-2xl xs:text-lg'>
                                                                {l.title}
                                                                {l.servicePath && (
                                                                    <span className='tooltip' data-tip='Подробнее'>
                                                                        <Link href={l.servicePath}>
                                                                            <a>
                                                                                <FaQuestionCircle className='text-secondary' size={20} />
                                                                            </a>
                                                                        </Link>
                                                                    </span>
                                                                )}
                                                            </h2>
                                                            <Link href='/contacts'>
                                                                <a className='btn btn-secondary lg:glass lg:bg-secondary bg-secondary shadow-none lg:hover:btn-secondary lg:hover:shadow-lg lg:hover:translate-x-1 rounded-md items-center xs:justify-between gap-4'>
                                                                    Заказать
                                                                    <FaLongArrowAltRight size={18} />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className='stats stats-horizontal lg:glass xs:shadow rounded-md'>
                                                            {l.priceContent?.map((p) => (
                                                                <div className='lg:glass stat flex flex-col items-center' key={p.id}>
                                                                    {p.title && <div className='stat-title'>{p.title}</div>}
                                                                    <div className='lg:stat-value xs:text-3xl flex items-center justify-center gap-1'>
                                                                        {p.price} <FaRubleSign className='lg:w-7 lg:h-7 xs:w-4 xs:h-4' />
                                                                    </div>
                                                                    {p.desc && <div className='stat-desc'>{p.desc}</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
