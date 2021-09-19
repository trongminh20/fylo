import { Component } from "react";
import Button from "./Button";
import Form from "./Form";
export default class Block extends Component {

    constructor(props) {
        super(props);
        this._class = this.props._class;
        this._imgUrl = this.props._imgUrl;
        this._subHeader = this.props._subHeader;
        this._title = this.props._title;
        this._content = this.props._content;
        this._notice = this.props._notice;
        this._button = this.props._button;
        this._form = this.props._form;
        this._isTestimonial = this.props._isTestimonial;
        this._authorProfileUrl = this.props._authorProfileUrl;
        this._authorName = this.props._authorName;
        this._authorPosition = this.props._authorPosition;
        this._link = this.props._link;
        this._linkContent = this.props._linkContent;
    }

    render() {
        return (
            <article className={"block " + this._class}>
                <img src={this._imgUrl} alt="" />
                <h1 className="blockTitle">
                    {this._title}
                </h1>
                <p className="subHeader">
                    {this._subHeader}
                </p>
                <p className="blockContent">
                    {this._content}
                </p>
                <p className="blockNotice">
                    {this._notice}
                </p>
                {(this._isTestimonial == true) ?
                    <div className="author">
                        <img src={this._authorProfileUrl} alt="author profile" />
                        <p>{this._authorName}</p>
                        <p>{this._authorPosition}</p>
                    </div> : ""
                }

                {
                    (this._button === true) ?
                        <Button _class={"blockBtn"} _value={this.props._btnValue} _function={console.log("block btn")} /> : ""
                }
                {
                    (this._form === true) ? <Form /> : ""
                }
                <a href={this._link}>{this._linkContent}</a>
            </article>
        )
    }

}