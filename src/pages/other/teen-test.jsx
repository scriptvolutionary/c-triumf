import { LayoutService } from '../../components/LayoutService'

function TeenTest() {
    return (
        <LayoutService>
            <p className='text-lg text-neutral/75 font-medium'>Описание</p>
        </LayoutService>
    )
}

TeenTest.pageTitle = 'Тест подростков (14-17 лет)'
TeenTest.pageDescription = 'Описание'

export default TeenTest
