import { CircleCheck } from 'lucide-react';
import Card from "../../../../components/card/card.jsx"
import "./reasons.css"


export default function Reasons() {
    const reasons = [
        {
            description: "Exclusive access to Work 4 A Living trained graduates"
        },
        {
            description: "Placement fees never exceeding 8% of annual salary"
        },
        {
            description: "Monthly CRM check-ins with every retainer client"
        },
        {
            description: "National reach through W4AL's 30+ facilities"
        },
        {
            description: "Candidates handpicked for each specific role"
        },
        {
            description: "25% of every retainer donated to W4AL in the client's name"
        },
        {
            description: "Three-month replacement guarantee at no additional cost"
        },
        {
            description: "Community impact built into the business model"
        },
    ]
    return(
        <section className="reasons-section">
                <div className="reasons-section__left">
                    <p>What makes us different</p>
                    <h1>Eight reasons businesses choose BrightHire.</h1>
                    <h2>We aren't trying to be every recruitment agency. 
                        We're trying to be the one that actually keeps its promises — 
                        to you, to our candidates, and to the communities we serve.
                    </h2>
                </div>
                <div className="reasons-section__right">
                    {reasons.map((reason) => (
                        <Card textIcon={<CircleCheck color="#E5AF3C"/>} body={reason.description} className="reasons-section__right-card"/>
                    ))}
                </div>
        </section>
    )
}