import Card from '../../../../components/card/card.jsx';
import './problem-section.css';
import Heading from '../../../../components/heading/heading.jsx';
import { TrendingUp, UserX, Ghost } from 'lucide-react';
import { motion } from 'motion/react';

const PROBLEMS = [
  {
    icon: <TrendingUp size={26} color="var(--color-primary)" strokeWidth={1.75} />,
    heading: 'High staff turnover',
    body: 'Constant churn is costing you time, money and momentum.',
  },
  {
    icon: <UserX size={26} color="var(--color-primary)" strokeWidth={1.75} />,
    heading: 'Unprepared candidates',
    body: 'Hires arrive without the workplace skills the role demands.',
  },
  {
    icon: <Ghost size={26} color="var(--color-primary)" strokeWidth={1.75} />,
    heading: 'Agencies that disappear',
    body: 'Placement done, support gone — and the problem comes back.',
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="problem-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Heading 
            smallText="The Problem"
            heading="Hiring shouldn't feel like a gamble."
            subText="South African businesses are burning resources on broken recruitment.
          We've heard the same three complaints over and over."
            className="align-center"
          />
        </motion.div>

        {/* Cards row */}
        <div className="problem-section__cards">
          {PROBLEMS.map((problem, idx) => (
            <motion.div
              key={problem.heading}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <Card
                icon={problem.icon}
                heading={problem.heading}
                body={problem.body}
                className="hover-float hover-accent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}