import Heading from "../../../../components/heading/heading.jsx"
import "./ourstory.css"
import { motion } from 'motion/react';


export default function OurStory() {
    return(
        <section className="our-story-section">
            <div className="section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading heading="Started in Paarl. Built for South Africa."
                             smallText="Our story"
                             className="align-center"
                    />
                    <p className="ourstory-body">
                        BrightHire was born from a simple belief: local businesses deserve local talent — and local communities deserve to share in the wins. 
                        We started in Paarl, working with the businesses we know best, and we're growing nationally without losing what makes us different. 
                        Every placement is a chance to invest in a community. 
                        Every retainer keeps that promise alive.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}