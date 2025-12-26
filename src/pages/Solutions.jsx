import React from 'react';
import Section from '../components/Section';
import { solutions, services } from '../data/solutions';
import { Code, Settings, Cpu, PenTool, CheckCircle } from 'lucide-react';

const Solutions = () => {
    const serviceIcons = [<Cpu />, <PenTool />, <Code />, <Settings />, <CheckCircle />, <CheckCircle />];

    return (
        <div className="solutions-page">
            <Section className="section-padding container">
                <h2 className="section-title">Our Solutions</h2>
                <div className="solutions-grid">
                    {solutions.map(solution => (
                        <div key={solution.id} className="solution-card glass">
                            <h3>{solution.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0' }}>{solution.description}</p>
                            <ul className="feature-list">
                                {solution.features.map(f => <li key={f}>✓ {f}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="section-padding glass" style={{ margin: '4rem 0' }}>
                <div className="container">
                    <h2 className="section-title">R&D Services</h2>
                    <div className="services-grid">
                        {services.map((service, i) => (
                            <div key={i} className="service-item">
                                <div className="service-icon text-gradient">{serviceIcons[i]}</div>
                                <p>{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <style>{`
        .solutions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
        .solution-card { padding: 2rem; }
        .feature-list { list-style: none; color: var(--color-primary); }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; text-align: center; }
        .service-icon { margin-bottom: 1rem; }
        .service-icon svg { width: 40px; height: 40px; }
        
        @media (max-width: 768px) {
          .solutions-grid, .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Solutions;
