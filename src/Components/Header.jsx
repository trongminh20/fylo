import { Component } from "react";
import Block from "./Block";
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    intro = {
        header: "All your files in one secure location, accessible anywhere.",
        intro: "Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends family, and co- workers."
    }
    render() {
        return <Block _class={"header"} _imgUrl={"./images/illustration-intro.png"}
            _content={this.intro.intro}
            _title={this.intro.header}
            _button={true}
            _btnValue={"Get Started"} />
    }
}