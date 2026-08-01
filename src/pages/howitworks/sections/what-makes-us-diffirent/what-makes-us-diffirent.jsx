import { CircleCheck } from 'lucide-react';
import Card from "../../../../components/card/card.jsx";
import Heading from "../../../../components/heading/heading.jsx";
import "./what-makes-us-diffirent.css";
import { useInView } from "../../../../hooks/useInView.js";

const reasons = [
    { description: "Exclusive access to Work 4 A Living trained graduates" },
    { description: "Placement fees never exceeding 8% of annual salary" },
    { description: "Monthly CRM check-ins with every retainer client" },
    { description: "National reach through W4AL's 30+ facilities" },
    { description: "Candidates handpicked for each specific role" },
    { description: "25% of every retainer donated to W4AL in the client's name" },
    { description: "Three-month replacement guarantee at no additional cost" },
    { description: "Community impact built into the business model" },
];

export default function WhatMakesUsDiffirent() {
    const [leftRef, leftInView]   = useInView({ threshold: 0.2 });
    const [rightRef, rightInView] = useInView({ threshold: 0.05 });

    return (
        <section className="what-makes-us-diffirent-section">
            <div className='section-inner'>
                {/* Left heading slides in*/}
                <div
                    ref={leftRef}
                    className={`what-makes-us-diffirent-section__left animate-slide-left ${leftInView ? 'in-view' : ''}`}
                >
                    <Heading
                        heading="Eight reasons businesses choose BrightHire."
                        smallText="What makes us different"
                        subText="We aren't trying to be every recruitment agency. We're trying to be the one that actually keeps its promises — to you, to our candidates, and to the communities we serve."
                        disableAnimation
                    />
                </div>

                {/* Right checklist staggered */}
                <div ref={rightRef} className="what-makes-us-diffirent-section__right">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            textIcon={<CircleCheck color="#E5AF3C"/>}
                            body={reason.description}
                            className={`what-makes-us-diffirent-section__right-card animate-fade-up delay-${index * 75} ${rightInView ? 'in-view' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}