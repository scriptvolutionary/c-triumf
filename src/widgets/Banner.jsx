import { useRouter } from 'next/router'

export const Banner = () => {
	const TriumfDomen = useRouter()

	return (
		<>
			{TriumfDomen.pathname !== ('' || '/') ? (
				<section className='xs:hidden 2xl:block w-full h-full'>
					<figure className='fixed lg:-top-44 left-0 w-full xs:w-full h-full -z-10'>
						<video className='w-full' autoPlay loop>
							<source src='/cloud.mp4' type='video/mp4' />
						</video>
					</figure>
				</section>
			) : (
				<section className='w-screen h-full'>
					<div className='card lg:h-[720px] w-full image-full rounded-none -z-10'>
						<figure>
							<video
								className='xs:hidden lg:block absolute w-full'
								autoPlay
								loop
							>
								<source
									src='https://assets.website-files.com/5c6d317b07ffea21a7d539d9/5c6d4b9eaf4da332e4be8fd1_video-clouds-transcode.mp4'
									type='video/mp4'
								/>
							</video>
						</figure>
						<div className='card-body max-w-7xl mx-auto px-4'>
							<div className='w-full h-full flex flex-col justify-center'>
								<div className='w-full xs:text-justify flex flex-col gap-8'>
									<h2 className='text-neutral lg:text-4xl xs:text-2xl font-bold'>
										Полиграфолог. Проверка на полиграфе в
										Москве.
									</h2>
									<p className='lg:text-lg xs:text-sm text-neutral/75 text-justify font-semibold'>
										Благодарю за обращение в Экспертный
										центр Триумф. Я гарантирую независимую
										проверку на полиграфе за разумную цену.
										Также здесь есть полиграфологи разных
										категорий на м. Академическая и м.
										Белорусская в 5 мин. от метро.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
