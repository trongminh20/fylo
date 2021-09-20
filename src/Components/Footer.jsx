import { Component } from "react";
import Icon from "./Icon";
import Block from "./Block";
export default class Footer extends Component {

    constructor(props) {
        super(props);
    }
    footerIco = {

    }
    render() {
        return <footer className="footer">
            <section className="footerForm" ><Block _class={"subform"} _title={"Get early access today"} _content={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"} _form={true} />
            </section>
            <section className="footerIntro">
                <img className="footerLogo" src="./images/logo.svg" alt="" />
                <Icon _isLink={false} _icoFontawesome={"fas fa-map-marker-alt"}
                    _content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"} />
            </section>
            <section className="footerContact">
                <Icon _icoFontawesome={"fas fa-phone-volume"} _content={'+1 543-123-4567'} />
                <Icon _icoFontawesome={"fas fa-envelope"} _content=
                    {'example@fylo.com'} />
            </section>
            <section className="footerNav">
                <ul className="navMenu">
                    {
                        this.props._ftMenu.map(item => {
                            return <li className="navLink"><a href="#">{item}</a></li>
                        })
                    }
                </ul>
            </section>
            <section className="footerSocial">
                <Icon _isLink={true} _icoFontawesome={"fab fa-facebook"} _content={""} />
                <Icon _isLink={true} _icoFontawesome={"fab fa-twitter"}
                    _content={""} />
                <Icon _isLink={true} _icoFontawesome={"fab fa-instagram"}
                    _content={""} />
            </section>
        </footer>
    }
}