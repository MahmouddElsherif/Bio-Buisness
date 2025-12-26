import React from 'react';
import Section from '../components/Section';
import { Award, Target, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <Section className="section-padding container">
                <h2 className="section-title">About BioBusiness</h2>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', display: 'grid', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '1rem' }}>
                            Leading Egyptian R&D for high-quality medical products.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            BioBusiness specializes in translating complex scientific concepts into practical, life-saving medical technologies.
                            Our focus spans Neonatal Care, Respiratory Support, and cutting-edge Telemonitoring solutions.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            With ISO 9001 and ISO 13485 certifications, we ensure that every product meets the highest international safety and quality standards.
                        </p>
                    </div>
                    <div className="glass" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <Award className="text-gradient" size={40} />
                            <div>
                                <h4 style={{ color: 'white' }}>Certified Quality</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>ISO 13485 Medical Device Management</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Target className="text-gradient" size={40} />
                            <div>
                                <h4 style={{ color: 'white' }}>Mission Driven</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Innovating to improve clinical outcomes globally.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
