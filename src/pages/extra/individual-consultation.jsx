import { LayoutService } from '../../components/LayoutService'

function IndividualConsultation() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

IndividualConsultation.pageTitle = 'Индивидуальная консультация'
IndividualConsultation.pageDescription = 'Описание'

export default IndividualConsultation
