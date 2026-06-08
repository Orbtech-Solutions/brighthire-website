import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import './solution-section.css';
import { HeartHandshake } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Users } from 'lucide-react';

// Icons use var(--color-secondary) (yellow/gold) to contrast against the dark navy wrapper
const SOLUTIONS = [
  {
    icon: <GraduationCap color="#E5AF3C" />,
    heading: 'Work-ready candidates',
    body: 'Every placement comes from the Work 4 A Living Job Excellence Course — trained, disciplined and ready from day one.',
  },
  {
    icon: <HeartHandshake color="#E5AF3C" />,
    heading: 'We never disappear',
    body: 'Monthly CRM check-ins with employer and employee. A three-month replacement guarantee, no questions asked.',
  },
  {
    icon: <Users color="#E5AF3C" />,
    heading: '25% funds your community',
    body: 'A quarter of every retainer is donated to the W4AL facility nearest you — in your business\'s name.',
  },
];

export default function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="section-inner">

        <Heading 
          smallText="The Solution"
          heading="Recruitment, rebuilt around outcomes."
        />

        {/* Cards row */}
        <div className="solution-section__cards">
          {SOLUTIONS.map((solution) => (
            <Card
              key={solution.heading}
              icon={solution.icon}
              heading={solution.heading}
              body={solution.body}
              className="hover-float hover-accent"
            />
          ))}
        </div>
      </div>
    </section>
  );
}