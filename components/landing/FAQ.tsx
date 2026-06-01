"use client";
import React, { useState, useEffect, useRef } from 'react';

const faqs = [
    { id: "01", q: "What is CreatorShelf?", a: "CreatorShelf is a premium portfolio system that unifies your scattered social profiles into one professional link. It's built to keep your presence always up to date." },
    { id: "02", q: "How do I connect my platforms?", a: "Simply use our secure one-click integrations for major platforms. Our system automatically pulls your latest content and stats instantly." },
    { id: "03", q: "Does it update automatically?", a: "Yes. Once connected, CreatorShelf syncs with your platforms in real-time. Your projects and posts stay current without manual editing." },
    { id: "04", q: "Can I customize my page?", a: "Absolutely. We offer deep customization for themes, layouts, and typography, allowing you to match your portfolio perfectly to your personal brand." },
    { id: "05", q: "Is there a free plan?", a: "We offer a powerful Free plan for creators starting out. Pro features are available for those who need custom domains and advanced analytics." },
    { id: "06", q: "Can I use my own custom domain?", a: "Yes. Pro users can link their own custom domain to maintain a fully branded, professional identity across the web." }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isInside, setIsInside] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom
            ) {
                setIsInside(true);
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            } else {
                setIsInside(false);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="creatorshelf-faq-section creator-section" ref={sectionRef}>
            <div className="creatorshelf-faq-grain" />

            {/* Interactive Cursor Rays */}
            {isInside && (
                <>
                    <div className="creatorshelf-faq-ray-v" style={{ left: mousePos.x }} />
                    <div className="creatorshelf-faq-ray-h" style={{ top: mousePos.y }} />
                    <div className="creatorshelf-faq-cursor" style={{ left: mousePos.x, top: mousePos.y }} />
                </>
            )}

            <div className="container creator-pricing-container text-center creatorshelf-warraper">
                <div className="creatorshelf-intro-badge">
                 <span>⌘</span> FAQ
                </div>
                <h2 className="creatorshelf-problem-title">Frequently asked questions.</h2>

                <div className="creatorshelf-faq-list text-start">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`creatorshelf-faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="creatorshelf-faq-trigger">
                                <span className="creatorshelf-faq-number">{faq.id}</span>
                                <h3 className="creatorshelf-faq-question">{faq.q}</h3>
                                <span className="creatorshelf-faq-icon">▼</span>
                            </div>

                            <div className="creatorshelf-faq-content">
                                <p className="creatorshelf-faq-answer">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;