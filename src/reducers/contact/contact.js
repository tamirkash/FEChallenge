import {
    CONTACT_FAIL,
    CONTACT_REQUEST,
    CONTACT_SUCCESSFUL
} from "./actions";

const initialState = {
    isContacting: false,
    errorMessage: null
}

const contact = (state = initialState, action) => {
    switch (action.type){
        case CONTACT_SUCCESSFUL:
            return Object.assign({}, state, { isContacting: false, errorMessage: null })
        case CONTACT_FAIL:
            return Object.assign({}, state, { isContacting: false, errorMessage: action.payload.error })
        case CONTACT_REQUEST:
            return Object.assign({}, state, { isContacting: true, errorMessage: null })
        default:
            return state
    }
}

export default contact;
