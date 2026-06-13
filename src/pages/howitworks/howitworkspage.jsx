import './howitworkspage.css';
import TopBanner from './sections/top-banner/top-banner.jsx';
import Cards from './sections/cards/cards.jsx';
import WhatMakesUsDiffirent from './sections/what-makes-us-diffirent/what-makes-us-diffirent.jsx';
import ProcessSteps from './sections/process-steps/process-steps.jsx';
import ButtonEnd from './sections/button-end/button-end.jsx';
import Partnership from './sections/partnership/partnership.jsx';


const HowItWorksPage = () => {
    return (
    <>
    <TopBanner />
    <ProcessSteps />
    <WhatMakesUsDiffirent />
    <Cards />
    <Partnership />
    <ButtonEnd />
    </>
    )
    
};

export default HowItWorksPage;