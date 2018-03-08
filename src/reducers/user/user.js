import {
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL,
    USER
} from "./actions";

let logged = localStorage.getItem(USER) !== null;

const user = (state = {logged}, action) => {
    switch (action.type){
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, state, {logged: true})
        case LOGOUT_SUCCESSFUL:
            return Object.assign({}, state, {logged: false})
        default:
            return state
    }
}

export default user;
