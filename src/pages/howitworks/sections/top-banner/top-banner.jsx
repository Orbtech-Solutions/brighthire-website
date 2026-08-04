import "./top-banner.css";
import Heading from "../../../../components/heading/heading";
import { motion } from 'motion/react';

export default function TopBanner() {
    return(
        <section className="banner-primary">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <Heading 
                    smallText="How it works"
                    heading="A structured process, built for the long term." 
                    subText="From brief to placement to monthly support — here's exactly what working with BrightHire looks like."
                    className="heading-white subtext-white section-paragraph align-center"
                />
            </motion.div>
        </section>
    )
}