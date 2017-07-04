/**
 * Reducer is a pure function (previousState, action) => newState
 */

import { combineReducers } from 'redux';
import { Action, Type } from '../actions/actions';


// Redux will call reducer with an undefined state for the first time.
// This is chance to return the initial state of app
const getMessage = (state: Action[] = [], action: Action): Action[] => {
    switch (action.type) {
        case Type.MESSAGE:
            return [
                ...state,
                {
                    type: action.type,
                    text: action.text
                }
            ];
        default:
            return state;
    }
};

export default combineReducers({
    getMessage
});