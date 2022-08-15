import { useLocalStorage } from '../shared/hooks/useLocalStorage'

export const Agreement = () => {
	const [agreement, setAgreement] = useLocalStorage('agreement', false)

	return (
		<div className='fixed h-28 w-full glass z-10 bottom-0'>
			<div className='h-full max-w-7xl mx-auto p-8 flex items-center justify-center'>
				<div className='h-full w-full flex items-center justify-between'>
					<p className='text-xl font-semibold'>
						Компания Триумф не занимается...
					</p>
					<button
						className='btn btn-secondary glass shadow-none bg-secondary hover:btn-secondary hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 text-base font-semibold rounded-md'
						onClick={() => setAgreement(true)}
					>
						Подтверждаю
					</button>
				</div>
			</div>
		</div>
	)
}
