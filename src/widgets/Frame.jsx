import {
	FaEnvelope,
	FaPhone,
	FaTelegramPlane,
	FaWhatsapp
} from 'react-icons/fa'

export const Frame = () => {
	const FrameLinks = [
		{
			id: 0,
			title: 'Telegram',
			icon: <FaTelegramPlane className='xs:w-4 xs:h-4 lg:w-7 lg:h-7' />,
			path: 'https://t.me/Alfeeva1'
		},
		{
			id: 1,
			title: 'WhatsApp',
			icon: <FaWhatsapp className='xs:w-4 xs:h-4 lg:w-7 lg:h-7' />,
			path: 'https://wa.me/+79067772503'
		},
		{
			id: 2,
			title: 'Написать',
			icon: <FaEnvelope className='xs:w-4 xs:h-4 lg:w-7 lg:h-7' />,
			path: 'mailto:test@c-triumf.ru'
		},
		{
			id: 3,
			title: 'Позвонить',
			icon: <FaPhone className='xs:w-4 xs:h-4 lg:w-7 lg:h-7' />,
			path: 'tel:+79067772503'
		}
	]

	return (
		<div className='fixed h-screen z-10 top-0 right-0'>
			<div className='h-full flex items-center lg:mr-4 xs:mr-2'>
				<ul className='menu glass rounded-md'>
					{FrameLinks.map(l => (
						<li
							className='tooltip tooltip-left'
							data-tip={l.title}
							key={l.id}
						>
							<a
								className='btn btn-ghost text-base font-semibold glass-default shadow-none hover:btn-secondary hover:shadow-xl hover:-translate-y-1 hover:translate-x-1 rounded-md transform-gpu'
								href={l.path}
								target={
									l.path !==
										('mailto:test@c-triumf.ru' ||
											'tel:+79067772503') && '_blank'
								}
							>
								{l.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}