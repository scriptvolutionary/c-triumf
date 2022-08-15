import { LayoutService } from '../../components/LayoutService'

function PersonalLife() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

PersonalLife.pageTitle = 'Личная жизнь'
PersonalLife.pageKeywords = 'Ключи'
PersonalLife.pageDescription = 'Описание'
PersonalLife.pageType = 'website'

export default PersonalLife
