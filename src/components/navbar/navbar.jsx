import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import Button from '../buttons/button.jsx';
import FullLogo from '../../assets/logo/Full.svg';
import { EASE } from '../motion/variants.js';
import './navbar.css'

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/contact', label: 'Contact' },
];

// Must match the breakpoint in navbar.css
const MOBILE_QUERY = '(max-width: 1050px)';

/* ── Mobile menu animation variants ─────────────────────────── */
const panelVariants = {
    closed: {
        clipPath: 'inset(0% 0% 100% 0% round 0 0 24px 24px)',
        transition: { duration: 0.35, ease: EASE, when: 'afterChildren', staggerChildren: 0.03, staggerDirection: -1 },
    },
    open: {
        clipPath: 'inset(0% 0% 0% 0% round 0 0 24px 24px)',
        transition: { duration: 0.5, ease: EASE, staggerChildren: 0.06, delayChildren: 0.12 },
    },
};

const itemVariants = {
    closed: { opacity: 0, y: 16, transition: { duration: 0.2, ease: EASE } },
    open: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Compact header + stronger shadow once the user scrolls.
    // Uses two thresholds so it doesn't flicker around a single value.
    useMotionValueEvent(scrollY, 'change', (y) => {
        if (y > 80 && !scrolled) setScrolled(true);
        else if (y < 20 && scrolled) setScrolled(false);
    });

    const closeMenu = () => setMenuOpen(false);

    // While the menu is open: lock page scroll, close on Escape,
    // and close if the viewport grows to desktop size.
    useEffect(() => {
        if (!menuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
        const mql = window.matchMedia(MOBILE_QUERY);
        const onBreakpoint = (e) => { if (!e.matches) setMenuOpen(false); };

        window.addEventListener('keydown', onKeyDown);
        mql.addEventListener('change', onBreakpoint);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
            mql.removeEventListener('change', onBreakpoint);
        };
    }, [menuOpen]);

    return (
        <>
            {/* Dimmed backdrop behind the mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="navbar-backdrop"
                        onClick={closeMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            <motion.nav
                className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
            >
                <div className="navbar-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={FullLogo} alt="BrightHire — The Bright Way To Hire" className="navbar-logo-image" />
                    </Link>
                </div>

                {/* Desktop navigation */}
                <div className="navbar-right">
                    <ul>
                        {NAV_LINKS.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                                    {({ isActive }) => (
                                        <>
                                            {label}
                                            {isActive && (
                                                // Underline glides between links when the page changes
                                                <motion.span
                                                    layoutId="navbar-active-underline"
                                                    className="navbar-active-underline"
                                                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar-cta">
                        <Button onClick={() => navigate('/contact')}>Become a Founding Client</Button>
                    </div>
                </div>

                {/* Mobile burger toggle */}
                <button
                    type="button"
                    className="navbar-burger"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <motion.span
                        className="navbar-burger__line"
                        animate={menuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                    />
                    <motion.span
                        className="navbar-burger__line navbar-burger__line--short"
                        animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.2, ease: EASE }}
                    />
                    <motion.span
                        className="navbar-burger__line"
                        animate={menuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                    />
                </button>

                {/* Mobile menu panel */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            id="mobile-menu"
                            className="mobile-menu"
                            variants={panelVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <ul className="mobile-menu__links">
                                {NAV_LINKS.map(({ to, label }, i) => (
                                    <motion.li key={to} variants={itemVariants}>
                                        <NavLink
                                            to={to}
                                            end={to === '/'}
                                            onClick={closeMenu}
                                            className={({ isActive }) => `mobile-menu__link ${isActive ? 'active' : ''}`}
                                        >
                                            <span className="mobile-menu__index">{String(i + 1).padStart(2, '0')}</span>
                                            <span className="mobile-menu__label">{label}</span>
                                            <span className="mobile-menu__arrow" aria-hidden="true">→</span>
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div className="mobile-menu__footer" variants={itemVariants}>
                                <div className="mobile-menu__cta" onClick={closeMenu}>
                                    <Button link="/contact" variant="secondary">Become a Founding Client</Button>
                                </div>
                                <p className="mobile-menu__tagline">The Bright Way To Hire.</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};
export default Navbar;
