import C from '../constants'

let mockApiData = [
    {
        id: 1,
        name: 'Кукушка'
    },
    {
        id: 2,
        name: 'Звезда по имени Солнце'
    },
    {
        id: 3,
        name: 'Багульник'
    },
    {
        id: 4,
        name: 'Запахло весной'
    }
]

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks')
        dispatch({ type: C.FETCH_TRACKS_SUCCESS, payload: mockApiData })
    }, 2000)
} 