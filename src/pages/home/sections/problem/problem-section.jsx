import Card from '../../../../components/card/card.jsx';
import './problem-section.css';
import Heading from '../../../../components/heading/heading.jsx';
import { TrendingUp, UserX, Ghost } from 'lucide-react';

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
        <Heading 
          smallText="The Problem"
          heading="Hiring shouldn't feel like a gamble."
          subText="South African businesses are burning resources on broken recruitment.
          We've heard the same three complaints over and over."
          className="align-center"
        />

        {/* Cards row */}
        <div className="problem-section__cards">
          {PROBLEMS.map((problem) => (
            <Card
              key={problem.heading}
              icon={problem.icon}
              heading={problem.heading}
              body={problem.body}
              className="hover-float hover-accent"
            />
          ))}
        </div>
      </div>
    </section>
  );
}