import './button.css';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({children, onClick, type='button',variant='primary', link})=>{

    if (link) {
            if (link) {
                const isExternal = link.startsWith('http');
                // If link is exernal
                if (isExternal) {
                    return (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-${variant}`}
                        >
                            {children}
                        </a>
                    );
                }
                // If link is not external
                return (
                <Link to={link} type={type} className={`btn btn-${variant}`}> 
                    {children}
                </Link>
                );
            }
    }
    // If there is no link
    return (
        <button type={type} onClick={onClick} className={`btn btn-${variant}`}> 
            {children}
        </button>
    )
    
};
export default Button;