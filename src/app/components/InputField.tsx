import * as React from 'react';
import {ChatApp} from './ChatApp';
import {Simulate} from 'react-dom/test-utils';
import keyPress = Simulate.keyPress;

interface InputFieldProps {
    sendMessage: Function;
}

export class InputField extends React.Component<InputFieldProps, undefined> {

    private inputField: any;
    private style: any = {
        width: "100%"
    };

    constructor(props: InputFieldProps) {
        super(props);
    }

    keyPress = (ev: any) => {
        if (ev.key === 'Enter' && ev.target.value) {
            this.props.sendMessage(ev.target.value);
            ev.target.value = '';
        }
    };

    componentDidUpdate(preProps: any) {
        this.inputField.scrollIntoView();
    };

    render() {
        return (
            <input style={this.style}
                   type="text" onKeyPress={(ev: any) => this.keyPress(ev)}
                   ref={(inputField) => {this.inputField = inputField}}/>
        );
    }
}