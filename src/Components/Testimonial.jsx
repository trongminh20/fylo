import { Component } from "react";
import Block from "./Block";
import { testimonials } from "../data";
export default class Testimonial extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <section className="testimonial">
            {
                testimonials.map(t => {
                    return <Block _class={"testimonialItem"} _isTestimonial={true}
                        _content={t.review}
                        _authorName={t.author}
                        _authorPosition={t.position} />
                })
            }
        </section>
    }

}