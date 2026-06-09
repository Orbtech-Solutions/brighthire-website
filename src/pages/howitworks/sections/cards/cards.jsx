import Card from "../../../../components/card/card.jsx";
import { Coins, RefreshCcw, ShieldCheck } from 'lucide-react';
import "./cards.css";
import Icon from "../../../../components/icon/icon.jsx";


export default function Cards() {
    const statements = [
        {
            id: 1,
            icon: <Icon icon={<Coins size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
            heading: "Payment structure",
            body: "A retainer-based model designed for long-term partnerships. Placement fees never exceed 8% of annual salary — significantly below the SA industry standard of 15–27%."
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
            body: "A quarter of every retainer is donated directly to the W4AL facility nearest your business — in your name, every single month."
        }
    ];

    return (
        <section>
            <div className="section-inner cards-container">
            {statements.map((statement) => (
                <Card 
                    key={statement.id}
                    icon={statement.icon}
                    heading={statement.heading}
                    body={statement.body}
                    className="section-cards hover-float hover-accent"
                />
            ))}
            </div>
        </section>
    );
}