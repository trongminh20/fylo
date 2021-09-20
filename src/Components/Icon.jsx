import { Component } from "react";
export default class Icon extends Component {
    constructor(props) {
        super(props);
        this._isLink = this.props._isLink;
    }

    render() {
        return <div className="iconItems">
            {(this._isLink === true) ? <a href="">
                <p><i className={this.props._icoFontawesome}></i>{" " + this.props._content}</p>
            </a> : <p><i className={this.props._icoFontawesome}></i>{"  " + this.props._content}</p>
            }
        </div>
    }
}