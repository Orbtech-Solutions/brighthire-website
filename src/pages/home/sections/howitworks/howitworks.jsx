import Heading from "../../../../components/heading/heading";
import Card from "../../../../components/card/card";
import "./howitworks.css";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';


//Nie die page nie, die SECTION Corne... ~ Kobus 2026


const steps = [
    {
        key: 1,
        number: "01",
        heading: "Tell us what you need",
        body: "Share your role, your team and the kind of person who'd thrive."
    },
    {
        key: 2,
        number: "02",
        heading: "We match trained graduates",
        body: "The nearest W4AL facilitator handpicks candidates suited to the role."
    },
    {
        key: 3,
        number: "03",
        heading: "You interview the best fits",
        body: "We coordinate a curated shortlist — you decide who joins."
    },
    {
        key: 4,
        number: "04",
        heading: "We support you through probation",
        body: "Monthly check-ins for the life of the placement. We don't disappear."
    }
]

export default function HowItWorks() {
    return(
        <section className="how-it-works-section">
            <div className="section-inner">
                <div className="section-left">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading smallText="How it works" heading="Four steps. One long-term working relationship." subText="A simple, structured process designed to make hiring feel calm — and to keep your business and our community thriving long after day one."/>
                        <Link to="/how-it-works">See the full process →</Link>
                    </motion.div>
                </div>
                <div className="section-right">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.key}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.6, delay: idx * 0.12 }}
                        >
                            <Card
                                key={step.key}
                                textIcon={step.number}
                                heading={step.heading}
                                body={step.body}
                                className="hover-float hover-accent"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

