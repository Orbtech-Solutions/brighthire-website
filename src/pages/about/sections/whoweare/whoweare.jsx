import Heading from "../../../../components/heading/heading.jsx"
import "./whoweare.css"
import imagePath from "../../../../assets/media/images/laundry_cashier.jpg";
import Card from "../../../../components/card/card.jsx";
import { Reveal } from "../../../../components/motion/motion.jsx";

export default function WhoWeAre() {
    return (
        <section>
            <div className="whoweare-section section-inner">
                <div className="whoweare-section-left">
                  <Heading 
                      smallText="Who we are"
                      heading="We are not here to talk about the crisis. We are here to do something about it."
                  />
                  <Reveal className="whoweare-section-left__body-content" delay={0.2}>
                      <p>
                          BrightHire is a South African recruitment agency specialising in blue-collar recruitment. 
                          Our goal is to connect businesses with reliable, work-ready employees while helping tackle 
                          unemployment across South Africa.
                      </p>
                      <p>
                          What makes us unique is that we exclusively place candidates who have completed the{" "}
                          <span className="paragraph-accent">Work 4 A Living Job Excellence Course</span> — equipping 
                          them with workplace skills, discipline, professionalism and strong personal values.
                      </p>
                      <p>
                          Founded by three young entrepreneurs, our vision is to revolutionise blue-collar recruitment 
                          in South Africa by combining purpose-driven hiring with meaningful community impact — one 
                          placement, one business, one community at a time.
                      </p>
                  </Reveal>
                </div>
                <div className="whoweare-section-right">
                  <Reveal className="whoweare-image-container" delay={0.1}>
                      <img src={imagePath} alt="" />
                  </Reveal>
                  <div>
                      <Card textIcon="30+" 
                            body="W4AL facilities across South Africa connecting candidates to your business."
                            color="var(--color-secondary)"
                            className="whoweare-card banner-primary"
                            index={3}
                            />
                  </div>
                </div>
            </div>
        </section>
    );
}