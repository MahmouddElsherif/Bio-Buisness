import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { products } from '../data/products';

const ProductGallery = () => {
    const { categoryId } = useParams();
    const category = products.find(p => p.id === categoryId);

    if (!category) {
        return (
            <Section className="section-padding container">
                <h2 className="section-title">All Products</h2>
                <div className="products-grid">
                    {products.map(cat => (
                        <Link to={`/products/${cat.id}`} key={cat.id} className="product-card glass">
                            <div className="product-info">
                                <h4>{cat.title}</h4>
                                <p>{cat.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        );
    }

    return (
        <Section className="section-padding container">
            <h2 className="section-title">{category.title}</h2>
            <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                {category.description}
            </p>
            <div className="products-grid">
                {category.items.map(item => (
                    <div key={item.id} className="product-card glass">
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="highlight" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{item.tagline}</p>
                            {item.specs && (
                                <ul className="spec-list">
                                    {item.specs.map((spec, i) => <li key={i}>• {spec}</li>)}
                                </ul>
                            )}
                            {item.subtypes && (
                                <div style={{ marginTop: '1rem' }}>
                                    <strong>Available Formats:</strong>
                                    <div className="tags">
                                        {item.subtypes.map(s => <span key={s} className="tag glass">{s}</span>)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
        .spec-list { list-style: none; color: var(--color-text-muted); font-size: 0.9rem; margin-top: 1rem; }
        .tag { display: inline-block; padding: 2px 8px; font-size: 0.75rem; border-radius: 4px; margin-right: 5px; margin-top: 5px; }
      `}</style>
        </Section>
    );
};

export default ProductGallery;
