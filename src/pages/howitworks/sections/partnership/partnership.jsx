import Card from "../../../../components/card/card.jsx";
import "./partnership.css";
import Heading from "../../../../components/heading/heading.jsx"
import { motion } from 'motion/react';

export default function Partnership() {
    return(
        <section className="partnership-section">
            <div className="section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card 
                    heading={<Heading smallText="Working hand in hand" heading="Work 4 A Living"/>} 
                    body="W4AL is a South African non-profit transforming lives through mentorship, skills development and biblical values. 
                    Beyond the Job Excellence Course, W4AL offers 30+ additional courses and development programmes, allowing candidates to specialise and become even more valuable employees. 
                    BrightHire works hand in hand with W4AL facilitators nationwide to connect businesses with people who are dependable, motivated and ready to contribute positively from day one." 
                    className="section-partnership__card"
                    />
                </motion.div>
            </div>
        </section>
    )
}