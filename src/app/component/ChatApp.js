import * as React from 'react';
import {connect} from 'react-redux';
import {InputField} from './InputField';
import Conversation from './Conversation';
import {addMessage} from '../action/addMessage';


class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this.serverUrl = "ws://" + window.location.hostname + ":3000/bot/websocket";
        this.socket = this.connectServer();
        this.style = {
        };
    }

    connectServer = () => {
        let socket = new WebSocket(this.serverUrl);
        socket.onopen = (ev) => this.onOpen(ev);
        socket.onmessage = (ev) => this.onMessage(ev);
        socket.onclose = (ev) => this.onClose(ev);
        socket.onerror = (ev) => this.onError(ev);
        return socket;
    };

    onOpen = (ev) => {
        console.log(`Connected the server at ${new Date()}`);
    };

    onClose = (ev) => {
        console.log(`Disconnected at ${new Date()}`);
    };

    onMessage = (ev) => {
        if (ev.data) {
            this.props.dispatchMessage({
                userName: "Dr.Merlin",
                text: ev.data
            })
        }
    };

    onError = (ev) => {
        console.log("Error", ev);
    };

    sendMessage = (text)  => {
        if (this.socket) {
            this.socket.send(text);
            this.props.dispatchMessage({
                userName: "Me",
                text: text
            })
        }
    };

    render() {
        return (
            <div style={this.style} >
                <Conversation />
                <InputField sendMessage={this.sendMessage} />
            </div>
        )
    }
}


// Receives dispatch() function and returns callback props
// that you want to inject into the presentational component
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchMessage: (message) => dispatch(addMessage(message))
    }
};

export default connect(null, mapDispatchToProps)(ChatApp);