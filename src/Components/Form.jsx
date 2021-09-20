import { Component } from "react";
import Button from "./Button";

export default class Form extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <form className="form">
            <input type="text" placeholder="Example@example.com" />
            <Button _class={"formBtn"} _value={"Get Started For Free"} _function={console.log("form was submitted")} />
        </form>
    }
}