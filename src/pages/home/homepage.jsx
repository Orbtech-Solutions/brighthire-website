import TopBanner from './sections/top-banner/top-banner.jsx';
import ProblemSection from './sections/problem/problem-section.jsx';
import SolutionSection from './sections/solution/solution-section.jsx';
import Card from '../../components/card/card.jsx';
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