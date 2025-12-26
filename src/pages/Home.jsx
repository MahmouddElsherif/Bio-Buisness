import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Section from '../components/Section';
import { products } from '../data/products';
import neonatalImg from '../assets/product-neonatal.jpg';
import respiratoryImg from '../assets/product-respiratory.jpg';
import telemonitoringImg from '../assets/product-telemonitoring.jpg';

const productImages = {
    'neonatal-care': neonatalImg,
    'respiratory-care': respiratoryImg,
    'telemonitoring': telemonitoringImg
};

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Highlights />

            {/* Products Preview Section */}
            <Section id="products" className="section-padding">
                <div className="container">
                    <h2 className="section-title">Our Innovations</h2>
                    <div className="products-grid">
                        {products.map((category) => (
                            <div key={category.id} className="product-card glass">
                                <img src={productImages[category.id]} alt={category.title} />
                                <div className="product-info">
                                    <h4>{category.title}</h4>
                                    <p>{category.description}</p>
                                    <a href={`/products/${category.id}`} className="btn-text">
                                        Explore {category.title} &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Solutions Call to Action */}
            <Section className="section-padding glass" style={{ margin: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title">End-to-End Solutions</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--color-text-muted)' }}>
                        Beyond products, we provide full-scale engineering and R&D services,
                        from hardware design and mechanical engineering to complex software algorithms.
                    </p>
                    <a href="/solutions" className="btn btn-primary">View Solutions</a>
                </div>
            </Section>
        </div>
    );
};

export default Home;
