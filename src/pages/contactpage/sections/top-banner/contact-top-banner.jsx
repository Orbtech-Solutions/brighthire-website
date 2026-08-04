import Heading from "../../../../components/heading/heading";
import { motion } from 'motion/react';

export default function TopBanner() {
    return (
        <section className="banner-primary">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <Heading 
                    smallText="Become a founding client"
                    heading="Let's talk about who you need to hire." 
                    subText="Tell us a little about your business and the roles you're looking to fill. We'll be in touch within one business day."
                    className="heading-white subtext-white align-center"
                />
            </motion.div>
        </section>
    );
}