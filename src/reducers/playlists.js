import C from '../constants'

const initState = [
    'Home',
    'Work'
]

const playlists = (state = initState, action) => {
    switch (action.type) {
        case C.ADD_PLAYLIST:
            return state
        case C.DELETE_PLAYLIST:
            return state
        default:
            return state
    }
}
export default playlists