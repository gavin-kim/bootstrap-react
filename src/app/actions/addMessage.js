import {ADD_MESSAGE} from './ActionTypes'

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
