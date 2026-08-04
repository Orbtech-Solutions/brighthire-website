import Heading from "../../../../components/heading/heading.jsx"
import "./whoweare.css"
import imagePath from "../../../../assets/media/images/laundry_cashier.jpg";
import Card from "../../../../components/card/card.jsx";
import { motion } from 'motion/react';

export default function WhoWeAre() {
    return (
        <section>
            <div className="whoweare-section section-inner">
                <motion.div
                    className="whoweare-section-left"
                    initial={{ opacity: 0, y: 20, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Heading 
                      smallText="Who we are"
                      heading="We are not here to talk about the crisis. We are here to do something about it."
                  />
                  <div className="whoweare-section-left__body-content">
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
                  </div>
                </motion.div>
                <motion.div
                    className="whoweare-section-right"
                    initial={{ opacity: 0, y: 20, x: 40, scale: 0.99 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                >
                  <div className="whoweare-image-container">
                      <img src={imagePath} alt="" />
                  </div>
                  <div>
                      <Card textIcon="30+" 
                            body="W4AL facilities across South Africa connecting candidates to your business."
                            color="var(--color-secondary)"
                            className="whoweare-card banner-primary"
                            />
                  </div>
                </motion.div>
            </div>
        </section>
    );
}