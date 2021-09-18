import { Component } from "react";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SubForm from "./Components/SubForm";

export default class App extends Component {
    render() {
        const _intr = "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you";
        return <div>
            <SubForm _title={"Get early access today"} _intro={_intr} _formSubmittion={console.log("formSubmitted")} />
        </div>
    }
}