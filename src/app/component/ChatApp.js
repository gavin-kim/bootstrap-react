import * as React from 'react';
import {connect} from 'react-redux';
import {InputField} from './InputField';
import Conversation from './Conversation';
import {addMessage} from '../action/addMessage';


class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
        };
    }

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