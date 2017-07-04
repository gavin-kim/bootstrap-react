"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
// Redux will call reducer with an undefined state for the first time.
// This is chance to return the initial state of app
const getMessage = (state = [], action) => {
    switch (action.type) {
        case 0 /* MESSAGE */:
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        default:
            return state;
    }
};
exports.default = redux_1.combineReducers({
    getMessage
});
//# sourceMappingURL=index.js.map