"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
        this.filterText = (text) => {
            return text.split("\n")
                .map((item, key) => React.createElement("span", { key: key },
                item,
                React.createElement("br", null)));
        };
    }
    render() {
        return (React.createElement("div", { style: this.style },
            `${this.props.userName}:`,
            " ",
            React.createElement("br", null),
            this.filterText(this.props.text),
            " ",
            React.createElement("br", null)));
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map