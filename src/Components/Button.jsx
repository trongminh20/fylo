import { Component } from "react";

export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <button className={this.props._class} onClicl={this.props._function}>{this.props._value}</button>
    }
}