import "./top-banner.css"
import Heading from "../../../../components/heading/heading"

export default function TopBanner() {
    return(
        <section className="banner-primary">
            <Heading 
                smallText="How it works"
                heading="A structured process, built for the long term." 
                subText="From brief to placement to monthly support — here's exactly what working with BrightHire looks like."
                className="heading-white subtext-white section-paragraph"
            />
        </section>
    )
}