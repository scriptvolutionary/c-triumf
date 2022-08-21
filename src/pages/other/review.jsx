import { LayoutService } from '../../components/LayoutService'

function Review() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

Review.pageTitle = 'Рецензия (аудит суд. экспертизы)'
Review.pageKeywords = 'Ключи'
Review.pageDescription = 'Описание'
Review.pageType = 'website'

export default Review
