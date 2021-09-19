import { Component } from "react";
export default class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="iconItems"><a href=""><i className={this.props._icoFontawesome}></i><p>{this.props._content}</p></a></div>
    }
}