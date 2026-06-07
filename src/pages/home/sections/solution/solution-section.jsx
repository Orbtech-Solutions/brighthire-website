import Card from '../../../../components/card/card.jsx';
import './solution-section.css';

// Icons use var(--color-secondary) (yellow/gold) to contrast against the dark navy wrapper

const GraduateIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="var(--color-secondary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="var(--color-secondary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 21l7.65-8.19.77-.78a5.4 5.4 0 0 0 0-7.65z" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="var(--color-secondary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SOLUTIONS = [
  {
    icon: <GraduateIcon />,
    heading: 'Work-ready candidates',
    body: 'Every placement comes from the Work 4 A Living Job Excellence Course — trained, disciplined and ready from day one.',
  },
  {
    icon: <HandshakeIcon />,
    heading: 'We never disappear',
    body: 'Monthly CRM check-ins with employer and employee. A three-month replacement guarantee, no questions asked.',
  },
  {
    icon: <CommunityIcon />,
    heading: '25% funds your community',
    body: 'A quarter of every retainer is donated to the W4AL facility nearest you — in your business\'s name.',
  },
];

export default function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="solution-section__inner">
        {/* Section label */}
        <p className="section-small-text">The Solution</p>

        {/* Section heading */}
        <h2 className="section-heading">Recruitment, rebuilt around outcomes.</h2>

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