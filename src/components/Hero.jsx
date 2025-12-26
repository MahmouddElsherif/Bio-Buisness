import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1 className="hero-title">
                        Innovating the Future of <span className="text-gradient">Healthcare</span>
                    </h1>
                    <p className="hero-description">
                        Advanced R&D solutions in Medical Equipment, IoT, and Telemonitoring.
                        We turn complex scientific concepts into life-saving technologies.
                    </p>
                    <div className="hero-btns">
                        <a href="#products" className="btn btn-primary">Explore Products</a>
                        <a href="#contact" className="btn btn-outline">Get in Touch</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-image-container"
                >
                    <div className="hero-image-blob"></div>
                    <img src={heroImg} alt="Medical Technology" className="hero-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
