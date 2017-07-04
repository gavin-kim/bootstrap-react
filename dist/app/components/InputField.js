"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            width: "100%"
        };
        this.keyPress = (ev) => {
            if (ev.key === 'Enter' && ev.target.value) {
                this.props.sendMessage(ev.target.value);
                ev.target.value = '';
            }
        };
    }
    componentDidUpdate(preProps) {
        this.inputField.scrollIntoView();
    }
    ;
    render() {
        return (React.createElement("input", { style: this.style, type: "text", onKeyPress: (ev) => this.keyPress(ev), ref: (inputField) => { this.inputField = inputField; } }));
    }
}
exports.InputField = InputField;
//# sourceMappingURL=InputField.js.map