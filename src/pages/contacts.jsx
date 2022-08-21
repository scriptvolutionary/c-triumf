import Link from 'next/link'
import { FaLongArrowAltRight, FaPhone } from 'react-icons/fa'

function Contacts() {
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
                                <li>Контакты</li>
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
                                <h2 className='lg:text-4xl xs:text-3xl font-bold'>
                                    Заказ проверки на полиграфе
                                </h2>
                                <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>
                                    Мы всегда готовы принять ваш заказ на проверку на полиграфе и
                                    ответить на все интересующие вопросы.
                                </p>
                            </div>
                            <div className='flex flex-col lg:gap-8 xs:gap-4'>
                                <div className='card lg:card-side lg:glass xs:shadow rounded-md'>
                                    <figure className='lg:w-1/3 xs:w-full'>
                                        <img className='lg:w-full xs:h-full' src='/alfeeva.png' />
                                    </figure>
                                    <div className='card-body xs:gap-4 lg:justify-between lg:w-4/6 xs:p-4'>
                                        <h1 className='card-title lg:text-3xl xs:text-2xl font-semibold'>
                                            Татьяна Анатольевна Алфеева
                                        </h1>
                                        <div className='card-actions lg:gap-4 xs:gap-2 xs:justify-between lg:justify-end'>
                                            <a
                                                className='btn xs:btn-block lg:w-56 btn-secondary lg:text-base lg:font-semibold lg:glass shadow-none lg:bg-secondary lg:btn-lg bg-secondary lg:hover:shadow-xl lg:hover:btn-secondary lg:hover:translate-x-1 lg:hover:-translate-y-1 rounded-md gap-2 justify-between'
                                                href='tel:tel:+79067772503'
                                            >
                                                Позвонить <FaPhone size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='glass w-full lg:p-8 xs:p-4 rounded-md'>
                                    <div className='flex xs:flex-col lg:flex-row lg:gap-8 xs:gap-4 w-full'>
                                        <div className='flex flex-col lg:gap-4 xs:gap-2 lg:w-4/5'>
                                            <h2 className='lg:text-3xl xs:text-2xl font-bold'>
                                                Консультация и запись
                                            </h2>
                                            <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>
                                                Ознакомтесь перед звонком
                                            </p>
                                        </div>
                                        <div className='flex flex-col lg:gap-4 xs:gap-2 lg:w-1/5'>
                                            <Link href='/logic'>
                                                <a className='btn btn-secondary lg:text-base lg:font-semibold lg:glass shadow-none lg:bg-secondary bg-secondary lg:hover:shadow-xl lg:hover:btn-secondary lg:hover:translate-x-1 lg:hover:-translate-y-1 rounded-md gap-2'>
                                                    Алгоритм действий
                                                    <FaLongArrowAltRight size={18} />
                                                </a>
                                            </Link>
                                            <Link href='/price-basic'>
                                                <a className='btn btn-secondary lg:text-base lg:font-semibold lg:glass shadow-none lg:bg-secondary bg-secondary lg:hover:shadow-xl lg:hover:btn-secondary lg:hover:translate-x-1 lg:hover:-translate-y-1 rounded-md gap-2'>
                                                    Цены
                                                    <FaLongArrowAltRight size={18} />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-screen h-full'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='lg:pb-24 xs:pb-12'>
                        <div className='flex flex-col lg:gap-16 xs:gap-8'>
                            <div className='flex xs:flex-col items-center justify-between lg:gap-8 xs:gap-4 w-full'>
                                <h2 className='lg:text-4xl xs:text-3xl font-bold'>Адреса офисов</h2>
                                <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>
                                    Закажите проверку на полиграфе в одном из наших офисов
                                </p>
                            </div>
                            <div className='flex flex-col lg:gap-16 xs:gap-8 w-full h-full lg:glass rounded-md lg:p-8 xs:p-8 xs:shadow'>
                                <div className='flex flex-col lg:gap-8 xs:gap-4'>
                                    <div className='flex flex-col lg:gap-4 xs:gap-2'>
                                        <h2 className='lg:text-2xl xs:text-xl font-bold'>
                                            Главный офис. Татьяна Алфеева. Петр Игнатюк
                                        </h2>
                                        <a
                                            className='lg:text-lg xs:text-base text-neutral/75 font-medium'
                                            href='https://www.google.com/maps/place/%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0+%D0%BD%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D1%80%D0%B0%D1%84%D0%B5.+%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%BD%D1%8B%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%D0%A2%D0%A0%D0%98%D0%A3%D0%9C%D0%A4/@55.6513494,37.3050263,11z/data=!4m9!1m2!2m1!1z0J_QvtC70LjQs9GA0LDRhCDQotGA0LjRg9C80YQ!3m5!1s0x46b54d6895bfff15:0x4023c3bf8f703640!8m2!3d55.683454!4d37.573903!15sCh3Qn9C-0LvQuNCz0YDQsNGEINCi0YDQuNGD0LzRhJIBEXBvbHlncmFwaF9zZXJ2aWNl?hl=ru-RU'
                                            target='_blank'
                                        >
                                            117036 Москваул. Кедрова д. 15, офис 210 (под. 3)
                                        </a>
                                    </div>
                                    <iframe
                                        className='h-96 opacity-75 ease-in-out transition-all'
                                        marginHeight={0}
                                        marginWidth={0}
                                        scrolling='no'
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144074.52191844126!2d37.30502631535723!3d55.6513493993578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d6895bfff15%3A0x4023c3bf8f703640!2z0J_RgNC-0LLQtdGA0LrQsCDQvdCwINC_0L7Qu9C40LPRgNCw0YTQtS4g0K3QutGB0L_QtdGA0YLQvdGL0Lkg0YbQtdC90YLRgCDQotCg0JjQo9Cc0KQ!5e0!3m2!1sru!2sru!4v1660479717276!5m2!1sru!2sru'
                                        width='100%'
                                        height='100%'
                                        frameBorder={0}
                                    />
                                </div>

                                <div className='flex flex-col lg:gap-8 xs:gap-4'>
                                    <div className='flex flex-col lg:gap-4 xs:gap-2'>
                                        <h2 className='lg:text-2xl xs:text-xl font-bold'>
                                            Доп. офис на Белорусской Эксперт Александр Г. и Денис К.
                                        </h2>
                                        <a
                                            className='lg:text-lg xs:text-base text-neutral/75 font-medium'
                                            href='https://www.google.com/maps/place/%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0+%D0%BD%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D1%80%D0%B0%D1%84%D0%B5.+%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%BD%D1%8B%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%22%D0%A2%D1%80%D0%B8%D1%83%D0%BC%D1%84%22/@55.6513494,37.3050263,11z/data=!4m9!1m2!2m1!1z0J_QvtC70LjQs9GA0LDRhCDQotGA0LjRg9C80YQ!3m5!1s0x46b54a67a148f6ab:0x5546d381f03be58c!8m2!3d55.7791719!4d37.5779406!15sCh3Qn9C-0LvQuNCz0YDQsNGEINCi0YDQuNGD0LzRhJIBEXBvbHlncmFwaF9zZXJ2aWNl?hl=ru-RU'
                                            target='_blank'
                                        >
                                            119049 Москва, Ленинградский пр-т, д. 5 с7 , офиса 206-1
                                        </a>
                                    </div>

                                    <iframe
                                        className='h-96 opacity-75 ease-in-out transition-all'
                                        marginHeight={0}
                                        marginWidth={0}
                                        scrolling='no'
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144074.52191844126!2d37.30502631535723!3d55.6513493993578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a67a148f6ab%3A0x5546d381f03be58c!2z0J_RgNC-0LLQtdGA0LrQsCDQvdCwINC_0L7Qu9C40LPRgNCw0YTQtS4g0K3QutGB0L_QtdGA0YLQvdGL0Lkg0YbQtdC90YLRgCAi0KLRgNC40YPQvNGEIg!5e0!3m2!1sru!2sru!4v1660479887617!5m2!1sru!2sru                        '
                                        width='100%'
                                        height='100%'
                                        frameBorder={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Contacts.pageTitle = 'Контакты'
Contacts.pageKeywords = 'Ключи'
Contacts.pageDescription = 'Описание'
Contacts.pageType = 'website'

export default Contacts
