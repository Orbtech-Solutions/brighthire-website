import Heading from "../../../../components/heading/heading.jsx"
import "./about-top-banner.css"

export default function AboutTopBanner() {
    return(
        <section className="banner-primary">
            <div className="section-banner">
                <Heading 
                    smallText="About BrightHire" 
                    heading={<>Recruitment with purpose. <span id="heading-accent">Community by design.</span></>} 
                    subText="We exist for one purpose — to connect trained, work-ready graduates with businesses that need them, while investing directly back into the communities those businesses serve."
                    spanColor="white"
                    className="align-center"
                />
            </div>
        </section>
    )
}