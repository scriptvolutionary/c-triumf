import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const LayoutInstructions = () => {
    const TriumfDomen = useRouter()

    const LinkCheck = TriumfDomen.pathname == '/instructions' ? '/instructions' : TriumfDomen.pathname == '/instructions-court' ? '/instructions-court' : ''

    const TitleCheck = TriumfDomen.pathname == '/instructions' ? 'Для физ. и юр. лиц' : TriumfDomen.pathname == '/instructions-court' ? 'Для суда' : ''

    const InstructionsLinks = [
        {
            id: 0,
            title: 'Инструкции для физ. и юр. лиц',
            path: '/instructions'
        },
        { id: 1, title: 'Инструкции для суда', path: '/instructions-court' }
    ]

    const InstructionsDefaultContent = [
        {
            id: 0,
            title: 'Исследуемому лицу',
            content: [
                {
                    id: 0.1,
                    title: 'Адреса офисов',
                    desc: 'Обратите внимание, что у нас несколько офисов, описание как добраться можно скачать на странице контактов',
                    doc: '/docs/adresa-ofisov.docx'
                },
                {
                    id: 0.2,
                    title: 'Инструкция. Уведомление перед тестом',
                    desc: 'Обязательно ознакомьтесь с уведомлением перед тестом, где сообщено о правилах и условиях проведения теста на полиграфе.',
                    doc: '/docs/uvedomlenie-pered-testom.docx'
                },
                {
                    id: 0.3,
                    title: 'Ответы на вопросы',
                    desc: 'Ответы на главные вопросы опрашиваемых лиц.'
                }
            ]
        },
        {
            id: 1,
            title: 'Работодателю',
            content: [
                {
                    id: 0.1,
                    title: 'Заявление о согласии и соглашение о соблюдении инструкции при проверке на полиграфе',
                    desc: 'Данный бланк дает подписать эксперт.',
                    doc: '/docs/soglashenie-o-sobljudenii-instrukcii-pri-proverke-na-poligrafe.pdf'
                },
                {
                    id: 0.2,
                    title: 'Противопоказания к прохождению проверки на полиграф',
                    desc: 'Наиболее частые противопоказания — болевые ощущения, ОРВИ, инфаркт или инсульт.',
                    doc: '/docs/protivopokazanija-k-provedeniju-proverki-s-ispolzovaniem-poligrafa.pdf'
                },
                {
                    id: 0.3,
                    title: 'Категории экспертов',
                    desc: 'В чем разница между категорией «Эксперт» и «Эксперт высшей категории»? Требования к высшей категории.',
                    doc: '/docs/trebovanija-k-jekspertam-vysshei-kategorii.pdf'
                }
            ]
        },
        {
            id: 2,
            title: 'Бухгалтеру',
            content: [
                {
                    id: 0.1,
                    title: 'Закрывающие документы и адрес корреспонденции и Электронный документооборот',
                    doc: '/docs/Uchetnaja-kartochka-NJeC.pdf'
                }
            ]
        }
    ]

    const InstructionsCourtContent = [
        {
            id: 0,
            title: 'Исследуемому лицу',
            content: [
                {
                    id: 1,
                    title: 'Координаты офиса',
                    desc: 'ПФИ для суда обычно проходит на Улице Островитянова строение 7.',
                    doc: '/docs/adresa-ofisov.docx'
                },
                {
                    id: 2,
                    title: 'Информация перед тестом на полиграфе',
                    desc: 'Ознакомьтесь, пожалуйста, с информацией от эксперта.',
                    doc: '/docs/informacija-pered-testirovaniem-dlja-proverjaemogo-lica-.docx'
                }
            ]
        },
        {
            id: 1,
            title: 'Адвокатам, представителям',
            content: [
                {
                    id: 1,
                    title: 'Образец адвокатского запроса',
                    desc: 'Данный образец запроса также актуален для представителей или физ.лиц. Изменяется лишь название на «Заявка».',
                    doc: '/docs/obrazec-advokatstkogo-zaprosa.docx'
                },
                {
                    id: 2,
                    title: 'Алгоритм действий',
                    desc: 'Для тех кто обращается в первый раз.',
                    doc: '/docs/algoritm-deistvii-advokat-i-jekspert.docx'
                }
            ]
        },
        {
            id: 2,
            title: 'Следователям',
            content: [
                {
                    id: 1,
                    title: 'Образец постановления следователя',
                    desc: 'Постановление/определение суда выглядят примерно также. Отличие для суда: Выносится 2 отдельных постановления;',
                    descContent: [
                        { id: 0, title: 'О назначении экспертом.' },
                        { id: 1, title: 'О назначении экспертизы.' }
                    ],
                    doc: '/docs/postanovlenie-o-naznachenii-sudebnoi-jekspertizy.docx'
                },
                {
                    id: 2,
                    title: 'Алгоритм действий при назначении экспертизы на полиграфе',
                    desc: 'Следователь вправе обратиться к независимому эксперту, если штатный эксперт отсутствует или очередь к эксперту не позволяет уложится в разумные сроки окончания уголовного дела.',
                    doc: '/docs/informacija-sledovateljam-pered-jekspertizoi.pdf'
                }
            ]
        },
        {
            id: 3,
            title: 'Важно',
            content: [
                {
                    id: 1,
                    title: 'Ограничения по количеству вопросов',
                    desc: 'Узнайте, как количество вопросов сказывается на точности результатов экспертизы, имеющей категорические и вероятные выводы.',
                    doc: '/docs/ogranichenija-po-kolichestvu-voprosov-pri-proverke-na-poligrafe.docx'
                }
            ]
        },
        {
            id: 3,
            title: 'Дополнительная информация',
            content: [
                {
                    id: 1,
                    title: 'Письменное объяснение (для жертв преступления)',
                    desc: 'Только по назначению эксперта, который сам принимает решение о целесообразности использования данного метода.',
                    doc: '/docs/pismennoe-objasnenie-o-proizoshedshei-situacii.pdf'
                },
                {
                    id: 2,
                    title: 'Домашний арест, СИЗО/ИВС',
                    desc: 'Общая информация.',
                    doc: '/docs/jekspertiza-na-poligrafe-pri-areste.docx'
                },
                {
                    id: 3,
                    title: 'Структура заключения для суда',
                    desc: 'Наглядный пример из содержания заключения специалиста. Заключение эксперта примерно такое–же.',
                    doc: '/docs/struktura-zakljuchenija-dlja-suda.docx'
                },
                {
                    id: 4,
                    title: 'Обоснование выбора эксперта и судебно–экспертной организации',
                    desc: 'Для упрощения работы.',
                    doc: '/docs/obosnovanie-vybora-jeksperta-i-jekspertnoi-organizacii.pdf'
                }
            ]
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
                        <div className='grid lg:grid-cols-2 lg:gap-8 xs:gap-4'>
                            {InstructionsLinks.map((s) => (
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
                                <h1 className='lg:text-4xl xs:text-3xl font-bold'>Инструкции</h1>
                                <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>{TitleCheck}</p>
                            </div>
                            <div className='flex flex-col lg:gap-8 xs:gap-4'>
                                {TriumfDomen.pathname == '/instructions' &&
                                    InstructionsDefaultContent.map((i) => (
                                        <div className='lg:glass w-full h-full rounded-md lg:p-8 xs:p-4 xs:shadow' key={i.id}>
                                            <div className='flex flex-col lg:gap-16 xs:gap-8'>
                                                <div className='flex flex-col lg:gap-8 xs:gap-4'>
                                                    <h1 className='lg:text-3xl xs:text-2xl font-bold'>{i.title}</h1>
                                                    <div className='w-full flex flex-col lg:gap-8 xs:gap-4'>
                                                        {i.content?.map((c) => (
                                                            <div className='w-full flex xs:flex-col lg:flex-row items-center lg:gap-8 xs:gap-4' key={c.id}>
                                                                <div className='lg:w-5/6 xs:w-full flex flex-col lg:gap-4 xs:gap-2'>
                                                                    <p className='lg:text-2xl xs:text-xl font-bold'>{c.title}</p>
                                                                    <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>{c.desc}</p>
                                                                </div>
                                                                <div className='lg:w-1/6 xs:w-full'>
                                                                    <a
                                                                        className='btn btn-secondary btn-block lg:text-base lg:font-semibold justify-between lg:bg-secondary bg-secondary hover:btn-secondary lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1 rounded-md lg:glass'
                                                                        href={c.doc}
                                                                        target='_blank'
                                                                    >
                                                                        Скачать <FaLongArrowAltRight size={18} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                {TriumfDomen.pathname == '/instructions-court' &&
                                    InstructionsCourtContent.map((i) => (
                                        <div className='lg:glass w-full h-full rounded-md lg:p-8 xs:p-4 xs:shadow' key={i.id}>
                                            <div className='flex flex-col lg:gap-16 xs:gap-8'>
                                                <div className='flex flex-col lg:gap-8 xs:gap-4'>
                                                    <h1 className='lg:text-3xl xs:text-2xl font-bold'>{i.title}</h1>
                                                    <div className='w-full flex flex-col lg:gap-8 xs:gap-4'>
                                                        {i.content?.map((c) => (
                                                            <div className='w-full flex xs:flex-col lg:flex-row items-center lg:gap-8 xs:gap-4' key={c.id}>
                                                                <div className='lg:w-5/6 xs:w-full flex flex-col lg:gap-4 xs:gap-2'>
                                                                    <p className='lg:text-2xl xs:text-xl font-bold'>{c.title}</p>
                                                                    <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>{c.desc}</p>
                                                                </div>
                                                                <div className='lg:w-1/6 xs:w-full'>
                                                                    <a
                                                                        className='btn btn-secondary btn-block lg:text-base lg:font-semibold justify-between lg:bg-secondary bg-secondary hover:btn-secondary lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1 rounded-md lg:glass'
                                                                        href={c.doc}
                                                                        target='_blank'
                                                                    >
                                                                        Скачать <FaLongArrowAltRight size={18} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
