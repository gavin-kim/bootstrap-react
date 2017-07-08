import * as React from 'react';
import {connect} from 'react-redux';
import {Message} from './Message';
import {ADD_MESSAGE} from '../action/ActionTypes';

class Conversation extends React.Component {

    constructor(props) {
        super(props);
        this.style = {};
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

Conversation.defaultProps = {
    messages: []
};


// Describe How to transform the current state into the props
const mapStateToProps = (state, ownProps) => {
    if (state.messages) {
        return {
            messages: state.messages.map(obj => obj.message)
        };
    }
};

export default connect(mapStateToProps, null)(Conversation)