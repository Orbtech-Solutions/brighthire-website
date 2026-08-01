import Heading from "../../../../components/heading/heading.jsx"
import './button-end.css'
import Button from '../../../../components/buttons/button.jsx';
import { useInView } from "../../../../hooks/useInView.js";

export default function ButtonEnd() {
    const [ref, inView] = useInView({ threshold: 0.3 });

    return(
        <section>
            <div ref={ref} className={`section-inner end-section animate-fade-up ${inView ? 'in-view' : ''}`}>
                <Heading
                    heading="Hire the bright way."
                    subText="Take the first step. Tell us what you need and we'll take it from there."
                    disableAnimation
                />
                <Button link="/contact" variant="secondary">Become a Founding Client</Button>
            </div>
        </section>
    );
}