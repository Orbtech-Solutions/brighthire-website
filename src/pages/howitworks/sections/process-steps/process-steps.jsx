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
            title: "Employer contacts BrightHire",
            description: "Share your hiring requirements and job description. We listen first."
        },
        {
            Icon: "03",
            title: "Employer contacts BrightHire",
            description: "Share your hiring requirements and job description. We listen first."
        },
        {
            Icon: "04",
            title: "Employer contacts BrightHire",
            description: "Share your hiring requirements and job description. We listen first."
        },
        {
            Icon: "05",
            title: "Employer contacts BrightHire",
            description: "Share your hiring requirements and job description. We listen first."
        }
    ]

    return(
        <section className="list-section">
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