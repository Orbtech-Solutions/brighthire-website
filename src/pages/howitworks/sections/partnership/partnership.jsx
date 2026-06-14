import Card from "../../../../components/card/card.jsx";
import "./partnership.css";
import Heading from "../../../../components/heading/heading.jsx"

export default function Partnership() {
    return(
        <section className="partnership-section">
            <div className="section-inner">
                <Card 
                heading={<Heading smallText="In partnership with" heading="Work 4 A Living"/>} 
                body="W4AL is a South African non-profit transforming lives through mentorship, skills development and biblical values. 
                Beyond the Job Excellence Course, W4AL offers 30+ additional courses and development programmes, allowing candidates to specialise and become even more valuable employees. 
                BrightHire works hand in hand with W4AL facilitators nationwide to connect businesses with people who are dependable, motivated and ready to contribute positively from day one." 
                className="section-partnership__card"
                />
            </div>
        </section>
    )
}