import C from '../constants'

const initState = []

const tracks = (state = initState, action) => {
    switch (action.type) {
        case C.ADD_TRACK:
            return [
                ...state,
                action.payload
            ]
        case C.FETCH_TRACKS_SUCCESS:
            return action.payload
        default:
            return state
    }
}
export default tracks