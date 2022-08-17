import Head from 'next/head'
import Link from 'next/link'

import Slider from 'react-slick'

import { FaCheck, FaLongArrowAltRight, FaRubleSign } from 'react-icons/fa'

function Home() {
	const SliderOptions = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 750,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	}

	const UsefulLinks = [
		{ id: 0, title: 'Инструкции перед тестом', path: '/instructions' },
		{ id: 1, title: 'Вопросы на полиграфе', path: '/' },
		{ id: 2, title: 'Алгоритм действий', path: '/' }
	]

	const SliderContent = [
		{
			id: 0,
			image: '/slider/priem.jpg',
			title: 'Полиграф при приеме на работу',
			description:
				'Сэкономьте время и деньги, отсеяв неблагонадежных людей "с порога".',
			path: '/basic/recruitment',
			price: '4.200',
			pricePath: '/price-basic#recruitment'
		},
		{
			id: 1,
			image: '/slider/proverka.png',
			title: 'Периодическая проверка на полиграфе работающих сотрудников',
			description:
				'Нейтрализуйте финансовые утечки проверкой на "левый" доход за счет работодателя',
			path: '/other/scheduled-check-of-employees',
			price: '4.700',
			pricePath: '/price-other#scheduled-check-of-employees'
		},
		{
			id: 2,
			image: '/slider/rassledovanie.jpg',
			title: 'Расследование по факту хищения с применением полиграфа',
			description: 'Поручите проблему полиграфологу и получите ясность.',
			path: '/basic/investigation',
			price: '5.000',
			pricePath: '/price-basic#investigation'
		},
		{
			id: 3,
			image: '/slider/sud.jpg',
			title: 'Судебная психофизиологическая экспертиза на полиграфе',
			description:
				'Увеличьте шансы на победу в суде с заключением специалиста или эксперта п.3 ст. 80 УПК РФ',
			path: '/basic/court-and-lawyer',
			price: '4.200',
			pricePath: '/price-basic#court-and-lawyer'
		}
	]

	const StatContent = [
		{
			id: 0,
			value: '15',
			title: 'Лет',
			description:
				'С 2007 года помогаем установить истину качественной проверкой на полиграфе.'
		},
		{
			id: 1,
			value: '2',
			title: 'Офиса в Москве',
			description: 'В 5-7 мин. от м. Академическая и м. Белорусская.'
		},
		{
			id: 2,
			value: '3',
			title: 'Категории экспертов',
			description:
				'На выбор Заказчика: эксперт, эксперт высшей категории и Т.Алфеева.'
		}
	]

	const CompanysContent = [
		{ id: 0, image: '/companys/bp.svg' },
		{ id: 1, image: '/companys/rjd.png' },
		{ id: 2, image: '/companys/samolet.svg' },
		{ id: 3, image: '/companys/rosneft.svg' },
		{ id: 4, image: '/companys/titan.jpg' },
		{ id: 5, image: '/companys/vivion.png' }
	]

	const WhyTriumfContent = [
		{
			id: 0,
			icon: <FaCheck size={24} />,
			title: 'Закрытые методические приемы',
			description:
				'Професссиональные полиграфологи Триумфа знают современные, закрытые от интернета методические приемы, позволяющие нейтрализовать попытку обмануть полиграф.'
		},
		{
			id: 1,
			icon: <FaCheck size={24} />,
			title: ' Соблюдение требований',
			description:
				'Если соблюдать все универсальные требования к проверке на полиграфе- быстро не получится, но точность того стоит.'
		},
		{
			id: 2,
			icon: <FaCheck size={24} />,
			title: ' Регулярное повышение квалификации',
			description:
				'Не секрет, что жизнь не стоит на месте и каждый причастный, который вынужден пройти проверку на полиграфе захочет обмануть детектор лжи. Да, каждый полиграфолог об этом знает, видит. Но мы не расслабляемся и еще больше повышаем квалификацию, чтобы "быть на шаг впереди".'
		},
		{
			id: 3,
			icon: <FaCheck size={24} />,
			title: ' Психологическое образование у полиграфолога',
			description:
				'Что позволяет быть более эффективным и при проверке на полиграфе.'
		}
	]

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
					<div className='lg:py-8 xs:py-4'>
						<div className='grid lg:grid-cols-3 xs:grid-cols-1 xs:gap-4 lg:gap-8'>
							{UsefulLinks.map(l => (
								<Link href={l.path} key={l.id}>
									<a className='btn btn-ghost btn-block lg:text-base lg:font-semibold glass lg:h-24 lg:hover:btn-secondary lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1 rounded-md'>
										{l.title}
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
						<Slider {...SliderOptions}>
							{SliderContent.map(s => (
								<div key={s.id}>
									<div className='card h-[520px] lg:card-side rounded-md glass'>
										<figure className='lg:w-1/3 xs:w-full'>
											<img
												className='lg:w-full xs:h-full'
												src={s.image}
											/>
										</figure>
										<div className='card-body gap-4 lg:w-2/3 xs:w-full xs:pl-4 xs:pt-4 pr-4 pb-4'>
											<h1 className='card-title lg:text-3xl xs:text-xl font-semibold'>
												{s.title}
											</h1>
											<p className='text-lg font-medium text-neutral/75'>
												{s.description}
											</p>
											<div className='card-actions gap-4 xs:gap-4 justify-end'>
												<Link href={s.pricePath}>
													<a className='btn btn-ghost glass lg:hover:btn-secondary lg:text-base lg:font-semibold gap-1 rounded-md lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-xl ease-in-out transition-all transform-gpu'>
														От {s.price}
														<FaRubleSign
															size={14}
														/>
													</a>
												</Link>
												<Link href={s.path}>
													<a className='btn btn-secondary lg:glass lg:bg-secondary xs:bg-secondary lg:shadow-none lg:hover:btn-secondary lg:text-base lg:font-semibold gap-2 rounded-md lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-xl ease-in-out transition-all transform-gpu'>
														Об услуге
														<FaLongArrowAltRight
															size={18}
														/>
													</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='lg:pb-24 xs:pb-12'>
						<div className='flex flex-col lg:gap-16 xs:gap-8'>
							<h2 className='lg:text-4xl xs:text-3xl font-bold'>
								Триумф в цифрах
							</h2>
							<div className='grid lg:grid-cols-3 xs:grid-cols-1 xs:gap-4 lg:gap-8'>
								{StatContent.map(s => (
									<div
										className='w-full glass text-base-content xs:p-4 p-8 rounded-md flex flex-col items-center justify-center text-center lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-xl ease-in-out transition-all transform-gpu'
										key={s.id}
									>
										<div className='flex flex-col gap-2'>
											<p className='text-secondary text-7xl xs:text-6xl font-bold'>
												{s.value}
											</p>
											<p className='text-3xl xs:text-2xl font-semibold'>
												{s.title}
											</p>
											<p className='text-lg xs:text-sm font-medium text-neutral/75 text-center'>
												{s.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='lg:pb-24 xs:pb-12'>
						<div className='flex flex-col lg:gap-16 xs:gap-8'>
							<div className='w-full flex xs:flex-col items-center justify-between xs:gap-8 gap-16'>
								<h2 className='lg:text-4xl xs:text-3xl font-bold'>
									Нам доверяют крупные компании
								</h2>
								<p className='lg:text-lg font-medium text-neutral/75 xs:text-center'>
									Качественное исследование на полиграфе
									окупается в десятки раз, именно поэтому наши
									Партнеры–Заказчики возвращаются к нам и
									рекомендуют нас своим коллегам.
								</p>
							</div>
							<div className='grid lg:grid-cols-3 xs:grid-cols-2 xs:gap-4 lg:gap-8'>
								{CompanysContent.map(c => (
									<div
										className='w-full glass text-base-content p-8 xs:p-4 rounded-md flex flex-col items-center justify-center text-center lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-xl ease-in-out transition-all transform-gpu'
										key={c.id}
									>
										<img
											className='h-44 xs:h-24 lg:scale-110'
											src={c.image}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='lg:pb-24 xs:pb-12'>
						<div className='flex flex-col lg:gap-16 xs:gap-8'>
							<div className='w-full flex flex-col items-center justify-between xs:gap-8 gap-16'>
								<h2 className='lg:text-4xl xs:text-3xl font-bold'>
									Почему стоит выбрать Триумф?
								</h2>
								<p className='lg:text-lg font-medium text-neutral/75 lg:w-5/6 text-center'>
									Ключевое. За все проверки экспертов есть
									ответственное лицо- основатель Триумфа
									Татьяна Алфеева. В случае вопросов есть
									христинская позиция быть на стороне Истины,
									а не полиграфолога или заказчика.
								</p>
							</div>
							<div className='grid lg:grid-cols-2 xs:grid-cols-1 xs:gap-4 lg:gap-8'>
								{WhyTriumfContent.map(w => (
									<div
										className='w-full glass text-base-content xs:p-4 lg:p-8 rounded-md flex flex-col xs:gap-2 lg:gap-4 text-justify lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-xl ease-in-out transition-all transform-gpu'
										key={w.id}
									>
										<div className='w-full flex items-center justify-between'>
											<span className='text-success'>
												{w.icon}
											</span>
											<h2 className='lg:text-xl xs:text-base xs:text-end xs:font-semibold font-bold'>
												{w.title}
											</h2>
										</div>
										<p className='lg:text-lg xs:text-sm font-medium text-neutral/75'>
											{w.description}
										</p>
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

Home.pageTitle = 'Главная'
Home.pageKeywords = 'Ключи'
Home.pageDescription = 'Описание'
Home.pageType = 'website'

export default Home
