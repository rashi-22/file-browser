import { combineReducers } from 'redux';
import updateReducer from './fileReducer';

const reducers = combineReducers({
    fileData: updateReducer
})

export default reducers;