import Heading from "../../../../components/heading/heading.jsx"
import { Reveal } from '../../../../components/motion/motion.jsx';
import './button-end.css'
import Button from '../../../../components/buttons/button.jsx';



export default function ButtonEnd() {
    return(
        <section>
            <div className="section-inner end-section">
                <Heading heading="Hire the bright way." subText="Take the first step. Tell us what you need and we'll take it from there."/>
                 <Reveal delay={0.3}>
                    <Button link="/contact" variant="secondary">Become a Founding Client</Button>
                 </Reveal>
            </div>
        </section>
    )
}