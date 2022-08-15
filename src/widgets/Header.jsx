import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'

export const Header = () => {
	const TriumfDomen = useRouter()

	useEffect(() => {
		let scrollpos = window.scrollY
		const scrollChange = 1

		const header = document.querySelector('header')

		const add_shadow_on_scroll = () => {
			header.classList.add(
				'xs:bg-base-100',
				'lg:glass-default',
				'shadow-xl'
			)
		}
		const remove_shadow_on_scroll = () => {
			header.classList.remove(
				'xs:bg-base-100',
				'lg:glass-default',
				'shadow-xl'
			)
		}

		window.addEventListener('scroll', function () {
			scrollpos = window.scrollY

			scrollpos >= scrollChange
				? add_shadow_on_scroll()
				: remove_shadow_on_scroll()
		})
	}, [])

	const HeaderLinks = [
		{
			id: 0,
			title: 'Услуги',
			path: '/basic',
			content: [
				{
					id: 0,
					title: 'Основные проверки',
					path: '/basic'
				},
				{
					id: 1,
					title: 'Другие проверки',
					path: '/other'
				},
				{
					id: 2,
					title: 'Опции (доп. услуги)',
					path: '/extra'
				}
			]
		},
		{
			id: 1,
			title: 'Цены',
			path: '/price-basic',
			content: [
				{
					id: 0,
					title: 'Цены основных проверок',
					path: '/price-basic'
				},
				{
					id: 1,
					title: 'Цены других проверок',
					path: '/price-other'
				},
				{
					id: 2,
					title: 'Цены опций (доп. услуг)',
					path: '/price-extra'
				}
			]
		},
		{
			id: 2,
			title: 'Инструкции',
			path: '/instructions',
			content: [
				{
					id: 0,
					title: 'Инструкции для физ. и юр. лиц',
					path: '/instructions'
				},
				{
					id: 1,
					title: 'Инструкции для суда',
					path: '/instructions-court'
				}
			]
		},
		{ id: 3, title: 'Контакты', path: '/contacts' }
	]

	return (
		<header className='sticky text-base-content top-0 w-screen h-full ease-in-out-transition-all z-20'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex items-center justify-between py-4'>
					<Link href='/'>
						<img
							className='cursor-pointer active:scale-95 hover:opacity-90 w-24 h-full ease-in-out transition-all transform-gpu'
							src='/logo.svg'
						/>
					</Link>
					<div className='xs:hidden lg:flex items-center justify-between'>
						{HeaderLinks.map(l => (
							<div className='dropdown dropdown-hover' key={l.id}>
								<Link href={l.path}>
									<a
										className='btn btn-ghost w-56 text-base font-semibold glass-default shadow-none hover:btn-secondary hover:shadow-xl hover:-translate-y-1 hover:translate-x-1 rounded-md transform-gpu'
										tabIndex={0}
									>
										{l.title}
									</a>
								</Link>
								{l.content && (
									<ul
										className='dropdown-content glass-default mt-2 w-80 shadow-md rounded-md'
										tabIndex={0}
									>
										{l.content.map(c => (
											<Link href={c.path} key={c.id}>
												<a className='btn btn-ghost btn-block justify-start normal-case text-base font-semibold glass-default shadow-none hover:btn-secondary hover:shadow-xl hover:-translate-y-1 hover:translate-x-1 rounded-md transform-gpu'>
													{c.title}
												</a>
											</Link>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
					<div className='xs:block lg:hidden'>
						<div className='dropdown dropdown-end'>
							<label
								className='btn btn-secondary glass shadow-none bg-secondary hover:btn-secondary text-base font-semibold rounded-md'
								tabIndex={0}
							>
								<FaBars size={20} />
							</label>
							<ul
								className='dropdown-content menu mt-2 shadow bg-base-100 rounded-md w-72'
								tabIndex={0}
							>
								{HeaderLinks.map(l => (
									<li key={l.id}>
										{l.content ? (
											<div
												className='collapse p-0 bg-base-100 rounded-md flex flex-col'
												tabIndex={0}
											>
												<a className='btn btn-ghost rounded-md normal-case btn-block glass shadow-none hover:btn-secondary justify-start text-base font-semibold'>
													{l.title}
												</a>
												<div className='collapse-content p-0 m-0'>
													{l.content?.map(c => (
														<Link
															href={
																c.path && c.path
															}
															key={c.id}
														>
															<a className='btn btn-ghost rounded-md normal-case btn-block glass shadow-none hover:btn-secondary justify-start text-base font-semibold'>
																{c.title}
															</a>
														</Link>
													))}
												</div>
											</div>
										) : (
											<Link href={l.path}>
												<a className='btn btn-ghost rounded-md normal-case btn-block glass shadow-none hover:btn-secondary justify-start text-base font-semibold'>
													{l.title}
												</a>
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
