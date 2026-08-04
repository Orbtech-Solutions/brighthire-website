import "./meetteam.css";
import Heading from "../../../../components/heading/heading.jsx";
import { motion } from 'motion/react';


export default function MeetTeam() {
    return(
        <section>
            <div className="meetteam-section section-inner">
                <div className="meetteam-section-upper">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading smallText="Meet the team" heading="The people behind every placement." className="align-center"/>
                    </motion.div>
                </div>
                <motion.div
                    className="align-center"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.06 }}
                >
                    <p>
                        We are three young entrepreneurs brought together by a shared passion for business, people, and creating 
                        meaningful change. As friends with a common vision, we recognised that South Africa’s unemployment crisis 
                        isn’t just a statistic—it’s something that affects families, businesses, and communities every day. Rather 
                        than standing by, we decided to build a business that could become part of the solution.
                    </p>
                    <p>
                        Our faith is at the heart of who we are and how we lead. Guided by Biblical principles such as integrity, 
                        excellence, servant leadership, and stewardship, we believe that business is an opportunity to honour God 
                        by serving others and creating lasting value. These values shape every decision we make and the way we build 
                        relationships with our clients, candidates, and partners.
                    </p>
                    <p>
                        This vision led to the creation of BrightHire—a recruitment agency committed to connecting businesses with 
                        reliable, work-ready talent while creating opportunities for people to build better futures. By working hand 
                        in hand with Work 4 A Living, we aim to help businesses hire with confidence while contributing to the transformation 
                        of lives through meaningful employment.
                    </p>
                    <p>
                        For us, BrightHire is more than a business. It’s a mission to make a lasting impact—one person, one business, and one 
                        opportunity at a time.
                    </p>          
                    <p>              
                        The Bright Way To Hire.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}