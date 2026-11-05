import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Heading from "../../../../components/heading/heading";
import "./howitworks.css";
import { Reveal } from "../../../../components/motion/motion.jsx";
import { EASE, VIEWPORT } from "../../../../components/motion/variants.js";
import { Link } from 'react-router-dom';


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

/* ── Timeline animation variants ─────────────────────────────── */
const stepVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const bulletVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const contentVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function HowItWorks() {
    const timelineRef = useRef(null);

    // The gold progress line fills as the timeline scrolls through the viewport
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 55%"],
    });
    const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return(
        <section className="how-it-works-section">
            <div className="section-inner">
                <div className="section-left">
                    <Heading smallText="How it works" heading="Four steps. One long-term working relationship." subText="A simple, structured process designed to make hiring feel calm — and to keep your business and our community thriving long after day one."/>
                    <Reveal delay={0.3}>
                        <Link to="/how-it-works">See the full process →</Link>
                    </Reveal>
                </div>

                <div className="timeline" ref={timelineRef}>
                    {/* Track + scroll-linked progress line */}
                    <div className="timeline__track" aria-hidden="true">
                        <motion.div className="timeline__progress" style={{ scaleY: lineProgress }} />
                    </div>

                    <ol className="timeline__steps">
                        {steps.map((step) => (
                            <motion.li
                                key={step.key}
                                className="timeline__step"
                                variants={stepVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ ...VIEWPORT, amount: 0.6 }}
                            >
                                <motion.span className="timeline__bullet" variants={bulletVariants}>
                                    {step.number}
                                </motion.span>
                                <motion.div className="timeline__content" variants={contentVariants}>
                                    <h3>{step.heading}</h3>
                                    <p>{step.body}</p>
                                </motion.div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
