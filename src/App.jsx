import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig, motion } from 'motion/react';
import Navbar from './components/navbar/navbar.jsx';
import HomePage from './pages/home/homepage.jsx';
import AboutPage from './pages/about/aboutpage.jsx';
import HowItWorksPage from './pages/howitworks/howitworkspage.jsx';
import ContactPage from './pages/contactpage/contactpage.jsx';
import Becomefoundingclientpage from "./pages/becomefoundingclientpage/becomefoundingclientpage.jsx";
import Footer from "./components/footer/footer.jsx";
import { EASE } from './components/motion/variants.js';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    // reducedMotion="user" disables transform animations for visitors who
    // have "reduce motion" switched on in their OS settings.
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />

        <div className="app">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  )
}

// Fades each page in when the route changes.
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/become-founding-client" element={<Becomefoundingclientpage />} />
      </Routes>
    </motion.div>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App
