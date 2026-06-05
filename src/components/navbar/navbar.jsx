import { Link,useNavigate} from 'react-router-dom';
import Button from '../buttons/button.jsx';
import './styles/navbar.css'


const Navbar = () => {
    const navigate = useNavigate();
    const foundingclientpage = () => {
        navigate('/become-founding-client');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <span>BH</span>
                    <div>
                        <strong>BrightHire</strong>
                        <span>The bright way tp hire</span>
                    </div>
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-cta">
                <Button onClick={foundingclientpage}>Become a Founding Client</Button>
            </div>
        </nav>
    );
};
export default Navbar;