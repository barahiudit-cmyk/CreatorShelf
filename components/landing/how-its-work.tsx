"use client";
import React from 'react';

const HowItWorks = () => {
    // Creating specific glitch chunks for the background
    const glitchRows = [
        [100, 40, 200, 80, 300],
        [50, 150, 60, 220, 100],
        [300, 40, 100, 50, 200],
    ];

    return (
        <section className="creatorshelf-how-section creator-section">
            {/* Exact Stepped Glitch Lines */}


            <div className="container text-center  creatorshelf-warraper ">
                <div className="creatorshelf-glitch-container">
                    {glitchRows.map((row, i) => (
                        <div key={i} className="creatorshelf-glitch-row">
                            {/* Doubling items for seamless marquee */}
                            {[...row, ...row].map((width, j) => (
                                <div
                                    key={j}
                                    className="creatorshelf-glitch-segment"
                                    style={{ width: `${width}px` }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="creatorshelf-intro-badge">
                    <span>◈ </span> HOW IT WORKS
                </div>

                <h2 className="creatorshelf-problem-title">

                    Build your creator portfolio<br />
                    in three simple steps.
                </h2>
                <p className="creatorshelf-how-subtitle mb-5">
                    Connect your platforms, let CreatorShelf organize your content,
                    and instantly get a professional portfolio ready to share.
                </p>

                {/* Architecture Canvas */}
                <div className="creatorshelf-arch-canvas">

                    {/* Top */}
                    <div className="creatorshelf-node-card">
                        <span className="creatorshelf-box-title">
                            NO MANUAL UPDATES
                        </span>
                    </div>

                    {/* Blocked Path */}
                    <div className="creatorshelf-connector-v">
                        <div className="creatorshelf-beam creatorshelf-beam-v creatorshelf-beam-red" />
                        <div className="creatorshelf-path-x">✕</div>
                    </div>

                    {/* Main Flow */}
                    <div className="creatorshelf-machine-boundary">
                        <span className="creatorshelf-machine-label">
                            HOW IT WORKS
                        </span>

                        {/* Step 01 */}
                        <div className="creatorshelf-node-card">
                            <span className="creatorshelf-box-title">
                                CONNECT
                            </span>

                            <span className="creatorshelf-box-sub">
                                YOUTUBE • INSTAGRAM
                            </span>
                        </div>

                        {/* Connector */}
                        <div className="creatorshelf-connector-h">
                            <div className="creatorshelf-beam creatorshelf-beam-h" />
                        </div>

                        {/* Center */}
                        <div className="creatorshelf-node-card creatorshelf-node-card-main">
                            <h3 className="fw-black mb-0">
                                CREATORSHELF
                            </h3>

                            <span className="creatorshelf-local-status">
                                ✓ AUTO SYNC
                            </span>

                            <div className="creatorshelf-box-footer">
                                <span>CONTENT</span>
                                <span>PROFILE</span>
                                <span>BRANDING</span>
                            </div>
                        </div>

                        {/* Connector */}
                        <div className="creatorshelf-connector-h">
                            <div className="creatorshelf-beam creatorshelf-beam-h" />
                        </div>

                        {/* Step 03 */}
                        <div className="creatorshelf-node-card">
                            <span className="creatorshelf-box-title">
                                SHARE
                            </span>

                            <span className="creatorshelf-box-sub">
                                PORTFOLIO • LIVE
                            </span>
                        </div>
                    </div>

                    {/* Bottom Connector */}
                    <div className="creatorshelf-connector-v">
                        <div className="creatorshelf-beam creatorshelf-beam-v creatorshelf-beam-red" />
                        <div className="creatorshelf-path-x">✕</div>
                    </div>

                    {/* Bottom */}
                    <div className="creatorshelf-node-card">
                        <span className="creatorshelf-box-title">
                            NO MULTIPLE LINKS
                        </span>
                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default HowItWorks;