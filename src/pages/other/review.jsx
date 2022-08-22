import { LayoutService } from '../../components/LayoutService'

function Review() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

Review.pageTitle = 'Рецензия (аудит суд. экспертизы)'
Review.pageDescription = 'Описание'

export default Review
