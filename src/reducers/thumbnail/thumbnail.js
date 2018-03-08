import {
    THUMBNAIL_RECEIVED,
    THUMBNAIL_SAVED
} from "./actions";

const thumbnail = (state = {thumbnailReceived: false}, action) => {
    switch(action.type) {
        case THUMBNAIL_RECEIVED:
            return Object.assign({}, state, {thumbnailReceived: true, ...action.payload})
        case THUMBNAIL_SAVED:
            return Object.assign({}, state, {...action.payload})
        default:
            return state
    }
}

export default thumbnail;