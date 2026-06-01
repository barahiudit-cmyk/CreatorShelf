"use client";
import React from "react";
import Link from "next/link";

const CtaSection = () => {
    return (
        <section className="creatorshelf-cta-alt-section">
            {/* Background Decorative Text */}
            <div className="creatorshelf-cta-alt-bg-text">
                CREATE
            </div>

            <div
                className="container position-relative"
                style={{ zIndex: 10 }}
            >
                <div className="creatorshelf-cta-alt-frame">

                    {/* Scanning Border */}
                    <div className="creatorshelf-cta-alt-scan">
                        <svg>
                            <rect
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                className="creatorshelf-cta-alt-path"
                            />
                        </svg>
                    </div>

                    {/* Corners */}
                    <div className="creatorshelf-cta-alt-corner creatorshelf-cta-alt-tl" />
                    <div className="creatorshelf-cta-alt-corner creatorshelf-cta-alt-tr" />
                    <div className="creatorshelf-cta-alt-corner creatorshelf-cta-alt-bl" />
                    <div className="creatorshelf-cta-alt-corner creatorshelf-cta-alt-br" />

                    {/* Content */}
                    <div className="creatorshelf-cta-alt-content">

                        <span className="creatorshelf-cta-alt-badge">
                            ✦ START YOUR CREATOR JOURNEY
                        </span>

                        <h2 className="creatorshelf-cta-alt-title">
                            Ready to build your creator portfolio?
                        </h2>

                        <p className="small text-secondary mt-3">
                            Connect your platforms, showcase your work,
                            and give brands, clients, and followers one place
                            to discover everything you create.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="creatorshelf-cta-alt-divider d-none d-lg-block" />

                    {/* Action */}
                    <div className="creatorshelf-cta-alt-action">

                        <Link href="/login" className="creatorshelf-btn-notched w-100 text-decoration-none">
                            Get Started Free
                        </Link>

                        <div className="mt-3">
                            <span
                                className="creatorshelf-cta-alt-badge"
                                style={{
                                    fontSize: "9px",
                                    opacity: 0.6,
                                }}
                            >
                                FREE TO GET STARTED
                            </span>
                        </div>

                    </div>
                </div>

                {/* Bottom HUD */}
                <div className="d-flex justify-content-between mt-4 px-2">

                    <div
                        className="creatorshelf-cta-alt-badge"
                        style={{ fontSize: "9px" }}
                    >
                        500+ ACTIVE CREATORS
                    </div>

                    <div
                        className="creatorshelf-cta-alt-badge"
                        style={{ fontSize: "9px" }}
                    >
                        PORTFOLIOS UPDATED DAILY
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CtaSection;