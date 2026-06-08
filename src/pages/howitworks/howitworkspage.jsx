import './howitworkspage.css';
import TopBanner from './sections/top-banner/top-banner';
import Cards from './sections/cards/cards';
import Reasons from './sections/reasons/reasons';
import ProcessSteps from './sections/process-steps/process-steps';
import ButtonEnd from './sections/button-end/button-end';
import Partnership from './sections/partnership/partnership';


const HowItWorksPage = () => {
    return (
    <>
    <TopBanner />
    <ProcessSteps />
    <Reasons />
    <Cards />
    <Partnership />
    <ButtonEnd />
    </>
    )
    
};

export default HowItWorksPage;