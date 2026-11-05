import Card from "../../../../components/card/card.jsx"
import { motion } from "motion/react"
import { EASE, VIEWPORT } from "../../../../components/motion/variants.js"
import "./process-steps.css"


export default function ProcesSteps() {
    const steps = [
        {
            Icon: "01",
            title: "Employer contacts BrightHire",
            description: "Share your hiring requirements and job description. We listen first."
        },
        {
            Icon: "02",
            title: "We brief the local W4AL facilitator",
            description: "BrightHire engages the nearest Work 4 A Living facilitator in your area."
        },
        {
            Icon: "03",
            title: "Candidate selection",
            description: "The facilitator handpicks candidates based on skills, personality fit and work readiness."
        },
        {
            Icon: "04",
            title: "Interviews & placement",
            description: "We coordinate interviews between you and the shortlisted candidates."
        },
        {
            Icon: "05",
            title: "Ongoing CRM support",
            description: "Monthly check-ins with employer and employee — every single month — to keep the placement thriving."
        }
    ]

    return(
        <section className="process-steps-section">
            <div className="section-inner">
                {steps.map((step, i) => (
                    // Each step rises in, then its number badge pops into place
                    <motion.div
                        key={step.Icon}
                        className="cards-section"
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT}
                        transition={{ duration: 0.6, ease: EASE, delay: (i % 2) * 0.1 }}
                    >
                        <motion.div
                            className="cards-section__number-circle"
                            initial={{ opacity: 0, scale: 0.4 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={VIEWPORT}
                            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.25 + (i % 2) * 0.1 }}
                        >
                            {step.Icon}
                        </motion.div>
                        <Card
                        heading={step.title}
                        body={step.description}
                        className="cards-section__cards"
                        reveal={false}
                        />
                    </motion.div>
                ))}   
            </div>          
        </section>
    )
}