import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
	FaLongArrowAltLeft,
	FaLongArrowAltRight,
	FaRubleSign,
	FaShoppingCart
} from 'react-icons/fa'

export const LayoutService = ({ children }) => {
	const TriumfDomen = useRouter()

	const BasicServicesLinks = [
		{
			id: 0,
			title: 'Расследование',
			path: '/basic/investigation',
			price: '0',
			pricePath: '/price-basic#investigation'
		},
		{
			id: 1,
			title: 'Для суда и адвокатов',
			path: '/basic/court-and-lawyer',
			price: '0',
			pricePath: '/price-basic#court-and-lawyer'
		},
		{
			id: 2,
			title: 'При приеме на работу',
			path: '/basic/recruitment',
			price: '0',
			pricePath: '/price-basic#recruitment'
		},
		{
			id: 3,
			title: 'Личная жизнь',
			path: '/basic/personal-life',
			price: '0',
			pricePath: '/price-basic#personal-life'
		}
	]

	const OtherServicesLinks = [
		{
			id: 0,
			title: 'Рецензия (аудит суд. экспертизы)',
			path: '/other/review',
			price: '0',
			pricePath: '/price-other#review'
		},
		{
			id: 1,
			title: 'Мошенничество или IT преступления',
			path: '/other/fraud-or-it-crimes',
			price: '0',
			pricePath: '/price-other#fraud-or-it-crimes'
		},
		{
			id: 2,
			title: 'Тест подростков (14-17 лет)',
			path: '/other/teen-test',
			price: '0',
			pricePath: '/price-other#teen-test'
		},
		{
			id: 3,
			title: 'Плановая проверка работников',
			path: '/other/scheduled-check-of-employees',
			price: '0',
			pricePath: '/price-other#scheduled-check-of-employees'
		},
		{
			id: 4,
			title: 'Свои вопросы',
			path: '/other/your-questions',
			price: '0',
			pricePath: '/price-other#your-questions'
		},
		{
			id: 5,
			title: 'Пробное тестирование',
			path: '/other/trial-testing',
			price: '0',
			pricePath: '/price-other#trial-testing'
		}
	]

	const ExtraServicesLinks = [
		{
			id: 0,
			title: 'Выезд к Заказчику',
			path: '/extra/departure-to-client',
			price: '0',
			pricePath: '/price-extra#departure-to-client'
		},
		{
			id: 1,
			title: 'Присутствие заказчика на тесте',
			path: '/extra/presence-client-at-test',
			price: '0',
			pricePath: '/price-extra#presence-client-at-test'
		},
		{
			id: 2,
			title: 'Индивидуальная консультация',
			path: '/extra/individual-consultation',
			price: '0',
			pricePath: '/price-extra#individual-consultation'
		},
		{
			id: 3,
			title: 'Командировка',
			path: '/extra/mission',
			price: '0',
			pricePath: '/price-extra#mission'
		},
		{
			id: 4,
			title: 'Материалы',
			path: '/extra/media',
			price: '0',
			pricePath: '/price-extra#media'
		},
		{
			id: 5,
			title: 'Проверка на английском языке',
			path: '/extra/check-on-english',
			price: '0',
			pricePath: '/price-extra#check-on-english'
		}
	]

	const LinkCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? '/basic'
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? '/basic'
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? '/basic'
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? '/basic'
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? '/other'
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? '/other'
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? '/other'
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? '/other'
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? '/other'
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? '/other'
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? '/extra'
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? '/extra'
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? '/extra'
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? '/extra'
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? '/extra'
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? '/extra'
			: э

	const PreviousLinkCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[3].path
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[0].path
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[1].path
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[2].path
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[5].path
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[0].path
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[1].path
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[2].path
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[3].path
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[4].path
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[5].path
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[0].path
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[1].path
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[2].path
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[3].path
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[4].path
			: ''

	const PreviousTitleCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[3].title
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[0].title
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[1].title
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[2].title
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[5].title
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[0].title
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[1].title
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[2].title
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[3].title
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[4].title
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[5].title
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[0].title
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[1].title
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[2].title
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[3].title
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[4].title
			: ''

	const NextLinkCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[1].path
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[2].path
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[3].path
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[0].path
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[1].path
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[2].path
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[3].path
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[4].path
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[5].path
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[0].path
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[1].path
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[2].path
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[3].path
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[4].path
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[5].path
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[0].path
			: ''

	const NextTitleCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[1].title
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[2].title
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[3].title
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[0].title
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[1].title
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[2].title
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[3].title
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[4].title
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[5].title
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[0].title
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[1].title
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[2].title
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[3].title
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[4].title
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[5].title
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[0].title
			: ''

	const SubTitleCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[0].title
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[1].title
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[2].title
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[3].title
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[0].title
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[1].title
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[2].title
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[3].title
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[4].title
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[5].title
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[0].title
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[1].title
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[2].title
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[3].title
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[4].title
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[5].title
			: ''

	const PriceLinkCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[1].pricePath
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[2].pricePath
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[3].pricePath
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[0].pricePath
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[1].pricePath
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[2].pricePath
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[3].pricePath
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[4].pricePath
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[5].pricePath
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[0].pricePath
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[1].pricePath
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[2].pricePath
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[3].pricePath
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[4].pricePath
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[5].pricePath
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[0].pricePath
			: ''

	const PriceTitleCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? BasicServicesLinks[1].price
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? BasicServicesLinks[2].price
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? BasicServicesLinks[3].price
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? BasicServicesLinks[0].price
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? OtherServicesLinks[1].price
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? OtherServicesLinks[2].price
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? OtherServicesLinks[3].price
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? OtherServicesLinks[4].price
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? OtherServicesLinks[5].price
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? OtherServicesLinks[0].price
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? ExtraServicesLinks[1].price
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? ExtraServicesLinks[2].price
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? ExtraServicesLinks[3].price
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? ExtraServicesLinks[4].price
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? ExtraServicesLinks[5].price
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? ExtraServicesLinks[0].price
			: ''

	const TitleCheck =
		TriumfDomen.pathname === BasicServicesLinks[0].path
			? 'Основные проверки'
			: TriumfDomen.pathname == BasicServicesLinks[1].path
			? 'Основные проверки'
			: TriumfDomen.pathname == BasicServicesLinks[2].path
			? 'Основные проверки'
			: TriumfDomen.pathname == BasicServicesLinks[3].path
			? 'Основные проверки'
			: TriumfDomen.pathname == OtherServicesLinks[0].path
			? 'Другие проверки'
			: TriumfDomen.pathname == OtherServicesLinks[1].path
			? 'Другие проверки'
			: TriumfDomen.pathname == OtherServicesLinks[2].path
			? 'Другие проверки'
			: TriumfDomen.pathname == OtherServicesLinks[3].path
			? 'Другие проверки'
			: TriumfDomen.pathname == OtherServicesLinks[4].path
			? 'Другие проверки'
			: TriumfDomen.pathname == OtherServicesLinks[5].path
			? 'Другие проверки'
			: TriumfDomen.pathname == ExtraServicesLinks[0].path
			? 'Опции (доп. услуги)'
			: TriumfDomen.pathname == ExtraServicesLinks[1].path
			? 'Опции (доп. услуги)'
			: TriumfDomen.pathname == ExtraServicesLinks[2].path
			? 'Опции (доп. услуги)'
			: TriumfDomen.pathname == ExtraServicesLinks[3].path
			? 'Опции (доп. услуги)'
			: TriumfDomen.pathname == ExtraServicesLinks[4].path
			? 'Опции (доп. услуги)'
			: TriumfDomen.pathname == ExtraServicesLinks[5].path
			? 'Опции (доп. услуги)'
			: null

	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					type='text/css'
					charSet='UTF-8'
					href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
				/>
				<link
					rel='stylesheet'
					type='text/css'
					href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
				/>
			</Head>
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
								<li>{SubTitleCheck}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='pb-24'>
						<div className='grid grid-cols-3 gap-8'>
							<Link href={PreviousLinkCheck}>
								<a className='w-full glass btn btn-ghost h-44 text-base font-semibold rounded-md hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu gap-4'>
									<FaLongArrowAltLeft size={24} />
									{PreviousTitleCheck}
								</a>
							</Link>
							<button className='cursor-default w-full glass-default bg-secondary text-secondary-content h-44 uppercase flex flex-col items-center justify-center text-base font-semibold rounded-md gap-2'>
								<span>{SubTitleCheck}</span>
								<span className='w-2/3 h-1 bg-secondary-content'></span>
							</button>
							<Link href={NextLinkCheck}>
								<a className='w-full glass btn btn-ghost h-44 text-base font-semibold rounded-md hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu gap-4'>
									{NextTitleCheck}
									<FaLongArrowAltRight size={24} />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='pb-24'>
						<div className='flex flex-col gap-16'>
							<div className='flex flex-col'>
								<h1 className='text-4xl font-bold'>
									{TitleCheck}
								</h1>
								<p className='text-lg font-medium text-neutral/75'>
									{SubTitleCheck}
								</p>
							</div>
							<div className='glass w-full h-full rounded-md p-8'>
								<div className='mb-16'>
									<div className='flex flex-col gap-16'>
										<div className='flex flex-col'>
											<h1 className='text-3xl font-semibold'>
												{SubTitleCheck}
											</h1>
											<p className='text-lg uppercase text-neutral/75 font-semibold flex items-center gap-1'>
												От{' '}
												<span className='underline underline-offset-2'>
													{PriceTitleCheck}
												</span>{' '}
												<FaRubleSign size={14} />
											</p>
										</div>
										<div className='flex flex-col gap-8'>
											{children}
										</div>
									</div>
								</div>
								{TriumfDomen.pathname ==
								BasicServicesLinks[0].path ? (
									<div className='w-full flex items-center justify-between'>
										<div className='flex items-center gap-4'>
											<a className='btn btn-ghost glass text-base font-semibold hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md'>
												Подготовка к расследованию
											</a>
											<a className='btn btn-ghost glass text-base font-semibold hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md'>
												Подготовка вопросов
											</a>
										</div>
										<Link href={PriceLinkCheck}>
											<a className='btn btn-secondary glass bg-secondary text-base font-semibold hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md gap-2'>
												В цены{' '}
												<FaShoppingCart size={18} />
											</a>
										</Link>
									</div>
								) : (
									<div className='flex justify-end'>
										<Link href={PriceLinkCheck}>
											<a className='btn btn-secondary glass bg-secondary text-base font-semibold hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md gap-2'>
												В цены{' '}
												<FaShoppingCart size={18} />
											</a>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='pb-24'>
						<div className='flex flex-col items-center p-16 glass rounded-md gap-16'>
							<h2 className='text-4xl font-bold'>
								Появился вопрос по услуге?
							</h2>
							<Link href='/contacts'>
								<a className='btn btn-secondary btn-lg glass bg-secondary hover:btn-secondary text-base font-semibold rounded-md gap-4 hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'>
									Обратная связь{' '}
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