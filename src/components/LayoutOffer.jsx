import Link from 'next/link'
import { useRouter } from 'next/router'

export const LayoutOffer = () => {
    const TriumfDomen = useRouter()

    const LinkCheck =
        TriumfDomen.pathname == '/offer'
            ? '/offer'
            : TriumfDomen.pathname == '/offer-person'
            ? '/offer-person'
            : ''

    const TitleCheck =
        TriumfDomen.pathname == '/offer'
            ? 'Публичная оферта'
            : TriumfDomen.pathname == '/offer-person'
            ? 'Публичная оферта для физ. и юр. лиц'
            : ''

    const OfferLinks = [
        {
            id: 0,
            title: 'Публичная оферта',
            path: '/offer'
        },
        { id: 1, title: 'Публичная оферта для физ. и юр. лиц', path: '/offer-person' }
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
                            {OfferLinks.map((s) => (
                                <Link href={s.path} key={s.id}>
                                    <a
                                        className={
                                            TriumfDomen.pathname == s.path
                                                ? 'w-full lg:glass btn btn-secondary lg:bg-secondary bg-secondary hover:btn-secondary xs:h-24 lg:h-44 lg:text-base lg:font-semibold rounded-md flex flex-col gap-2'
                                                : 'w-full lg:glass xs:shadow btn btn-ghost h-44 lg:text-base lg:font-semibold rounded-md hover:btn-secondary xs:h-24 lg:h-44 lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1 transform-gpu'
                                        }
                                    >
                                        <span>{s.title}</span>
                                        {TriumfDomen.pathname == s.path && (
                                            <span className='w-2/3 h-1 bg-secondary-content'></span>
                                        )}
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
                                <h1 className='lg:text-4xl xs:text-3xl font-bold'>
                                    Публичная оферта
                                </h1>
                                <p className='lg:text-lg xs:text-base font-medium text-neutral/75'>
                                    {TitleCheck}
                                </p>
                            </div>
                            <div className='w-full h-full'>
                                {TriumfDomen.pathname == '/offer-person' && (
                                    <div className='glass w-full h-full p-8 rounded-md'>
                                        <div className='flex flex-col gap-16'>
                                            <div className='flex flex-col gap-8'>
                                                <h1 className='text-3xl font-bold'>
                                                    Договор- публичная оферта для физ. и юр. лиц:
                                                </h1>
                                                <div className='flex flex-col gap-4'>
                                                    <h2 className='text-2xl font-semibold'>
                                                        Исполнитель:
                                                    </h2>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>
                                                            АНО «Судебно-экспертный центр «Триумф»
                                                        </span>{' '}
                                                        (ИНН 7704278686), в лице директора Алфеевой
                                                        Татьяны Анатольевны, действующей на
                                                        основании Устава.
                                                    </p>
                                                </div>
                                                <div className='flex flex-col gap-4'>
                                                    <h2 className='text-2xl font-semibold'>
                                                        Термины:
                                                    </h2>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>ОИП</span> —
                                                        опрос с использованием полиграфа.
                                                    </p>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>
                                                            Опрашиваемое лицо
                                                        </span>{' '}
                                                        — физическое лицо со стороны Заказчика,
                                                        отправленное на ОИП.
                                                    </p>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>
                                                            Заявка
                                                        </span>{' '}
                                                        — обращение в свободной форме провести ОИП с
                                                        указанным ФИО работника по контактам
                                                        Исполнителя.
                                                    </p>
                                                </div>
                                            </div>
                                            <ul className='list-decimal list-inside flex flex-col gap-8'>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Основные положения
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            1.1 Настоящий Договор является
                                                            официальным предложением (публичной
                                                            офертой https://c-triumf.ru/oferta-fiz/)
                                                            АНО «Судебно- экспертный центр «Триумф»
                                                            в лице директора Алфеевой Татьяны
                                                            Анатольевны (далее Исполнитель) для
                                                            физического лица (далее Заказчик),
                                                            которое примет настоящее предложение на
                                                            указанных ниже условиях.
                                                        </p>
                                                        <p>
                                                            1.2 Заказчик обеспечивает добровольную
                                                            явку на ОИП опрашиваемого лица в
                                                            оговоренное место и время, устно
                                                            убедившись в отсутствии противопоказаний
                                                            к ОИП
                                                            https://c-triumf.ru/protivopokazaniya/
                                                        </p>
                                                        <p>
                                                            1.3 Заказчик обеспечивает явку на ОИП
                                                            опрашиваемое лицо в оговоренное место и
                                                            время, убедившись в отсутствии
                                                            противопоказаний к ОИП
                                                            https://c-triumf.ru/protivopokazaniya/
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Условия акцепта (подписания) договора -
                                                        оферты
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <div className='flex flex-col gap-2'>
                                                            <p>
                                                                2.1 Договор считается заключенным и
                                                                подписанным, если:
                                                            </p>
                                                            <p>
                                                                — от Заказчика или его представителя
                                                                поступила устная или письменная
                                                                заявка на ОИП работника, на
                                                                основании ст.158 ГК РФ (Формы
                                                                сделок) или 159 ГК РФ (Устные
                                                                сделки) по указанным Контактам
                                                                Исполнителя.
                                                            </p>
                                                            <p>
                                                                — не была отменена Заказчиком более,
                                                                чем за 24 ч. до начала теста.
                                                            </p>
                                                            <p>
                                                                — было получено согласие
                                                                (готовность) Исполнителя выполнить
                                                                заявки в указанных объемах и
                                                                условиях.
                                                            </p>
                                                        </div>
                                                        <p>
                                                            2.2 Договор — оферта не требует
                                                            скрепления печатями и/или подписания
                                                            Заказчиком и Исполнителем и сохраняет
                                                            при этом юридическую силу в соответствии
                                                            со ст. 438 ГК РФ (Акцепт) п. 2.1
                                                            Договора (условия акцепта оферты).
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Оплата и результат
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            3.1 Цены на услуги указаны на сайте
                                                            https://c-triumf.ru/price-basic
                                                        </p>
                                                        <div className='flex flex-col gap-2'>
                                                            <p>
                                                                3.2 По умолчанию оплата происходит
                                                                2-мя платежами:
                                                            </p>
                                                            <p>
                                                                — Депозит 2.000 руб. на случай
                                                                неявки без отмены менее, чем за 24
                                                                часа.
                                                            </p>
                                                            <p>
                                                                — Доплата оставшейся суммы за ОИП
                                                                перед тестом.
                                                            </p>
                                                        </div>
                                                        <p>
                                                            3.3 Способы оплаты услуги указаны при
                                                            оформлении платежа.
                                                        </p>
                                                        <p>
                                                            3.4 Исполнитель после проведения ОИП и в
                                                            течение следующих 3 (трех) рабочих дней
                                                            отправляет заключение на e-mail или
                                                            мессенджер Заказчика при условии 100%
                                                            оплаты.
                                                        </p>
                                                        <p>
                                                            3.5 За Исполнителем есть право отправить
                                                            результаты ОИП до оплаты Заказчиком.
                                                        </p>
                                                        <p>
                                                            3.6 Конфиденциальная информация,
                                                            содержащаяся в заключении или
                                                            материалах, согласно требованиям ФЗ «О
                                                            персональных данных» не может быть
                                                            передана кем-либо из Сторон для
                                                            ознакомления или использования третьим
                                                            лицам (в т.ч. в полицию).
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Признание юридически - значимой эл.
                                                        переписки
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            4.1 Переписка по электронной почте или в
                                                            мессенджере имеет силу простой
                                                            электронной подписи и равнозначна
                                                            бумажным документам с личными подписями
                                                            сторон.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Приемка работ
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            5.1 После отправки результатов ОИП у
                                                            Заказчика есть 3 (три) рабочих дня на
                                                            замечания по результатам работ, соблюдая
                                                            принцип независимости эксперта.
                                                        </p>
                                                        <p>
                                                            5.2 Если Заказчик не прислал письменные
                                                            мотивированные возражения в течение 3-х
                                                            рабочих дней — результат работы
                                                            считается выполненным качественно и
                                                            принятым Заказчиком без замечаний, а
                                                            приемка работы подписана.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Ответственность
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            6.1 В случае срыва ОИП менее, чем за 24
                                                            часа — Заказчик перечисляет Исполнителю
                                                            компенсацию за простой в работе и
                                                            упущенную выгоду -2.000 руб.
                                                        </p>
                                                        <p>
                                                            6.2 В случае отправки работника с
                                                            наличием противопоказаний, указанных в
                                                            п.2 (пример: боль, ОРВИ и пр.)
                                                            Исполнитель не может гарантировать
                                                            получение результата и работа
                                                            оплачивается в полном объеме.
                                                        </p>
                                                        <p>
                                                            6.3 Ответственность Заказчика и
                                                            Исполнителя ограничена стоимостью
                                                            данного Договора.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Срок действия
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            7.1 Договор вступает в силу и действует
                                                            до полного выполнения своих обязательств
                                                            Сторонами.
                                                        </p>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                                {TriumfDomen.pathname == '/offer' && (
                                    <div className='glass w-full h-full p-8 rounded-md'>
                                        <div className='flex flex-col gap-16'>
                                            <div className='flex flex-col gap-8'>
                                                <h1 className='text-3xl font-bold'>
                                                    Договор - публичная оферта:
                                                </h1>
                                                <div className='flex flex-col gap-4'>
                                                    <h2 className='text-2xl font-semibold'>
                                                        Исполнитель:
                                                    </h2>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>
                                                            АНО «Судебно-экспертный центр «Триумф»
                                                        </span>{' '}
                                                        (ИНН 7704278686), в лице директора Алфеевой
                                                        Татьяны Анатольевны, действующей на
                                                        основании Устава.
                                                    </p>
                                                </div>
                                                <div className='flex flex-col gap-4'>
                                                    <h2 className='text-2xl font-semibold'>
                                                        Термины:
                                                    </h2>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>ОИП</span> —
                                                        опрос с использованием полиграфа.
                                                    </p>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>
                                                            Опрашиваемое лицо
                                                        </span>{' '}
                                                        — физическое лицо со стороны Заказчика,
                                                        отправленное на ОИП.
                                                    </p>
                                                    <p className='text-xl text-neutral/75 text-justify'>
                                                        <span className='font-semibold'>
                                                            Заявка
                                                        </span>{' '}
                                                        — обращение в свободной форме провести ОИП с
                                                        указанным ФИО работника по контактам
                                                        Исполнителя.
                                                    </p>
                                                </div>
                                            </div>
                                            <ul className='list-decimal list-inside flex flex-col gap-8'>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Основные положения
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            1.1 Настоящий Договор является
                                                            официальным предложением (публичной
                                                            офертой https://c-triumf.ru/offer ) АНО
                                                            «Судебно- экспертный центр «Триумф» в
                                                            лице директора Алфеевой Татьяны
                                                            Анатольевны (далее Исполнитель) для
                                                            юридического лица (далее Заказчик),
                                                            которое примет настоящее предложение на
                                                            указанных ниже условиях.
                                                        </p>
                                                        <p>
                                                            1.2 Исполнитель оказывает услуги по ОИП,
                                                            а Заказчик оплачивает в течение 3 -х
                                                            рабочих дней после дня выставления
                                                            настоящего Счет- договора.
                                                        </p>
                                                        <p>
                                                            1.3 Заказчик обеспечивает явку на ОИП
                                                            работников в оговоренное место и время,
                                                            устно убедившись в отсутствии
                                                            противопоказаний к ОИП
                                                            https://c-triumf.ru/protivopokazaniya/
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Условия акцепта (подписания) договора -
                                                        оферты
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <div className='flex flex-col gap-2'>
                                                            <p>
                                                                2.1 Договор считается заключенным и
                                                                подписанным, если:
                                                            </p>
                                                            <p>
                                                                — от Заказчика или его представителя
                                                                поступила устная или письменная
                                                                заявка на ОИП работника, на
                                                                основании ст.158 ГК РФ (Формы
                                                                сделок) или 159 ГК РФ (Устные
                                                                сделки) по указанным Контактам
                                                                Исполнителя.
                                                            </p>
                                                            <p>
                                                                — не была отменена Заказчиком более,
                                                                чем за 24 ч. до начала теста.
                                                            </p>
                                                            <p>
                                                                — было получено согласие
                                                                (готовность) Исполнителя выполнить
                                                                заявки в указанных объемах и
                                                                условиях.
                                                            </p>
                                                        </div>
                                                        <p>
                                                            2.2 Договор — оферта не требует
                                                            скрепления печатями и/или подписания
                                                            Заказчиком и Исполнителем и сохраняет
                                                            при этом юридическую силу в соответствии
                                                            со ст. 438 ГК РФ (Акцепт) п. 2.1
                                                            Договора (условия акцепта оферты).
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Оплата и результат
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            3.1 Цены на услуги указаны на сайте
                                                            https://c-triumf.ru/price-basic
                                                        </p>

                                                        <p>
                                                            3.2 Способы оплаты услуги указаны при
                                                            оформлении платежа.
                                                        </p>

                                                        <p>
                                                            3.3 Исполнитель после проведения ОИП и в
                                                            течение следующих 3 (трех) рабочих дней
                                                            отправляет заключение на e-mail или
                                                            мессенджер Заказчика при условии 100%
                                                            оплаты.
                                                        </p>
                                                        <p>
                                                            3.4 За Исполнителем есть право отправить
                                                            результаты ОИП до оплаты Заказчиком.
                                                        </p>
                                                        <p>
                                                            3.5 Конфиденциальная информация,
                                                            содержащаяся в заключении или
                                                            материалах, согласно требованиям ФЗ «О
                                                            персональных данных» не может быть
                                                            передана кем-либо из Сторон для
                                                            ознакомления или использования третьим
                                                            лицам (в т.ч. в полицию).
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Признание юридически - значимой эл.
                                                        переписки
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            4.1 Переписка по электронной почте или в
                                                            мессенджере имеет силу простой
                                                            электронной подписи и равнозначна
                                                            бумажным документам с личными подписями
                                                            сторон.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Подписание акта
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            5.1 После отправки результатов ОИП у
                                                            Заказчика есть 3 (три) рабочих дня на
                                                            замечания по результатам работ, соблюдая
                                                            принцип независимости эксперта.
                                                        </p>
                                                        <p>
                                                            5.2 Если Заказчик не прислал письменные
                                                            мотивированные возражения в течение 3-х
                                                            рабочих дней — результат работы
                                                            считается выполненным качественно и
                                                            принятым Заказчиком без замечаний, а
                                                            приемка работы подписана.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Ответственность
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            6.1 В случае срыва ОИП менее, чем за 24
                                                            часа — Заказчик перечисляет Исполнителю
                                                            компенсацию за простой в работе и
                                                            упущенную выгоду -1.500 руб.
                                                        </p>
                                                        <p>
                                                            6.2 В случае отправки работника с
                                                            наличием противопоказаний, указанных в
                                                            п.2 (пример: боль, ОРВИ и пр.)
                                                            Исполнитель не может гарантировать
                                                            получение результата и работа
                                                            оплачивается в полном объеме.
                                                        </p>
                                                        <p>
                                                            6.3 В случае срывов сроков оказания
                                                            услуг Исполнителем за исключением
                                                            форс-мажорных ситуаций, Заказчик имеет
                                                            право требовать выплаты неустойки в
                                                            размере 0.1% от оплаченного авансового
                                                            платежа по данному Договору.
                                                        </p>
                                                        <p>
                                                            6.4 В случае несвоевременной оплаты
                                                            услуг , полученного по настоящему
                                                            Договору , Заказчик оплачивает
                                                            Исполнителю пени в размере 0,1 % от
                                                            стоимости неоплаченных оказанных услуг
                                                            за каждый день просрочки.
                                                        </p>
                                                        <p>
                                                            6.5 Ответственность Заказчика и
                                                            Исполнителя ограничена стоимостью
                                                            данного Договора.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-8'>
                                                    <li className='text-2xl font-semibold'>
                                                        Срок действия
                                                    </li>
                                                    <div className='flex flex-col gap-4 text-xl text-neutral/75 text-justify'>
                                                        <p>
                                                            7.1 Договор вступает в силу и действует
                                                            до полного выполнения своих обязательств
                                                            Сторонами.
                                                        </p>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
