import React from 'react';
import Section from './Section';
import { Microscope, Globe, Stethoscope } from 'lucide-react';

const Highlights = () => {
    const cards = [
        { icon: <Microscope size={40} />, title: 'Expert R&D', desc: 'Complete product lifecycle from concept to production.' },
        { icon: <Globe size={40} />, title: 'IoT Focused', desc: 'Smart telemonitoring solutions for modern clinics.' },
        { icon: <Stethoscope size={40} />, title: 'Clinical Impact', desc: 'Specialized equipment for Neonatal and Intensive Care.' }
    ];

    return (
        <div className="container">
            <div className="highlights">
                {cards.map((card, i) => (
                    <Section key={i} className="highlight-card glass">
                        <div className="icon text-gradient" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                            {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>{card.desc}</p>
                    </Section>
                ))}
            </div>
        </div>
    );
};

export default Highlights;
