import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="logo">
                        <span className="logo-text">BIO</span>BUSINESS
                    </Link>
                    <p className="footer-desc">
                        Leading the way in Medical R&D and IoT solutions in Cairo, Egypt.
                        Committed to quality through ISO 9001 and ISO 13485 certifications.
                    </p>
                    <div className="social-links">
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Get in Touch</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="icon" />
                            <span>51 A, Abou Rawash Industrial zone KM 26, Alex. Desert Rd. Cairo.</span>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <span>+201033320755</span>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <span>contactus@biobusiness-eg.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} BioBusiness. All rights reserved.</p>
            </div>

            <style>{`
        .footer-desc { margin: 1.5rem 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6; }
        .social-links { display: flex; gap: 1rem; margin-top: 1rem; }
        .social-links a { color: var(--color-text-muted); transition: var(--transition-fast); }
        .social-links a:hover { color: var(--color-primary); transform: translateY(-3px); }
        
        .contact-list { margin-top: 1rem; }
        .contact-list li { display: flex; gap: 1rem; margin-bottom: 1.2rem; align-items: flex-start; }
        .contact-list .icon { color: var(--color-primary); flex-shrink: 0; margin-top: 3px; }
        .contact-list span { color: var(--color-text-muted); font-size: 0.95rem; }
        
        .footer-links h4, .footer-contact h4 { font-family: var(--font-heading); color: var(--color-white); font-size: 1.2rem; margin-bottom: 1.5rem; }
        .footer-links ul li { margin-bottom: 0.8rem; }
        .footer-links a { color: var(--color-text-muted); transition: var(--transition-fast); }
        .footer-links a:hover { color: var(--color-primary); padding-left: 5px; }
      `}</style>
        </footer>
    );
};

export default Footer;
