import {combineReducers} from 'redux';
import user from './user_reducer';

//여러 reducer를 합치기 위함
const rootReducer = combineReducers({
    user
})

export default rootReducer;