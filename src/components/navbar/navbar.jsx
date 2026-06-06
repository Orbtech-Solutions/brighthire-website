import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../buttons/button.jsx';
import FullLogo from '../../assets/logo/full-logo.png';
import './navbar.css'


const Navbar = () => {
    const navigate = useNavigate();
    const contactPage = () => {
        navigate('/contact');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={FullLogo} alt="Brighthire logo" className="navbar-logo-image" />
                </Link>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
                    <li><NavLink to="/how-it-works" className={({isActive}) => isActive ? 'active' : ''}>How It Works</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
                <div className="navbar-cta">
                    <Button onClick={contactPage}>Become a Founding Client</Button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;