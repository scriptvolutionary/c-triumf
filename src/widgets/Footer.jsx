import Link from 'next/link'

import {
	FaEnvelope,
	FaMap,
	FaPhone,
	FaTelegramPlane,
	FaWhatsapp
} from 'react-icons/fa'

export const Footer = () => {
	const FooterLinks = [
		{
			id: 0,
			title: 'Навигация',
			content: [
				{ id: 0, title: 'Услуги', path: '/basic' },
				{ id: 1, title: 'Цены', path: '/price-basic' },
				{ id: 2, title: 'Инструкции', path: '/instructions' },
				{ id: 3, title: 'Алгоритм заказа', path: '/logic' }
			]
		},
		{
			id: 1,
			title: 'Компания',
			content: [
				{ id: 0, title: 'Дипломы об образовании', path: '/alfeeva' },
				{ id: 1, title: 'КП', path: '/offer' },
				{ id: 2, title: 'Партнеры-полиграфологи', path: '' },
				{ id: 3, title: 'Категории экспертов', path: '' },
				{ id: 4, title: 'Контроль качества', path: '' },
				{ id: 5, title: 'Образец отчетов', path: '' }
			]
		},
		{
			id: 2,
			title: 'Об оплате',
			content: [
				{ id: 0, title: 'Способы оплаты', path: '' },
				{ id: 1, title: 'Реквизиты. Учетная карточка', path: '' },
				{ id: 2, title: 'Публичная оферта', path: '/offer' },
				{ id: 3, title: 'Депозит', path: '' },
				{ id: 4, title: 'Образец счет-договора', path: '' }
			]
		},
		{
			id: 3,
			title: 'Полезные ссылки',
			content: [
				{ id: 0, title: 'База знаний Триумф', path: '' },
				{ id: 1, title: 'Требования к проверечным вопросам', path: '' },
				{ id: 2, title: 'Конфиденциальность результатов', path: '' },
				{ id: 3, title: 'Политика конфиденциальности', path: '' },
				{ id: 4, title: 'Требования к помещению', path: '' },
				{ id: 4, title: 'Законность проверки на полиграфе', path: '' },
				{ id: 4, title: 'FAQ', path: '/faq' }
			]
		}
	]

	const ContactLinks = [
		{
			id: 0,
			title: 'Telegram',
			icon: <FaTelegramPlane size={18} />,
			path: 'https://t.me/Alfeeva1'
		},
		{
			id: 1,
			title: 'WhatsApp',
			icon: <FaWhatsapp size={18} />,
			path: 'https://wa.me/+79067772503'
		},
		{
			id: 2,
			title: 'alfeeva@c-triumf.ru',
			icon: <FaEnvelope size={18} />,
			path: 'mailto:test@c-triumf.ru'
		},
		{
			id: 3,
			title: '+7 (906) 777-25-03',
			icon: <FaPhone size={18} />,
			path: 'tel:+79067772503'
		}
	]

	return (
		<footer className='glass w-screen h-full'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='footer py-12'>
					{FooterLinks.map(l => (
						<div key={l.id}>
							<span className='footer-title text-lg'>
								{l.title}
							</span>
							{l.content.map(c => (
								<Link href={c.path} key={c.id}>
									<a className='w-full text-base font-medium hover:text-secondary hover:translate-x-1 hover:-translate-y-1 ease-in-out transition-all transform-gpu'>
										{c.title}
									</a>
								</Link>
							))}
						</div>
					))}
					<div>
						<span className='footer-title text-lg'>
							Обратная связь
						</span>
						<Link href='/contacts'>
							<a className='w-full text-base font-medium hover:text-secondary hover:translate-x-1 hover:-translate-y-1 ease-in-out transition-all transform-gpu mb-2'>
								Контакты
							</a>
						</Link>
						<div className='flex flex-col gap-2 w-full'>
							{ContactLinks.map(l => (
								<a
									className='cursor-pointer w-full flex items-center text-base gap-2 font-medium hover:text-secondary hover:translate-x-1 hover:-translate-y-1 ease-in-out transition-all'
									href={l.path}
									target={
										l.path !==
											('mailto:alfeeva@c-triumf.ru' ||
												'tel:+79067772503') && '_blank'
									}
								>
									{l.icon}
									<span>{l.title}</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='border-t border-base-300'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='footer py-6 text-base'>
						<div className='items-center grid-flow-col font-medium'>
							<p>© ООО НЭЦ «Триумф» 2007-2022</p>
							<p>
								© АНО СЭЦ «Триумф» 2011-2022 — Все права
								защищены.
							</p>
						</div>
						<div className='md:place-self-center md:justify-self-end'>
							<div className='grid grid-flow-col gap-4'>
								<Link href='/sitemap'>
									<a className='flex items-center gap-2 font-medium hover:text-secondary hover:translate-x-1 hover:-translate-y-1 ease-in-out transition-all'>
										<FaMap size={18} />
										<span>Карта сайта</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
