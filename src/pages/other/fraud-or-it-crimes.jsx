import { LayoutService } from '../../components/LayoutService'

function FraudOrItCrimes() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

FraudOrItCrimes.pageTitle = 'Мошенничество или IT преступления'
FraudOrItCrimes.pageKeywords = 'Ключи'
FraudOrItCrimes.pageDescription = 'Описание'
FraudOrItCrimes.pageType = 'website'

export default FraudOrItCrimes
