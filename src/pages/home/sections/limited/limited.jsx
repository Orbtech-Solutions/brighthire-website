import Card from "../../../../components/card/card";
import Heading from "../../../../components/heading/heading";
import "./limited.css";
import Button from "../../../../components/buttons/button";


export default function ImpactSection() {
    return (
        <section className="section-limited section-inner">
           <Card heading={<Heading smallText="Limited — 10 spots" 
                                   heading="We are currently selecting our 10 founding clients in Paarl."  
                          />}
                          body="Join now and lock in your rate permanently before our official launch. Founding clients receive priority placement, early access to the BrightHire app, and a featured logo on our community impact partner wall."
                          className="section-limited__card banner-primary"
                          >
               <Button link="/contact" variant="secondary">Become a Founding Client</Button>
           </Card>
        </section>
    );
}