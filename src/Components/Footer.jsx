import { Component } from "react";
import Icon from "./Icon";
export default class Footer extends Component {

    constructor(props) {
        super(props);
    }
    footerIco = {

    }
    render() {
        return <footer className="footer">
            <section className="footerIntro">
                <img className="footerLogo" src="./images/logo.svg" alt="" />
                <Icon _icoFontAwesome={""}
                    _content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"} />
            </section>
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
            <section className="socialLinks">
                <Icon _icoFontAwesome={""} />
                <Icon _icoFontAwesome={""} />
                <Icon _icoFontAwesome={""} />
            </section>
        </footer>
    }
}