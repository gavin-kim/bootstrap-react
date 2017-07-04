
// Actions
export const enum Type {
    MESSAGE
}

export interface Action {
    type: Type,
    text?: string
}

// Action Creators  e.g. dispatch(getMessage(text))
export function getMessage(text: string): Action {
    return {
        type: Type.MESSAGE,
        text
    }
}