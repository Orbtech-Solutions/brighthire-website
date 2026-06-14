import Heading from "../../../../components/heading/heading.jsx"
import './button-end.css'
import Button from '../../../../components/buttons/button.jsx';



export default function ButtonEnd() {
    return(
        <section>
            <div className="section-inner end-section">
                <Heading heading="Hire the bright way." subText="Take the first step. Tell us what you need and we'll take it from there."/>
                 <Button link="/contact" variant="secondary">Become a Founding Client</Button>
            </div>
        </section>
    )
}