import { LayoutService } from '../../components/LayoutService'

function YourQuestions() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

YourQuestions.pageTitle = 'Ваши вопросы'
YourQuestions.pageDescription = 'Описание'

export default YourQuestions
