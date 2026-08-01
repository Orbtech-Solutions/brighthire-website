import Card from '../../../../components/card/card.jsx';
import Heading from '../../../../components/heading/heading.jsx';
import Icon from '../../../../components/icon/icon.jsx';
import './solution-section.css';
import { GraduationCap, HeartHandshake, HandCoins } from 'lucide-react';
import { useInView } from '../../../../hooks/useInView';

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
    body: 'A quarter of every retainer is donated to the W4AL facility closest to you — in your business\'s name.',
  },
];

const STAGGER = [0, 150, 300];

export default function SolutionSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="solution-section">
      <div className="section-inner">

        <Heading 
          smallText="The Solution"
          heading="Recruitment, rebuilt around outcomes."
          className="align-center"
        />

        {/* Cards row — staggered fade-up */}
        <div ref={ref} className="solution-section__cards">
          {SOLUTIONS.map((solution, index) => (
            <Card
              key={solution.heading}
              icon={solution.icon}
              heading={solution.heading}
              body={solution.body}
              className={`hover-float hover-accent animate-fade-up delay-${STAGGER[index]} ${inView ? 'in-view' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}