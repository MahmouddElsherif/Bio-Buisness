import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <Section className="section-padding container">
            <h2 className="section-title">Contact Us</h2>
            <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '4rem', display: 'grid', marginTop: '3rem' }}>
                <form className="glass" style={{ padding: '2rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Full Name</label>
                        <input type="text" className="glass" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} placeholder="John Doe" />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Email Address</label>
                        <input type="email" className="glass" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} placeholder="john@example.com" />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Message</label>
                        <textarea className="glass" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(255,255,255,0.1)', color: 'white', minHeight: '150px' }} placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>

                <div className="contact-info">
                    <div style={{ marginBottom: '3rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Corporate Office</h4>
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <MapPin size={20} className="text-gradient" />
                            <span>51 A, Abou Rawash Industrial zone KM 26, Alex. Desert Rd. Cairo.</span>
                        </div>
                    </div>
                    <div style={{ marginBottom: '3rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Phone & Email</h4>
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            <Phone size={20} className="text-gradient" />
                            <span>+201033320755</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <Mail size={20} className="text-gradient" />
                            <span>contactus@biobusiness-eg.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
