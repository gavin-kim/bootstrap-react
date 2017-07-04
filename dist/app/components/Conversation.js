"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Message_1 = require("./Message");
class Conversation extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
    }
    render() {
        return (React.createElement("div", { style: this.style }, this.props.messages.map((message, key) => React.createElement(Message_1.Message, { key: key, userName: message.userName, text: message.text }))));
    }
}
exports.Conversation = Conversation;
//# sourceMappingURL=Conversation.js.map