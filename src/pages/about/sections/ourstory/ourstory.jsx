import Heading from "../../../../components/heading/heading.jsx"
import { Reveal } from "../../../../components/motion/motion.jsx"
import "./ourstory.css"


export default function OurStory() {
    return(
        <section className="our-story-section">
            <div className="section-inner">
                <Heading heading="Started in Paarl. Built for South Africa."
                         smallText="Our story"
                         className="align-center"
                />
                <Reveal as="p" className="ourstory-body" delay={0.15}>
                    BrightHire was born from a simple belief: local businesses deserve local talent — and local communities deserve to share in the wins. 
                    We started in Paarl, working with the businesses we know best, and we're growing nationally without losing what makes us different. 
                    Every placement is a chance to invest in a community. 
                    Every retainer keeps that promise alive.
                </Reveal>

            </div>
        </section>
    )
}