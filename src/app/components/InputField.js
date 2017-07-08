import * as React from 'react';

export class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
            width: "100%"
        };
    }

    keyPress = (ev) => {
        if (ev.key === 'Enter' && ev.target.value) {
            this.props.sendMessage(ev.target.value);
            ev.target.value = '';
        }
    };

    render() {
        return (
            <input style={this.style}
                   type="text" onKeyPress={(ev) => this.keyPress(ev)}/>
        );
    }
}