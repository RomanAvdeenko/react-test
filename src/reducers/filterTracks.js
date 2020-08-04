import C from '../constants'

const initState = ''

const filterTracks = (state = initState, action) => {
    switch (action.type) {
        case C.FILTER_TRACK:
            return action.payload
        default:
            return state
    }
}
export default filterTracks