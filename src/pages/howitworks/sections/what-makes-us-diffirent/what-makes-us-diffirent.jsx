import { CircleCheck } from 'lucide-react';
import Card from "../../../../components/card/card.jsx";
import Heading from "../../../../components/heading/heading.jsx";
import "./what-makes-us-diffirent.css";
import { motion } from 'motion/react';

export default function WhatMakesUsDiffirent() {
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

    return (
        <section className="what-makes-us-diffirent-section">
            <div className='section-inner'>
                <div className="what-makes-us-diffirent-section__left">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading 
                            heading="Eight reasons businesses choose BrightHire." 
                            smallText="What makes us different" 
                            subText="We aren't trying to be every recruitment agency. We're trying to be the one that actually keeps its promises — to you, to our candidates, and to the communities we serve." 
                        />
                    </motion.div>
                </div>
                <div className="what-makes-us-diffirent-section__right">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                        >
                            <Card 
                                key={index} /* Added key here for React list rendering */
                                textIcon={<CircleCheck color="#E5AF3C"/>} 
                                body={reason.description} 
                                className="what-makes-us-diffirent-section__right-card"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}