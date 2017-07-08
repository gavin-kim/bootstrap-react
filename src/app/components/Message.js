import * as React from 'react';

export class Message extends React.Component {

    constructor(props) {
        super(props);
        this.element;
        this.style = {
        };
    }

    filterText = (text) => {
        return text.split("\n")
            .map((item, key) => <span key={key}>{item}<br/></span>);
    };

    componentDidMount = () => {
        this.element.scrollIntoView();
    };

    render() {
        return (
            <div style={this.style}
                 ref={(element) => {this.element = element}}>
                {`${this.props.userName}:`} <br/>
                {this.filterText(this.props.text)} <br/>
            </div>
        );
    }
}