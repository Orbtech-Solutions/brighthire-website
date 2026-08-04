import Heading from "../../../../components/heading/heading.jsx"
import './button-end.css'
import Button from '../../../../components/buttons/button.jsx';
import { motion } from 'motion/react';


export default function ButtonEnd() {
    return(
        <section>
            <div className="section-inner end-section">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading heading="Hire the bright way." subText="Take the first step. Tell us what you need and we'll take it from there."/>
                    <Button link="/contact" variant="secondary">Become a Founding Client</Button>
                </motion.div>
            </div>
        </section>
    )
}