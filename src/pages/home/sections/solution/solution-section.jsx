import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import Icon from '../../../../components/icon/icon.jsx';
import './solution-section.css';
import { GraduationCap, HeartHandshake, HandCoins } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: <Icon icon={<GraduationCap size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
    heading: 'Work-ready candidates',
    body: 'Every placement comes from the Work 4 A Living Job Excellence Course — trained, disciplined and ready from day one.',
  },
  {
    icon: <Icon icon={<HeartHandshake size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
    heading: 'We never disappear',
    body: 'Monthly CRM check-ins with employer and employee. A three-month replacement guarantee, no questions asked.',
  },
  {
    icon: <Icon icon={<HandCoins size={26} color="var(--color-secondary)" strokeWidth={1.75}/>} className={"background-primary"}/>,
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