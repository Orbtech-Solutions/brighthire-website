import AboutTopBanner from "./sections/top-banner/about-top-banner.jsx";
import OurStory from "./sections/ourstory/ourstory.jsx";
import Mission from "./sections/mission/mission.jsx";
import ReadyToHire from "./sections/readytohire/readytohire.jsx";
import WhoWeAre from "./sections/whoweare/whoweare.jsx";
import MeetTeam from "./sections/meetteam/meetteam.jsx";



const AboutPage = () => {
    return (
        <>
        <AboutTopBanner />
        <WhoWeAre />
        <OurStory />
        <MeetTeam />
        <Mission />
        <ReadyToHire />
        </>
    );
};
export default AboutPage;