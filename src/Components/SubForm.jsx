import { Component } from "react";
import Button from "./Button";
export default class SubForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <section className="newsLetter">
            <div className="formItems">
                <h1>{this.props._title}</h1>
                <p>{this.props._intro}</p>
            </div>
            <div className="formItems">
                <form className="form">
                    <input type="text" />
                    <Button _class={"btn"} _value={"Get Started For Free"} _function={this.props._formSubmition} />
                </form>
            </div>
        </section>
    }
}