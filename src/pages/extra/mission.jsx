import { LayoutService } from '../../components/LayoutService'

function Mission() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

Mission.pageTitle = 'Командировка'
Mission.pageKeywords = 'Ключи'
Mission.pageDescription = 'Описание'
Mission.pageType = 'website'

export default Mission
