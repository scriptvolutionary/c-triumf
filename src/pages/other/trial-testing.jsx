import { LayoutService } from '../../components/LayoutService'

function TrialTesting() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

TrialTesting.pageTitle = 'Пробное тестирование'
TrialTesting.pageDescription = 'Описание'

export default TrialTesting
