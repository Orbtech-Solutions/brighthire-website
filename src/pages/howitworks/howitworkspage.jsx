import './howitworkspage.css';
import TopBanner from './sections/top-banner/top-banner.jsx';
import Cards from './sections/cards/cards.jsx';
import Reasons from './sections/reasons/reasons.jsx';
import ProcessSteps from './sections/process-steps/process-steps.jsx';
import ButtonEnd from './sections/button-end/button-end.jsx';
import Partnership from './sections/partnership/partnership.jsx';


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