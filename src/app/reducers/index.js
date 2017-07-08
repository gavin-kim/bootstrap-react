import { combineReducers } from 'redux';
import { messages } from './messageReducers';


/**
 * Reducers describe how the application's state changes in response
 * (previousState, action) => new State
 */
export default combineReducers({
    messages
});