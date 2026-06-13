import Heading from "../../../../components/heading/heading";

export default function TopBanner() {
    return (
        <section className="banner-primary">
            <Heading 
                smallText="Become a founding client"
                heading="Let's talk about who you need to hire." 
                subText="Tell us a little about your business and the roles you're looking to fill. We'll be in touch within one business day."
                className="heading-white subtext-white"
            />
        </section>
    );
}