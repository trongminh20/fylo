import { Component } from "react";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Block from "./Components/Block";
import Footer from "./Components/Footer";



export default class App extends Component {
    constructor(props) {
        super(props);
    }
    content = "this is the content sample";
    render() {
        return <Block _title={"Block title"}
            _content={this.content}
            _subtitle={"true"}
            _subHeader={"subtitle content"}
            _button={true}
            _btnValue={"button"}
            _form={true} />
    }

}