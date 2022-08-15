import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const LayoutInstructions = () => {
	const TriumfDomen = useRouter()

	const LinkCheck =
		TriumfDomen.pathname == '/instructions'
			? '/instructions'
			: TriumfDomen.pathname == '/instructions-court'
			? '/instructions-court'
			: ''

	const TitleCheck =
		TriumfDomen.pathname == '/instructions'
			? 'Для физ. и юр. лиц'
			: TriumfDomen.pathname == '/instructions-court'
			? 'Для суда'
			: ''

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
						<div className='grid grid-cols-2 gap-8'>
							{InstructionsLinks.map(s => (
								<Link href={s.path} key={s.id}>
									<a
										className={
											TriumfDomen.pathname == s.path
												? 'w-full glass btn btn-secondary bg-secondary hover:btn-secondary h-44 text-base font-semibold rounded-md flex flex-col gap-2'
												: 'w-full glass btn btn-ghost h-44 text-base font-semibold rounded-md hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transform-gpu'
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
						<div className='flex flex-col gap-16'>
							<div className='flex flex-col'>
								<h1 className='text-4xl font-bold'>
									Инструкции
								</h1>
								<p className='text-lg font-medium text-neutral/75'>
									{TitleCheck}
								</p>
							</div>
							<div className='flex flex-col gap-8'>
								{TriumfDomen.pathname == '/instructions' &&
									InstructionsDefaultContent.map(i => (
										<div
											className='glass w-full h-full rounded-md p-8'
											key={i.id}
										>
											<div className='flex flex-col gap-16'>
												<div className='flex flex-col gap-8'>
													<h1 className='text-3xl font-semibold'>
														{i.title}
													</h1>
													<div className='w-full flex flex-col gap-8'>
														{i.content?.map(c => (
															<div
																className='w-full flex items-center gap-8'
																key={c.id}
															>
																<div className='w-5/6 flex flex-col gap-4'>
																	<p className='text-2xl font-semibold'>
																		{
																			c.title
																		}
																	</p>
																	<p className='text-lg font-medium text-neutral/75'>
																		{c.desc}
																	</p>
																</div>
																<div className='w-1/6'>
																	<a
																		className='btn btn-secondary btn-block justify-between bg-secondary hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 rounded-md glass'
																		href={
																			c.doc
																		}
																		target='_blank'
																	>
																		Скачать{' '}
																		<FaLongArrowAltRight
																			size={
																				18
																			}
																		/>
																	</a>
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									))}
								{TriumfDomen.pathname ==
									'/instructions-court' &&
									InstructionsCourtContent.map(i => (
										<div
											className='glass w-full h-full rounded-md p-8'
											key={i.id}
										>
											<div className='flex flex-col gap-16'>
												<div className='flex flex-col gap-8'>
													<h1 className='text-3xl font-semibold'>
														{i.title}
													</h1>
													<div className='w-full flex flex-col gap-8'>
														{i.content?.map(c => (
															<div
																className='w-full flex items-center gap-8'
																key={c.id}
															>
																<div className='w-5/6 flex flex-col gap-4'>
																	<p className='text-2xl font-semibold'>
																		{
																			c.title
																		}
																	</p>
																	<p className='text-lg font-medium text-neutral/75'>
																		{c.desc}
																	</p>
																</div>
																<div className='w-1/6'>
																	<a
																		className='btn btn-secondary  btn-block justify-between bg-secondary hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 rounded-md glass'
																		href={
																			c.doc
																		}
																		download
																		target='_blank'
																	>
																		Скачать{' '}
																		<FaLongArrowAltRight
																			size={
																				18
																			}
																		/>
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
