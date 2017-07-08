import {ADD_MESSAGE} from '../action/ActionType';


export function messages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                {
                    type: action.type,
                    message: action.message
                }
            ];
        default:
            return state;
    }
}