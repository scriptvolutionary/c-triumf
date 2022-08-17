import { useLocalStorage } from '../shared/hooks/useLocalStorage'

export const Agreement = () => {
	const [agreement, setAgreement] = useLocalStorage('agreement', false)

	return (
		<div className='fixed h-28 w-full xs:bg-base-100 lg:glass z-10 bottom-0'>
			<div className='h-full max-w-7xl mx-auto p-8 flex items-center justify-center'>
				<div className='h-full w-full flex items-center justify-between'>
					<p className='text-xl xs:text-sm font-semibold'>
						Компания Триумф не занимается...
					</p>
					<button
						className='btn btn-secondary xs:btn-xs xs:h-12 lg:glass shadow-none bg-secondary lg:hover:btn-secondary lg:hover:shadow-xl lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:text-base lg:font-semibold rounded-md'
						onClick={() => setAgreement(true)}
					>
						Подтверждаю
					</button>
				</div>
			</div>
		</div>
	)
}
