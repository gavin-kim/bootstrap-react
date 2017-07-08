import {ADD_MESSAGE} from './ActionType'

/**
 * Action Creators
 * functions that create actions
 */
export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}
