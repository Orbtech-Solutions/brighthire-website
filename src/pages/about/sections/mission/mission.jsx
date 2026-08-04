import { Target } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Sprout } from 'lucide-react';
import Icon from "../../../../components/icon/icon.jsx";
import Heading from "../../../../components/heading/heading.jsx";
import Card from "../../../../components/card/card.jsx";
import "./mission.css";
import Button from  "../../../../components/buttons/button.jsx";
import { motion } from 'motion/react';





export default function Mission() {
    const missions = [
        {
            icon: <Icon icon={<Target size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className=""/>,
            heading: "Purpose first",
            description: "Every placement should change a life — the candidate's, the employer's and the community's"
        },
        {
            icon: <Icon icon={<Heart size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className=""/>,
            heading: "Honest communication",
            description: "Monthly check-ins and a three-month guarantee. We don't disappear after the contract is signed."
        },
        {
            icon: <Icon icon={<ShieldCheck size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className=""/>,
            heading: "Quality over volume",
            description: "Only W4AL-trained graduates. Handpicked by facilitators who know each student personally."
        },
        {
            icon: <Icon icon={<Sprout size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className=""/>,
            heading: "Community impact",
            description: "25% of every retainer reinvested into Work 4 A Living — in your name."
        }
    ]

    return(
        <section className='our-mission-section'>
            <div className="section-inner">
                <motion.div
                    className="mission-container"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                  <Heading smallText="Mission & values" heading="What we stand for." className="align-center" />
                </motion.div>
                <div className="mission-grid">
                    {missions.map((mission, index) => {
                        return (
                        <motion.div key={index} className="mission-section-card"
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                        >
                            <Card index={index} 
                                  icon={mission.icon} 
                                  heading={mission.heading} 
                                  body={mission.description}
                                  className="mission-section-card__card"
                            />
                        </motion.div>
                        )
                    })}
                </div>
                <motion.div
                    className="section-partnership"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card heading="Working hand in hand with Work 4 A Living"
                          body="A South African non-profit transforming lives through mentorship, skills development and biblical values — with 30+ facilities nationwide."
                          className="partnership-featured-card">
                      <div className="partnership-action-block">
                        <Button  link="https://work4aliving.org/" variant="primary">Visit W4AL →</Button>
                      </div>
                    </Card> 
                </motion.div>
            </div>
        </section>
    )
}