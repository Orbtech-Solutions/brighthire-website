import { Link } from "react-router-dom";
import logo from "../../assets/logo/single-logo.png";
import "./footer.css";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="logo-section">
                    <div className="logo-row">
                        <div className="logo-box">
                            <img src={logo} alt="BrightHire" width={32} height={32} />
                        </div>
                        <div>
                            <div className="brand-name">BrightHire</div>
                            <div className="tagline">The Bright Way To Hire</div>
                        </div>
                    </div>
                    <p className="description">
                        Recruitment with purpose. Community by design. Connecting South African businesses with
                        work-ready graduates while investing 25% of every retainer into local skills development.
                    </p>
                    <div className="social-links description">
                        <p>Social Media links will apear soon</p>
                    </div>
                </div>
                <div>
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/how-it-works">How It Works</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li className="contact-item">
                            <Mail size={16} className="icon" />
                            <a href="mailto:sales@brighthire.net">sales@brighthire.net</a>
                        </li>
                       <li className="contact-item">
                            <MessageCircle size={16} className="icon" />
                            <a href="https://wa.me/27660067920" target="_blank" rel="noopener noreferer">+27 660 067 920</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <p>© 2026 BrightHire. All rights reserved.</p>
                <p>
                    Working hand in hand with{" "}
                    <a href="https://www.work4aliving.org" target="_blank" rel="noreferrer">
                        Work 4 A Living
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;