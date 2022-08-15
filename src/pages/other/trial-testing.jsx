import { LayoutService } from '../../components/LayoutService'

function TrialTesting() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

TrialTesting.pageTitle = 'Пробное тестирование'
TrialTesting.pageKeywords = 'Ключи'
TrialTesting.pageDescription = 'Описание'
TrialTesting.pageType = 'website'

export default TrialTesting
