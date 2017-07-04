import * as React from 'react';
import {Message, MessageProps} from './Message';

interface ConversationProps {
    messages: Array<MessageProps>
}

export class Conversation extends React.Component<ConversationProps, void> {
    private msgBox: any;
    private style: any = {

    };

    constructor(props: ConversationProps) {
        super(props);
    }

    render() {
        return (
            <div style={this.style}>
                {
                    this.props.messages.map((message, key) =>
                        <Message key={key} userName={message.userName}
                                 text={message.text} />)
                }
            </div>
        )
    }
}