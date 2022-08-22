import { LayoutService } from '../../components/LayoutService'

function CourtAndLawyer() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

CourtAndLawyer.pageTitle = 'Для суда и адвокатов'
CourtAndLawyer.pageDescription = 'Описание'

export default CourtAndLawyer
