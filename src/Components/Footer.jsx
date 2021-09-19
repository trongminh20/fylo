import { Component } from "react";
import Icon from "./Icon";
export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <footer>
            <section className="footerIntro"></section>
            <section className="contact">
                <Icon _icoFontawesome={"fas fa-phone-volume"} _content={'+1 543-123-4567'} />
                <Icon _icoFontawesome={"fas fa-envelope"} _content={'example@fylo.com'} />
            </section>
            <section className="footerNav">
                <ul className="footerMenu">
                    {
                        this.props._ftMenu.map(item => {
                            return <li className="navLink"><a href="#">{item}</a></li>
                        })
                    }
                </ul>
            </section>
            <section className="socialLinks"></section>
        </footer>
    }
}