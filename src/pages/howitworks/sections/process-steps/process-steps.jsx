import Card from "../../../../components/card/card.jsx"
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
                {steps.map((step) => (
                    <div className="cards-section">
                        <div class="cards-section__number-circle">{step.Icon}</div>
                        <Card
                        heading={step.title}
                        body={step.description}
                        className="cards-section__cards"
                        />
                    </div>   
                ))}   
            </div>          
        </section>
    )
}