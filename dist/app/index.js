"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const ChatApp_1 = require("./components/ChatApp");
const reducers_1 = require("./reducers/reducers");
let store = redux_1.createStore(reducers_1.default);
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(ChatApp_1.ChatApp, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map