import { LayoutService } from '../../components/LayoutService'

function PresenceClientAtTest() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

PresenceClientAtTest.pageTitle = 'Присутствие заказчика на тесте'
PresenceClientAtTest.pageDescription = 'Описание'

export default PresenceClientAtTest
