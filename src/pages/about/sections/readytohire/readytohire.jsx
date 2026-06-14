import Heading from "../../../../components/heading/heading.jsx"
import Button from "../../../../components/buttons/button.jsx"
import "./readytohire.css"



export default function ReadyToHire() {
    return(
        <section>
            <div className="section-inner section-get-hires">
                <Heading heading="Ready to hire the bright way?" 
                         subText="Lock in your founding client rate and start investing in your community today."
                />
                <Button link="/contact" variant="primary">Get in touch</Button>
            </div>
        </section>
    )
}