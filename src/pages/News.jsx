import React from 'react';
import Section from '../components/Section';

const News = () => {
    const newsItems = [
        { date: '2021', title: 'MEDICA 2021', desc: 'Showcasing our latest innovations in Dusseldorf, Germany.' },
        { date: '2020', title: 'Arab Health 2020', desc: 'Participating in the leading healthcare event in the MEC region.' },
        { date: '2019', title: 'Arab Health 2019', desc: 'Grand release of the BioVent A Series platform.' }
    ];

    return (
        <Section className="section-padding container">
            <h2 className="section-title">Latest News</h2>
            <div style={{ maxWidth: '800px', margin: '3rem auto' }}>
                {newsItems.map((item, i) => (
                    <div key={i} className="glass" style={{ padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{item.date}</div>
                        <div>
                            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default News;
