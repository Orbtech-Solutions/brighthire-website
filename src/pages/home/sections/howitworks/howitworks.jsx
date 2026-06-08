import Heading from "../../../../components/heading/heading";
import Card from "../../../../components/card/card";
import "./howitworks.css";
import { Link } from 'react-router-dom';

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
    //Nie die page nie, die SECTION Corne... ~ Kobus 2026
    return(
        <section>
            <div className="section-inner section-whole">
                <div className="section-left">
                    <Heading smallText="How it works" heading="Four steps. One long-term partnership." subText="A simple, structured process designed to make hiring feel calm — and to keep your business and our community thriving long after day one."/>
                    <Link to="/how-it-works">See the full process →</Link>
                </div>
                <div className="section-right">
                    {steps.map((step) => (
                        <Card
                            key={step.key}
                            textIcon={step.number}
                            heading={step.heading}
                            body={step.body}
                            className="section-right__card hover-float hover-accent"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

