import { combineReducers } from 'redux';
import user from "./user/user";
import thumbnail from "./thumbnail/thumbnail";

const reducers = combineReducers({
    thumbnail,
    user
})

export default reducers;
