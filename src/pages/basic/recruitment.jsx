import { LayoutService } from '../../components/LayoutService'

function Recruitment() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

Recruitment.pageTitle = 'При приёме на работу'
Recruitment.pageDescription = 'Описание'

export default Recruitment
