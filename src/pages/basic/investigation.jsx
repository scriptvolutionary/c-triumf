import { LayoutService } from '../../components/LayoutService'

function Investigation() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

Investigation.pageTitle = 'Расследование. По факту хищения или другое'
Investigation.pageKeywords = 'Ключи'
Investigation.pageDescription = 'Описание'
Investigation.pageType = 'website'

export default Investigation
