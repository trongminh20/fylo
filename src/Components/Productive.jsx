import { Component } from "react";
import Block from "./Block";

export default class Productive extends Component {

    constructor(props) {
        super(props);
    }

    productive = {
        header: "Stay productive, wherever you are",
        content: "Never let location be an issue when accessing your files.Fylo has you covered for all of your file storage needs.Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.",
        link: "See how Fylo works"
    }

    render() {
        return <section className="productive">
            <Block _imgUrl={"./images/illustration-stay-productive.png"} />
            <Block _title={this.productive.header} _content={this.productive.content} _linkContent={this.productive.link} _link={"#"} />
        </section>
    }
}