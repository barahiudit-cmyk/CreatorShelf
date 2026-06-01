"use client";
import React, { useState, useEffect } from 'react';
import NoiseParticles from '../ui/features-ui/NoiseParticles'; // Import the new particle system

const features = [
    {
        step: "STEP 01",
        title: "Automatically sync your creator content.",
        desc: "Keep your portfolio updated with your latest content and profile information.",
        cardData: {
            header: "AUTO SYNC",
            metrics: [
                { label: "Content", rig: 100, cloud: 0, unit: "%" },
                { label: "Updates", rig: 100, cloud: 0, unit: "%" }
            ]
        }
    },

    {
        step: "STEP 02",
        title: "A portfolio designed to stand out.",
        desc: "Present your creator identity with layouts optimized for creators and brands.",
        cardData: {
            header: "PORTFOLIO",
            metrics: [
                { label: "Mobile", rig: 100, cloud: 0, unit: "%" },
                { label: "Responsive", rig: 100, cloud: 0, unit: "%" }
            ]
        }
    },

    {
        step: "STEP 03",
        title: "Share everywhere with one link.",
        desc: "Use a single portfolio URL across your social profiles and partnerships.",
        cardData: {
            header: "SHARING",
            metrics: [
                { label: "Portfolio", rig: 100, cloud: 0, unit: "%" },
                { label: "Reach", rig: 100, cloud: 0, unit: "%" }
            ]
        }
    }
];

const FeaturesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setIsAnimating(true);
                    setTimeout(() => {
                        setActiveIndex((idx) => (idx + 1) % features.length);
                        setProgress(0);
                        setIsAnimating(false);
                    }, 400);
                    return 0;
                }
                return prev + 0.4;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 35;
        const y = (e.clientY - rect.top - rect.height / 2) / 35;
        setMousePos({ x, y });
    };

    const currentCard = features[activeIndex].cardData;

    return (
        <section className="creatorshelf-features-section creator-section">
            <div className="container-fluid container creatorshelf-warraper  creatorshelf-features-grid">

                <div className="container text-center mb-5">
                    <div className="creatorshelf-intro-badge creatorshelf-badge-scan">
                        <span>⌬</span> FEATURES
                    </div>
                    <h2 className="creatorshelf-problem-title " >Everything you need <br /> to build your creator presence. </h2>
                    <p className="creatorshelf-how-subtitle">
                        CreatorShelf combines content syncing, portfolio design,
                        and sharing tools into one simple platform.
                    </p>
                </div>


                <div className="row g-0 creatorshelf-content-warraper" >

                    {/* LEFT: Accordion */}
                    <div className="col-lg-5">
                        {features.map((f, i) => (
                            <div key={i} className={`creatorshelf-feature-item ${activeIndex === i ? 'active' : ''}`} onClick={() => { setActiveIndex(i); setProgress(0); }}>
                                {activeIndex === i && <div className="creatorshelf-timeline-overlay" style={{ height: `${progress}%`, position: 'absolute', left: 0, top: 0, width: '2px', background: 'var(--primary)' }} />}
                                <span className="creatorshelf-step-label">{f.step}</span>
                                <h3 className="creatorshelf-feature-title">{f.title}</h3>
                                <div className="creatorshelf-feature-desc"><p>{f.desc}</p></div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Dynamic Particles + Showcase */}
                    <div className="col-lg-7 creatorshelf-showcase-area" onMouseMove={handleMouseMove}>

                        {/* 1. Interactive Particles Layer */}
                        <NoiseParticles color="#ed4c37" />

                        {/* 2. Static Noise Layer */}
                        <div className="creatorshelf-noise-overlay" />

                        {/* 3. The Feature Card (Parallax) */}

                        <div
                            className="creatorshelf-perf-card"
                            style={{
                                transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                            }}
                        >
                            <div
                                className={`creatorshelf-card-content-wrapper ${isAnimating
                                    ? "creatorshelf-card-fade-out"
                                    : "creatorshelf-card-fade-in"
                                    }`}
                            >
                                <div className="creatorshelf-perf-header">
                                    {currentCard.header}
                                </div>

                                {currentCard.metrics.map((m, idx) => (
                                    <div
                                        key={idx}
                                        className="creatorshelf-perf-stat"
                                    >
                                        <span className="creatorshelf-stat-label">
                                            {m.label}
                                        </span>

                                        {/* CreatorShelf */}
                                        <div className="creatorshelf-stat-row">
                                            <span className="creatorshelf-stat-name">
                                                CreatorShelf
                                            </span>

                                            <div className="creatorshelf-stat-bar-bg">
                                                <div
                                                    className="creatorshelf-stat-fill green"
                                                    style={{
                                                        width: `${m.rig}%`
                                                    }}
                                                />
                                            </div>

                                            <span className="creatorshelf-stat-value highlight">
                                                {m.rig}
                                                {m.unit}
                                            </span>
                                        </div>

                                        {/* Traditional */}
                                        <div className="creatorshelf-stat-row">
                                            <span className="creatorshelf-stat-name">
                                                Traditional
                                            </span>

                                            <div className="creatorshelf-stat-bar-bg">
                                                <div
                                                    className="creatorshelf-stat-fill muted"
                                                    style={{
                                                        width: `${m.cloud}%`
                                                    }}
                                                />
                                            </div>

                                            <span className="creatorshelf-stat-value">
                                                {m.cloud}
                                                {m.unit}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;