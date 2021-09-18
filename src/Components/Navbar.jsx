import { Component } from "react";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <nav className="nav">
            <div className="nav-logo">
                <img src={this.props._logoUrl} alt="logo" />
            </div>
            <ul class="navbar">
                {
                    this.props._navMenu.map(item => {
                        return <li className="navbar--link"><a href="#">{item}</a></li>;
                    })
                }
            </ul>
        </nav>
    }
}