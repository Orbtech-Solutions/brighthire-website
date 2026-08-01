import Heading from "../../../../components/heading/heading";
import Card from "../../../../components/card/card";
import "./howitworks.css";
import { Link } from 'react-router-dom';
import { useInView } from '../../../../hooks/useInView';

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
];

const STAGGER = [0, 150, 300, 450];

export default function HowItWorks() {
    const [leftRef, leftInView] = useInView({ threshold: 0.2 });
    const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });

    return(
        <section className="how-it-works-section">
            <div className="section-inner">
                {/* Left — slides in from the left */}
                <div
                    ref={leftRef}
                    className={`section-left animate-slide-left ${leftInView ? 'in-view' : ''}`}
                >
                    <Heading
                        smallText="How it works"
                        heading="Four steps. One long-term working relationship."
                        subText="A simple, structured process designed to make hiring feel calm — and to keep your business and our community thriving long after day one."
                        disableAnimation
                    />
                    <Link to="/how-it-works">See the full process →</Link>
                </div>

                {/* Steps — stagger in from the right */}
                <div ref={stepsRef} className="section-right">
                    {steps.map((step, index) => (
                        <Card
                            key={step.key}
                            textIcon={step.number}
                            heading={step.heading}
                            body={step.body}
                            className={`hover-float hover-accent animate-slide-right delay-${STAGGER[index]} ${stepsInView ? 'in-view' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

