import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import HomePage from './pages/home/homepage.jsx';
import AboutPage from './pages/about/aboutpage.jsx';
import HowItWorksPage from './pages/howitworks/howitworkspage.jsx';
import ContactPage from './pages/contactpage/contactpage.jsx';
import Becomefoundingclientpage from "./pages/becomefoundingclientpage/becomefoundingclientpage.jsx";

function App() {
//
  return (
      <Router>
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
        </div>
      </Router>
  )
}

export default App
