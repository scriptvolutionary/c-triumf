import { LayoutService } from '../../components/LayoutService'

function DepartureToClient() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

DepartureToClient.pageTitle = 'Выезд к Заказчику'
DepartureToClient.pageDescription = 'Описание'

export default DepartureToClient
