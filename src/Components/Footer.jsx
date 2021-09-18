import { Component } from "react";

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <footer>
            <section className="footerIntro"></section>
            <section className="contact"></section>
            <section className="footerNav"></section>
            <section className="socialLinks"></section>
        </footer>
    }
}