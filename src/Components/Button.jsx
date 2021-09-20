import { Component } from "react";

export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <button className={"btn " + this.props._class} onClick={this.props._function}>{this.props._value}</button>
    }
}