import { LayoutService } from '../../components/LayoutService'

function Media() {
	return (
		<LayoutService>
			<p className='text-lg text-neutral/75 font-medium'>Описание</p>
		</LayoutService>
	)
}

Media.pageTitle = 'Материалы'
Media.pageKeywords = 'Ключи'
Media.pageDescription = 'Описание'
Media.pageType = 'website'

export default Media
