import TopBanner from './sections/top-banner/home-top-banner.jsx';
import ProblemSection from './sections/problem/problem-section.jsx';
import SolutionSection from './sections/solution/solution-section.jsx';
import ImpactSection from './sections/our-impact/our-impact.jsx';
import './home.css';

const HomePage = () => {
  return (
    <>
        <TopBanner />
        <ProblemSection />  
        <SolutionSection />
        <ImpactSection />
    </>
  );
};
export default HomePage;