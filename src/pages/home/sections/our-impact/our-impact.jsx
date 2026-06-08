import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import Icon from '../../../../components/icon/icon.jsx';
import './our-impact.css';
import { Users, Globe, Building2 } from 'lucide-react';

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

export default function ImpactSection() {
    return (
        <section className="impact-section">
            <div className="section-inner">

                <Heading
                    smallText="Our Impact"
                    heading="Real businesses. Real graduates. Real communities."
                    subText="Our impact counter updates monthly as we grow."
                    className="heading-white subtext-white"
                />
                <div className="impact-section__cards">
                    {IMPACT_STATS.map((stat) => (
                        <Card
                            key={stat.heading}
                            icon={stat.icon}
                            heading={stat.heading}
                            body={stat.body}
                            className="hover-float impact-card"
                        />
                    ))}
                </div>

                <div className="impact-section__testimonial">
                    <p>"Testimonials from our founding clients will appear here as soon as our first placements are made."</p>
                </div>
            </div>
        </section>
    );
}