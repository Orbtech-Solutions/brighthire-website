import Card from "../../../../components/card/card.jsx";
import "./partnership.css";
import Heading from "../../../../components/heading/heading.jsx";
import { useInView } from "../../../../hooks/useInView.js";

export default function Partnership() {
    const [ref, inView] = useInView({ threshold: 0.2 });

    return(
        <section className="partnership-section">
            <div className="section-inner">
                <div
                    ref={ref}
                    className={`animate-fade-in-scale ${inView ? 'in-view' : ''}`}
                >
                    <Card
                        heading={<Heading smallText="Working hand in hand" heading="Work 4 A Living" disableAnimation />}
                        body="W4AL is a South African non-profit transforming lives through mentorship, skills development and biblical values.
                        Beyond the Job Excellence Course, W4AL offers 30+ additional courses and development programmes, allowing candidates to specialise and become even more valuable employees.
                        BrightHire works hand in hand with W4AL facilitators nationwide to connect businesses with people who are dependable, motivated and ready to contribute positively from day one."
                        className="section-partnership__card"
                    />
                </div>
            </div>
        </section>
    );
}