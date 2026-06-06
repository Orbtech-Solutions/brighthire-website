import Card from '../../../../components/card/card.jsx';
import './problem-section.css';

// Lucide-style inline SVG icons — no extra dependencies needed.
// Swap these out for your icon library / asset paths if preferred.

const TurnoverIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const UnpreparedIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <line x1="17" y1="11" x2="23" y2="11" />
  </svg>
);

const GhostIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 10h.01M15 10h.01" />
    <path d="M12 2a8 8 0 0 1 8 8v12l-3-3-2.5 3L12 19l-2.5 3L7 19l-3 3V10A8 8 0 0 1 12 2z" />
  </svg>
);

const PROBLEMS = [
  {
    icon: <TurnoverIcon />,
    heading: 'High staff turnover',
    body: 'Constant churn is costing you time, money and momentum.',
  },
  {
    icon: <UnpreparedIcon />,
    heading: 'Unprepared candidates',
    body: 'Hires arrive without the workplace skills the role demands.',
  },
  {
    icon: <GhostIcon />,
    heading: 'Agencies that disappear',
    body: 'Placement done, support gone — and the problem comes back.',
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="problem-section__inner">
        {/* Section label */}
        <p className="section-small-text">The Problem</p>

        {/* Section heading */}
        <h2 className="section-heading">Hiring shouldn't feel like a gamble.</h2>

        {/* Section descriptor */}
        <p className="section-subtext">
          South African businesses are burning resources on broken recruitment.
          We've heard the same three complaints over and over.
        </p>

        {/* Cards row */}
        <div className="problem-section__cards">
          {PROBLEMS.map((problem) => (
            <Card
              key={problem.heading}
              icon={problem.icon}
              heading={problem.heading}
              body={problem.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}