import { combineReducers } from 'redux';
import PhoneReducer from './Reducers/Phone';


export default combineReducers({
    infoPhone: PhoneReducer,
});