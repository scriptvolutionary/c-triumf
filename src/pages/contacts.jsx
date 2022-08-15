import Link from 'next/link'
import { FaEnvelope, FaLongArrowAltRight, FaPhone } from 'react-icons/fa'

function Contacts() {
	return (
		<>
			<section className='w-screen h-full'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='py-8'>
						<div className='font-medium breadcrumbs'>
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
					<div className='pb-24'>
						<div className='flex flex-col gap-16'>
							<div className='w-full flex items-center justify-between gap-16'>
								<h2 className='text-4xl font-bold'>
									Заказ проверки на полиграфе
								</h2>
								<p className='text-lg font-medium text-neutral/75'>
									Мы всегда готовы принять ваш заказ на
									проверку на полиграфе и ответить на все
									интересующие вопросы.
								</p>
							</div>
							<div className='flex flex-col gap-8'>
								<div className='card card-side glass rounded-md'>
									<figure className='w-2/6'>
										<img
											className='h-[520px]'
											src='/alfeeva.png'
										/>
									</figure>
									<div className='card-body w-4/6 pr-4 pb-4'>
										<h1 className='card-title text-3xl font-semibold'>
											Татьяна Анатольевна Алфеева
										</h1>
										<p className='text-lg font-medium text-neutral/75'>
											Ведущий полиграф.
										</p>
										<div className='card-actions justify-end'>
											<a
												className='btn btn-secondary text-base font-semibold glass shadow-none bg-secondary hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md gap-2'
												href='mailto:mailto:alfeeva@c-triumf.ru'
											>
												Написать
												<FaEnvelope size={16} />
											</a>
											<a
												className='btn btn-secondary text-base font-semibold glass shadow-none bg-secondary hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md gap-2'
												href='tel:tel:+79067772503'
											>
												Позвонить <FaPhone size={16} />
											</a>
										</div>
									</div>
								</div>
								<div className='glass w-full p-8 rounded-md'>
									<div className='flex gap-8 w-full'>
										<div className='flex flex-col gap-4 w-4/5'>
											<h2 className='text-3xl font-bold'>
												Консультация и запись
											</h2>
											<p className='text-lg font-medium text-neutral/75'>
												Ознакомтесь перед звонком
											</p>
										</div>
										<div className='flex flex-col gap-4 w-1/5'>
											<Link href='/logic'>
												<a className='btn btn-secondary text-base font-semibold glass shadow-none bg-secondary hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md gap-2'>
													Алгоритм действий
													<FaLongArrowAltRight
														size={18}
													/>
												</a>
											</Link>
											<Link href='/price-basic'>
												<a className='btn btn-secondary text-base font-semibold glass shadow-none bg-secondary hover:shadow-xl hover:btn-secondary hover:translate-x-1 hover:-translate-y-1 rounded-md gap-2'>
													Цены
													<FaLongArrowAltRight
														size={18}
													/>
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
					<div className='pb-24'>
						<div className='flex flex-col gap-16'>
							<div className='flex items-center justify-between w-full'>
								<h2 className='text-3xl font-bold'>
									Адреса офисов
								</h2>
								<p className='text-lg font-medium text-neutral/75'>
									Закажите проверку на полиграфе в одном из
									наших офисов
								</p>
							</div>
							<div className='flex flex-col gap-16 w-full h-full glass rounded-md p-8'>
								<div className='flex flex-col gap-8'>
									<div className='flex flex-col gap-4'>
										<h2 className='text-2xl font-semibold'>
											Главный офис. Татьяна Алфеева. Петр
											Игнатюк
										</h2>
										<a
											className='text-lg text-neutral/75 font-medium'
											href='https://www.google.com/maps/place/%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0+%D0%BD%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D1%80%D0%B0%D1%84%D0%B5.+%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%BD%D1%8B%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%D0%A2%D0%A0%D0%98%D0%A3%D0%9C%D0%A4/@55.6513494,37.3050263,11z/data=!4m9!1m2!2m1!1z0J_QvtC70LjQs9GA0LDRhCDQotGA0LjRg9C80YQ!3m5!1s0x46b54d6895bfff15:0x4023c3bf8f703640!8m2!3d55.683454!4d37.573903!15sCh3Qn9C-0LvQuNCz0YDQsNGEINCi0YDQuNGD0LzRhJIBEXBvbHlncmFwaF9zZXJ2aWNl?hl=ru-RU'
											target='_blank'
										>
											117036 Москваул. Кедрова д. 15, офис
											210 (под. 3)
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

								<div className='flex flex-col gap-8'>
									<div className='flex flex-col gap-4'>
										<h2 className='text-2xl font-semibold'>
											Доп. офис на Белорусской Эксперт
											Александр Г. и Денис К.
										</h2>
										<a
											className='text-lg text-neutral/75 font-medium'
											href='https://www.google.com/maps/place/%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0+%D0%BD%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D1%80%D0%B0%D1%84%D0%B5.+%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%BD%D1%8B%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%22%D0%A2%D1%80%D0%B8%D1%83%D0%BC%D1%84%22/@55.6513494,37.3050263,11z/data=!4m9!1m2!2m1!1z0J_QvtC70LjQs9GA0LDRhCDQotGA0LjRg9C80YQ!3m5!1s0x46b54a67a148f6ab:0x5546d381f03be58c!8m2!3d55.7791719!4d37.5779406!15sCh3Qn9C-0LvQuNCz0YDQsNGEINCi0YDQuNGD0LzRhJIBEXBvbHlncmFwaF9zZXJ2aWNl?hl=ru-RU'
											target='_blank'
										>
											119049 Москва, Ленинградский пр-т,
											д. 5 с7 , офиса 206-1
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
