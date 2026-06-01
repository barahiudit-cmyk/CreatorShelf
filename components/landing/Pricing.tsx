"use client";

import React, { useState } from "react";
import PricingCard from "@/components/ui/PricingCard";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            tag: "FREE",
            name: "Starter",
            mPrice: 0,
            yPrice: 0,
            cta: "Get Started Free",
            featured: false,
            features: [
                "Portfolio Page",
                "Social Links",
                "Mobile Responsive",
                "Auto Sync",
                "CreatorShelf Branding",
            ],
        },
        {
            tag: "POPULAR",
            name: "Pro",
            mPrice: 9,
            yPrice: 7,
            cta: "Upgrade to Pro",
            featured: true,
            features: [
                "Everything in Starter",
                "Custom Branding",
                "Premium Themes",
                "Analytics",
                "Custom Domain",
            ],
        },
        {
            tag: "TEAM",
            name: "Creator Plus",
            mPrice: 19,
            yPrice: 15,
            cta: "Join Creator Plus",
            featured: false,
            features: [
                "Everything in Pro",
                "Team Management",
                "Priority Support",
                "Advanced Insights",
                "Early Access Features",
            ],
        },
    ];

    return (
        <section className="creatorshelf-pricing-section creator-section">
            <div className="container-fluid container px-0 creatorshelf-warraper creator-pricing-container">

                <div className="text-center">
                    <div className="creatorshelf-intro-badge">
                        <span>✓</span> PRICING
                    </div>

                    <h2 className="creatorshelf-problem-title">
                        Choose the plan that <br/>fits your creator journey.
                    </h2>

                    <p className="creatorshelf-how-subtitle mb-4">
                        Start free and upgrade when you need more branding,
                        customization, and creator insights.
                    </p>

                    <div className="creatorshelf-toggle-wrapper">
                        <span
                            className={`creatorshelf-toggle-label ${!isYearly ? "active" : ""
                                }`}
                        >
                            Monthly
                        </span>

                        <div
                            className={`creatorshelf-toggle-btn ${isYearly ? "active" : ""
                                }`}
                            onClick={() =>
                                setIsYearly(!isYearly)
                            }
                        >
                            <div className="creatorshelf-toggle-thumb" />
                        </div>

                        <span
                            className={`creatorshelf-toggle-label ${isYearly ? "active" : ""
                                }`}
                        >
                            Yearly

                            <span className="creatorshelf-discount-badge">
                                SAVE 25%
                            </span>
                        </span>
                    </div>
                </div>

                <div className="row g-4 ">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="col-lg-4"
                        >
                            <PricingCard
                                tag={plan.tag}
                                name={plan.name}
                                mPrice={plan.mPrice}
                                yPrice={plan.yPrice}
                                cta={plan.cta}
                                featured={plan.featured}
                                features={plan.features}
                                isYearly={isYearly}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;