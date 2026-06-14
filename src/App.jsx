import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import HomePage from './pages/home/homepage.jsx';
import AboutPage from './pages/about/aboutpage.jsx';
import HowItWorksPage from './pages/howitworks/howitworkspage.jsx';
import ContactPage from './pages/contactpage/contactpage.jsx';
import Becomefoundingclientpage from "./pages/becomefoundingclientpage/becomefoundingclientpage.jsx";
import Footer from "./components/footer/footer.jsx";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
//
  return (
      <Router>
        <ScrollToTop />

        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/become-founding-client" element={<Becomefoundingclientpage />} />
            </Routes>
          </main>
            <Footer/>
        </div>
      </Router>
  )
}
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;

}
export default App
