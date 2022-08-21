import { LayoutService } from '../../components/LayoutService'

function CheckOnEnglish() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

CheckOnEnglish.pageTitle = 'Проверка на английском языке'
CheckOnEnglish.pageKeywords = 'Ключи'
CheckOnEnglish.pageDescription = 'Описание'
CheckOnEnglish.pageType = 'website'

export default CheckOnEnglish
