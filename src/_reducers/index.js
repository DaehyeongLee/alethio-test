import {combineReducers} from 'redux';
import user_reducer from './user_reducer';

//여러 reducer를 합치기 위함
const rootReducer = combineReducers({
    user_reducer
})

export default rootReducer;