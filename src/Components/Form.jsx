import { Component } from "react";
import Button from "./Button";

export default class Form extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <form className="form">
            <input type="email" placeholder="Example@example.com" required="required" />
            <Button _class={"formBtn"} _value={"Get Started For Free"} _function={console.log("form was submitted")} />
        </form>
    }
}