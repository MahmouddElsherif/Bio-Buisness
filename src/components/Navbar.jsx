import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Microscope, Activity, Wind, Database, LifeBuoy, Info, Mail } from 'lucide-react';
import { products } from '../data/products';
import { solutions } from '../data/solutions';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { title: 'Home', path: '/' },
        {
            title: 'Products',
            path: '/products',
            submenu: products.map(p => ({ title: p.title, path: `/products/${p.id}` }))
        },
        {
            title: 'Solutions',
            path: '/solutions',
            submenu: solutions.map(s => ({ title: s.title, path: `/solutions/${s.id}` }))
        },
        {
            title: 'Support',
            path: '/support',
            submenu: [
                { title: 'Technical Support', path: '/support/manuals' },
                { title: 'Sales Inquiry', path: '/support/sales' }
            ]
        },
        { title: 'News', path: '/news' },
        { title: 'About Us', path: '/about' },
        { title: 'Contact', path: '/contact' }
    ];

    const dropdownVariants = {
        hidden: { opacity: 0, y: 15, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
        exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }
    };

    return (
        <nav className={`header ${scrolled ? 'scrolled glass-header' : 'glass'} active`}>
            <div className="container nav">
                {/* Logo */}
                <Link to="/" className="logo">
                    <span className="logo-text">BIO</span>BUSINESS
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {menuItems.map((item) => (
                        <li
                            key={item.title}
                            onMouseEnter={() => item.submenu && setActiveDropdown(item.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                            className="nav-item"
                        >
                            <Link to={item.path} className="nav-link">
                                {item.title} {item.submenu && <ChevronDown size={14} className="chevron" />}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {activeDropdown === item.title && item.submenu && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="dropdown-container glass"
                                    >
                                        <ul className="dropdown-menu">
                                            {item.submenu.map((sub) => (
                                                <li key={sub.title}>
                                                    <Link to={sub.path} className="dropdown-item">
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="white" /> : <Menu color="white" />}
                </button>

                {/* Mobile Sidebar */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            className="mobile-sidebar glass"
                        >
                            <ul className="mobile-nav-links">
                                {menuItems.map((item) => (
                                    <li key={item.title} className="mobile-nav-item">
                                        <Link to={item.path} onClick={() => setIsOpen(false)}>
                                            {item.title}
                                        </Link>
                                        {item.submenu && (
                                            <ul className="mobile-submenu">
                                                {item.submenu.map(sub => (
                                                    <li key={sub.title}>
                                                        <Link to={sub.path} onClick={() => setIsOpen(false)}>
                                                            - {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
        .nav-item { position: relative; padding: 1rem 0; }
        .dropdown-container {
          position: absolute;
          top: 100%;
          left: -20px;
          min-width: 200px;
          padding: 1rem;
          z-index: 1001;
          margin-top: 5px;
        }
        .dropdown-item {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--color-text-muted);
          transition: var(--transition-fast);
          font-size: 0.9rem;
        }
        .dropdown-item:hover {
          color: var(--color-primary);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .chevron { margin-left: 4px; transition: transform 0.2s; }
        .nav-link:hover .chevron { transform: rotate(180deg); }
        
        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          height: 100vh;
          z-index: 1002;
          padding: 5rem 2rem;
          overflow-y: auto;
        }
        .mobile-nav-item { margin-bottom: 2rem; }
        .mobile-nav-item > a { font-size: 1.5rem; font-weight: 700; color: var(--color-white); }
        .mobile-submenu { margin-top: 0.5rem; padding-left: 1rem; }
        .mobile-submenu a { font-size: 1rem; color: var(--color-text-muted); padding: 0.5rem 0; display: block; }
      `}</style>
        </nav>
    );
};

export default Navbar;
