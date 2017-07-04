"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Conversation_1 = require("./Conversation");
const InputField_1 = require("./InputField");
class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.serverUrl = "ws://" + window.location.hostname + ":3000/bot/websocket";
        this.style = {};
        this.onOpen = (ev) => {
            console.log(`Connected the server at ${new Date()}`);
        };
        this.onClose = (ev) => {
            console.log(`Disconnected at ${new Date()}`);
        };
        this.onMessage = (ev) => {
            if (ev.data) {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            userName: "Dr.Merlin",
                            text: ev.data
                        }
                    ]
                });
            }
        };
        this.onError = (ev) => {
            console.log("Error", ev);
        };
        this.sendMessage = (text) => {
            if (this.socket) {
                console.log("sendMessage: ", text);
                this.socket.send(text);
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            userName: "Me",
                            text: text
                        }
                    ]
                });
            }
        };
        this.state = {
            messages: []
        };
        this.connectServer();
    }
    connectServer() {
        this.socket = new WebSocket(this.serverUrl);
        this.socket.onopen = (ev) => this.onOpen(ev);
        this.socket.onmessage = (ev) => this.onMessage(ev);
        this.socket.onclose = (ev) => this.onClose(ev);
        this.socket.onerror = (ev) => this.onError(ev);
    }
    render() {
        return (React.createElement("div", { style: this.style },
            React.createElement(Conversation_1.Conversation, { messages: this.state.messages }),
            React.createElement(InputField_1.InputField, { sendMessage: this.sendMessage })));
    }
}
exports.ChatApp = ChatApp;
//# sourceMappingURL=ChatApp.js.map