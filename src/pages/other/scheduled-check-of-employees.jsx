import { LayoutService } from '../../components/LayoutService'

function ScheduledCheckOfEmployees() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

ScheduledCheckOfEmployees.pageTitle = 'Плановая проверка работников'
ScheduledCheckOfEmployees.pageKeywords = 'Ключи'
ScheduledCheckOfEmployees.pageDescription = 'Описание'
ScheduledCheckOfEmployees.pageType = 'website'

export default ScheduledCheckOfEmployees
