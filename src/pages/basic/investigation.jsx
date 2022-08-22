import { LayoutService } from '../../components/LayoutService'

function Investigation() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

Investigation.pageTitle = 'Расследование (по факту хищения и т.п.)'
Investigation.pageDescription = 'Описание'

export default Investigation
