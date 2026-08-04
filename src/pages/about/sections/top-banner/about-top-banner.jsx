import Heading from "../../../../components/heading/heading.jsx"
import "./about-top-banner.css"
import { motion } from 'motion/react';

export default function AboutTopBanner() {
    return(
        <section className="banner-primary">
            <div className="section-banner">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading 
                        smallText="About BrightHire" 
                        heading={<>Recruitment with purpose. <span id="heading-accent">Community by design.</span></>} 
                        subText="We exist for one purpose — to connect trained, work-ready graduates with businesses that need them, while investing directly back into the communities those businesses serve."
                        spanColor="white"
                        className="align-center"
                    />
                </motion.div>
            </div>
        </section>
    )
}