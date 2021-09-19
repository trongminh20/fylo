import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Testimonial from "./Components/Testimonial";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Productive from "./Components/Productive";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    menu = ["Feature", "Team", "Sing In"];
    _ftMenu = [
        "About Us",
        "Jobs",
        "Press",
        "Blog",
        "Contact Us",
        "Terms",
        "Privacy"
    ];
    render() {
        return (
            <React.Fragment>
                <Navbar _logoUrl={"./images/logo.svg"}
                    _navMenu={this.menu} />
                <Header />
                <Services />
                <Productive />
                <Testimonial />
                <Footer _ftMenu={this._ftMenu} />
            </React.Fragment>
        )
    }

}