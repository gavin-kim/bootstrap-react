import * as React from 'react';
import {Conversation} from './Conversation';
import {InputField} from './InputField';
import {MessageProps} from './Message';

export class ChatApp extends React.Component<undefined, any> {

    private serverUrl = "ws://" + window.location.hostname + ":3000/bot/websocket";
    private socket: any;
    private style: any = {
    };

    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        };
        this.connectServer();
    }

    connectServer() {
        this.socket = new WebSocket(this.serverUrl);
        this.socket.onopen = (ev: any) => this.onOpen(ev);
        this.socket.onmessage = (ev: any) => this.onMessage(ev);
        this.socket.onclose = (ev: any) => this.onClose(ev);
        this.socket.onerror = (ev: any) => this.onError(ev);
    }

    onOpen = (ev: any) => {
        console.log(`Connected the server at ${new Date()}`);
    };

    onClose = (ev: any) => {
        console.log(`Disconnected at ${new Date()}`);
    };

    onMessage = (ev: any) => {
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

    onError = (ev: any) => {
        console.log("Error", ev);
    };

    sendMessage = (text: string) => {
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

    render() {

        return (
            <div style={this.style} >
                <Conversation messages={this.state.messages} />
                <InputField sendMessage={this.sendMessage} />
            </div>
        )
    }
}