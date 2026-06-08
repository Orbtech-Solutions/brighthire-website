import Card from "../../../../components/card/card.jsx";
import { Coins, RefreshCcw, ShieldCheck } from 'lucide-react';
import "./cards.css";

export default function Cards() {
    const statements = [
        {
            id: 1,
            icon: <Coins />,
            heading: "Payment structure",
            body: "A retainer-based model designed for long-term partnerships. Placement fees never exceed 8% of annual salary — significantly below the SA industry standard of 15–27%."
        },
        {
            id: 2,
            icon: <RefreshCcw />,
            heading: "3-month replacement guarantee",
            body: "If a placed employee retains, is dismissed or doesn't meet expectations within 3 months, we replace them at no additional cost."
        },
        {
            id: 3,
            icon: <ShieldCheck />,
            heading: "25% community donation",
            body: ""
        }
    ];

    return (
        <section>
            {statements.map((statement) => (
                <Card 
                    key={statement.id}
                    icon={statement.icon}
                    heading={statement.heading}
                    body={statement.body}
                />
            ))}
        </section>
    );
}