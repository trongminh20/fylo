import { Component } from "react";
import { services } from "../data";
import Block from "./Block";
export default class Services extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <section className="services">
            {services.map(sv => {
                return <Block _class={"svItem"}
                    _imgUrl={sv.imgUrl}
                    _title={sv.header}
                    _content={sv.content} />
            })}
        </section>
    }
}