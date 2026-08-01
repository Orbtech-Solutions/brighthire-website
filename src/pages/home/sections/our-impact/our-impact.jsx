import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import Icon from '../../../../components/icon/icon.jsx';
import './our-impact.css';
import { Users, Globe, Building2 } from 'lucide-react';
import { useInView } from '../../../../hooks/useInView';

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

const cardBackground = "color-mix(in oklab, var(--color-white) 5%, transparent)";
const STAGGER = [0, 150, 300];

export default function ImpactSection() {
    const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.3 });

    return (
        <section className="impact-section">
            <div className="section-inner">

                <Heading
                    smallText="Our Impact"
                    heading="Real businesses. Real graduates. Real communities."
                    subText="Our impact counter updates monthly as we grow."
                    className="heading-white subtext-white align-center"
                />

                {/* Cards — staggered fade-up */}
                <div ref={cardsRef} className="impact-section__cards">
                    {IMPACT_STATS.map((stat, index) => (
                        <Card
                            key={stat.heading}
                            icon={stat.icon}
                            className={`hover-float animate-fade-up delay-${STAGGER[index]} ${cardsInView ? 'in-view' : ''}`}
                            bgColor={cardBackground}>
                                <p>{stat.heading}</p>
                                <h3>{stat.body}</h3>
                        </Card>
                    ))}
                </div>

                {/* Testimonial — fades in after cards */}
                <div
                    ref={testimonialRef}
                    className={`impact-section__testimonial animate-fade-up delay-200 ${testimonialInView ? 'in-view' : ''}`}
                >
                    <p>"Testimonials from our founding clients will appear here as soon as our first placements are made."</p>
                </div>
            </div>
        </section>
    );
}