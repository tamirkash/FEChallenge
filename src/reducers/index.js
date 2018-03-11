import { combineReducers } from 'redux';
import user from "./user/user";
import thumbnail from "./thumbnail/thumbnail";
import contact from "./contact/contact";

const reducers = combineReducers({
    thumbnail,
    user,
    contact
})

export default reducers;
