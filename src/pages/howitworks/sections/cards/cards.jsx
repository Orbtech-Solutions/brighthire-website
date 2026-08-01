import Card from "../../../../components/card/card.jsx";
import { Coins, RefreshCcw, ShieldCheck } from 'lucide-react';
import "./cards.css";
import Icon from "../../../../components/icon/icon.jsx";
import { useInView } from "../../../../hooks/useInView.js";

const statements = [
    {
        id: 1,
        icon: <Icon icon={<Coins size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
        heading: "Payment structure",
        body: "A retainer-based model designed for long-term partnerships. Placement fees never exceed 8% of annual salary — significantly below the SA industry standard of 12–15%."
    },
    {
        id: 2,
        icon: <Icon icon={<RefreshCcw size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
        heading: "3-month replacement guarantee",
        body: "If a placed employee retains, is dismissed or doesn't meet expectations within 3 months, we replace them at no additional cost."
    },
    {
        id: 3,
        icon: <Icon icon={<ShieldCheck size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
        heading: "25% community donation",
        body: "A quarter of every retainer is donated directly to Work 4 A Living — in your name, every single month."
    }
];

const STAGGER = [0, 150, 300];

export default function Cards() {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <section>
            <div ref={ref} className="section-inner cards-container">
                {statements.map((statement, index) => (
                    <Card
                        key={statement.id}
                        icon={statement.icon}
                        heading={statement.heading}
                        body={statement.body}
                        className={`section-cards hover-float hover-accent animate-fade-up delay-${STAGGER[index]} ${inView ? 'in-view' : ''}`}
                    />
                ))}
            </div>
        </section>
    );
}