import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import { Download, ShoppingCart } from 'lucide-react';

const Support = () => {
    const { type } = useParams();

    return (
        <div className="support-page">
            <Section className="section-padding container">
                <h2 className="section-title">Support Center</h2>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', display: 'grid', marginTop: '3rem' }}>
                    <div className={`glass ${type === 'manuals' ? 'active-card' : ''}`} style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <Download className="text-gradient" size={48} style={{ marginBottom: '1rem' }} />
                        <h3>Technical Support</h3>
                        <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0' }}>Access product manuals, firmware updates, and technical files.</p>
                        <button className="btn btn-outline">Access Portal</button>
                    </div>
                    <div className={`glass ${type === 'sales' ? 'active-card' : ''}`} style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <ShoppingCart className="text-gradient" size={48} style={{ marginBottom: '1rem' }} />
                        <h3>Sales Inquiry</h3>
                        <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0' }}>Request a quote or find a distributor in your region.</p>
                        <button className="btn btn-primary">Contact Sales</button>
                    </div>
                </div>
            </Section>
            <style>{`
        .active-card { border-color: var(--color-primary); }
      `}</style>
        </div>
    );
};

export default Support;
