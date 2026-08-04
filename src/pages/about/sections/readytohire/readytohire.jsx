import Heading from "../../../../components/heading/heading.jsx"
import Button from "../../../../components/buttons/button.jsx"
import "./readytohire.css"
import { motion } from 'motion/react';


export default function ReadyToHire() {
    return(
        <section>
            <div className="section-inner section-get-hires">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading heading="Ready to hire the bright way?" 
                             subText="Lock in your founding client rate and start investing in your community today."
                    />
                    <Button link="/contact" variant="primary">Get in touch</Button>
                </motion.div>
            </div>
        </section>
    )
}