import TopBanner from './sections/top-banner/home-top-banner.jsx';
import ProblemSection from './sections/problem/problem-section.jsx';
import SolutionSection from './sections/solution/solution-section.jsx';
import './home.css';

const HomePage = () => {
  return (
    <>
        <TopBanner />
        <ProblemSection />  
        <SolutionSection />      
    </>
  );
};
export default HomePage;