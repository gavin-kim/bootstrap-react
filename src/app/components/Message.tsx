import * as React from 'react';

export interface MessageProps {
    userName: string,
    text: string
}

export class Message extends React.Component<MessageProps, undefined> {

    private style: any = {
    };

    constructor(props: MessageProps) {
        super(props);
    }

    filterText = (text:string): any => {
        return text.split("\n")
            .map((item: string, key: number) => <span key={key}>{item}<br/></span>);
    };

    render() {
        return (
            <div style={this.style}>
                {`${this.props.userName}:`} <br/>
                {this.filterText(this.props.text)} <br/>
            </div>
        );
    }
}