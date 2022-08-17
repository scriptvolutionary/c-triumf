import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const LayoutServices = () => {
	const TriumfDomen = useRouter()

	const LinkCheck =
		TriumfDomen.pathname == '/basic'
			? '/basic'
			: TriumfDomen.pathname == '/other'
			? '/other'
			: TriumfDomen.pathname == '/extra'
			? '/extra'
			: ''
	const TitleCheck =
		TriumfDomen.pathname == '/basic'
			? 'Основные проверки'
			: TriumfDomen.pathname == '/other'
			? 'Другие проверки'
			: TriumfDomen.pathname == '/extra'
			? 'Опции (доп. услуги)'
			: ''

	const ServicesLinks = [
		{ id: 0, title: 'Основные проверки', path: '/basic' },
		{ id: 1, title: 'Другие проверки', path: '/other' },
		{ id: 2, title: 'Опции (доп. услуги)', path: '/extra' }
	]

	const BasicServicesLinks = [
		{
			id: 0,
			title: 'Расследование. По факту хищения или другое',
			path: 'basic/investigation'
		},
		{
			id: 1,
			title: 'Для суда и адвокатов',
			path: 'basic/court-and-lawyer'
		},
		{
			id: 2,
			title: 'При приеме на работу',
			path: 'basic/recruitment'
		},
		{
			id: 3,
			title: 'Личная жизнь',
			path: 'basic/personal-life'
		}
	]

	const OtherServicesLinks = [
		{
			id: 0,
			title: 'Рецензия (аудит суд. экспертизы)',
			path: 'other/review'
		},
		{
			id: 1,
			title: 'Мошенничество или IT преступления',
			path: 'other/fraud-or-it-crimes'
		},
		{
			id: 2,
			title: 'Тест подростков (14-17 лет)',
			path: 'other/teen-test'
		},
		{
			id: 3,
			title: 'Плановая проверка работников',
			path: 'other/scheduled-check-of-employees'
		},
		{
			id: 4,
			title: 'Свои вопросы',
			path: 'other/your-questions'
		},
		{
			id: 5,
			title: 'Пробное тестирование',
			path: 'other/trial-testing'
		}
	]

	const ExtraServicesLinks = [
		{
			id: 0,
			title: 'Выезд к Заказчику',
			path: 'extra/departure-to-client'
		},
		{
			id: 1,
			title: 'Присутствие заказчика на тесте',
			path: 'extra/presence-client-at-test'
		},
		{
			id: 2,
			title: 'Индивидуальная консультация',
			path: 'extra/individual-consultation'
		},
		{
			id: 3,
			title: 'Командировка',
			path: 'extra/mission'
		},
		{
			id: 4,
			title: 'Материалы',
			path: 'extra/media'
		},
		{
			id: 5,
			title: 'Проверка на английском языке',
			path: 'extra/check-on-english'
		},
		{
			id: 6,
			title: 'Срочность',
			path: '/price-exta#'
		},
		{
			id: 7,
			title: 'Иные услуги',
			path: '/price-exta#'
		},
		{
			id: 8,
			title: 'Работа в нерабочие дни или часы',
			path: '/price-exta#'
		}
	]

	return (
		<>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='py-8'>
						<div className='text-base font-medium breadcrumbs'>
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
					<div className='pb-24'>
						<div className='grid grid-cols-3 xs:gap-4 gap-8'>
							{ServicesLinks.map(s => (
								<Link href={s.path} key={s.id}>
									<a
										className={
											TriumfDomen.pathname == s.path
												? 'w-full lg:glass btn btn-secondary bg-secondary hover:btn-secondary xs:h-24 h-44 text-base font-semibold rounded-md flex flex-col gap-2'
												: 'w-full glass btn btn-ghost h-44 text-base font-semibold rounded-md hover:btn-secondary xs:h-24 hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'
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
					<div className='pb-24'>
						<div className='flex flex-col gap-16 xs:gap-8'>
							<div className='flex flex-col'>
								<h1 className='text-4xl font-bold xs:text-3xl'>
									Услуги
								</h1>
								<p className='text-lg xs:text-base font-medium text-neutral/75'>
									{TitleCheck}
								</p>
							</div>
							<div
								className={
									TriumfDomen.pathname == '/basic'
										? 'grid grid-cols-2 xs:grid-cols-2 xs:gap-4 gap-8'
										: 'grid grid-cols-3 xs:grid-cols-2 xs:gap-4 gap-8'
								}
							>
								{TriumfDomen.pathname == '/basic' &&
									BasicServicesLinks.map(b => (
										<Link href={b.path} key={b.id}>
											<a className='w-full btn btn-ghost xs:h-24 h-36 text-base font-semibold glass rounded-md hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'>
												{b.title}
											</a>
										</Link>
									))}
								{TriumfDomen.pathname == '/other' &&
									OtherServicesLinks.map(o => (
										<Link href={o.path} key={o.id}>
											<a className='w-full btn btn-ghost xs:h-24 h-36 text-base font-semibold glass rounded-md hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'>
												{o.title}
											</a>
										</Link>
									))}
								{TriumfDomen.pathname == '/extra' &&
									ExtraServicesLinks.map(e => (
										<Link href={e.path} key={e.id}>
											<a className='w-full btn btn-ghost xs:h-24 h-36 text-base font-semibold glass rounded-md hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'>
												{e.title}
											</a>
										</Link>
									))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='pb-24'>
						<div className='flex flex-col items-center xs:p-8 p-16 glass rounded-md xs:gap-8 gap-16'>
							<h2 className='text-4xl xs:text-3xl xs:text-center font-bold'>
								Затрудняетесь с выбором?
							</h2>
							<Link href='/contacts'>
								<a className='btn btn-secondary btn-lg glass bg-secondary hover:btn-secondary text-base font-semibold rounded-md gap-4 hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'>
									Проконсультироваться{' '}
									<FaLongArrowAltRight size={18} />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
