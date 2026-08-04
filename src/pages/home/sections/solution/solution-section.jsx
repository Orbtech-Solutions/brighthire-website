import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import Icon from '../../../../components/icon/icon.jsx';
import './solution-section.css';
import { GraduationCap, HeartHandshake, HandCoins } from 'lucide-react';
import { motion } from 'motion/react';

const SOLUTIONS = [
  {
    icon: <Icon icon={<GraduationCap size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
    heading: 'Work-ready candidates',
    body: 'Every placement comes from the Work 4 A Living Job Excellence Course — trained, disciplined and ready from day one.',
  },
  {
    icon: <Icon icon={<HeartHandshake size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
    heading: 'We never disappear',
    body: 'Monthly CRM check-ins with employer and employee. A three-month probation period with a replacement, free-of-charge.',
  },
  {
    icon: <Icon icon={<HandCoins size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
    heading: '25% funds your community',
    body: "A quarter of every retainer is donated to Work 4 A Living — in your business's name",
  },
];

export default function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="section-inner">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Heading 
            smallText="The Solution"
            heading="Recruitment, rebuilt around outcomes."
            className="align-center"
          />
        </motion.div>

        {/* Cards row */}
        <div className="solution-section__cards">
          {SOLUTIONS.map((solution, idx) => (
            <motion.div
              key={solution.heading}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <Card
                icon={solution.icon}
                heading={solution.heading}
                body={solution.body}
                className="hover-float hover-accent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}