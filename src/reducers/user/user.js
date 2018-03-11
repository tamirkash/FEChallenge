import {
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL,
    USER
} from "./actions";

let savedUser = localStorage.getItem(USER);
let initialState = {
    logged: savedUser !== null,
    username: savedUser
}

const user = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, state, { logged: true, username: action.payload.username })
        case LOGOUT_SUCCESSFUL:
            return Object.assign({}, state, { logged: false, username: null })
        default:
            return state
    }
}

export default user;
