import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import Icon from '../../../../components/icon/icon.jsx';
import './our-impact.css';
import { Users, Globe, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const IMPACT_STATS = [
    {
        icon: <Icon icon={<Users size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
        heading: 'Students Placed',
        body: 'Coming soon',
    },
    {
        icon: <Icon icon={<Globe size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
        heading: 'Communities Funded',
        body: 'Coming soon',
    },
    {
        icon: <Icon icon={<Building2 size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
        heading: 'Active Clients',
        body: 'Coming soon',
    },
];

// Color variables
const cardBackgound = "color-mix(in oklab, var(--color-white) 5%, transparent)"


export default function ImpactSection() {
    return (
        <section className="impact-section">
            <div className="section-inner">

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading
                        smallText="Our Impact"
                        heading="Real businesses. Real graduates. Real communities."
                        subText="Our impact counter updates monthly as we grow."
                        className="heading-white subtext-white align-center"
                    />
                </motion.div>
                <div className="impact-section__cards">
                    {IMPACT_STATS.map((stat, idx) => (
                        <motion.div
                            key={stat.heading}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: idx * 0.12 }}
                        >
                            <Card
                                icon={stat.icon}
                                key={stat.heading}
                                className="hover-float"
                                bgColor={cardBackgound}>
                                <p>{stat.heading}</p>
                                <h3>{stat.body}</h3>

                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="impact-section__testimonial">
                    <p>"Testimonials from our founding clients will appear here as soon as our first placements are made."</p>
                </div>
            </div>
        </section>
    );
}