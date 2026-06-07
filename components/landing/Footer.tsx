"use client";
import React from 'react';


const Footer = () => {
    return (

        <footer className="creatorshelf-footer-wrapper">
            {/* Background Decorative Logo */}
            <div className="creatorshelf-footer-brand-bg">CREATOR</div>

            <div className="container position-relative" style={{ zIndex: 10 }}>
                <div className="row">

                    {/* Brand & Newsletter */}
                    <div className="col-lg-5 mb-1 mb-lg-0">
                        <h2
                            className="fw-black text-white h3 mb-4"
                            style={{ letterSpacing: "-1px" }}
                        >
                            CREATOR<span style={{ color: "#ef5038" }}>SHELF</span>
                        </h2>

                        <p
                            className="small text-secondary mb-4"
                            style={{ maxWidth: "340px" }}
                        >
                            Build a portfolio that grows with your content. Connect your
                            platforms, showcase your work, and share one professional link
                            everywhere.
                        </p>

                        <div className="creatorshelf-footer-subscribe">
                            <span className="creatorshelf-footer-label">
                                CREATOR UPDATES
                            </span>

                            <div className="creatorshelf-footer-input-group">
                                <input
                                    type="email"
                                    className="creatorshelf-footer-input"
                                    placeholder="YOUR@EMAIL.COM"
                                />

                                <button className="creatorshelf-footer-submit">
                                    Join Free
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="col-6 col-lg-2 offset-lg-1">
                        <span className="creatorshelf-footer-label">Product</span>

                        <ul className="creatorshelf-footer-list">
                            <li>
                                <a href="#features" className="creatorshelf-footer-link">
                                    Features
                                </a>
                            </li>

                            <li>
                                <a href="#how-it-works" className="creatorshelf-footer-link">
                                    How It Works
                                </a>
                            </li>

                            <li>
                                <a href="#pricing" className="creatorshelf-footer-link">
                                    Pricing
                                </a>
                            </li>

                            <li>
                                <a href="#faq" className="creatorshelf-footer-link">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Creators */}
                    <div className="col-6 col-lg-2">
                        <span className="creatorshelf-footer-label">Creators</span>

                        <ul className="creatorshelf-footer-list">
                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Creator Guide
                                </a>
                            </li>

                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Portfolio Tips
                                </a>
                            </li>

                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Success Stories
                                </a>
                            </li>

                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Growth Resources
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-12 col-lg-2 mt-4 mt-lg-0">
                        <span className="creatorshelf-footer-label">Company</span>

                        <ul className="creatorshelf-footer-list">
                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Roadmap
                                </a>
                            </li>

                            <li>
                                <a href="#" className="creatorshelf-footer-link">
                                    Changelog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="creatorshelf-footer-bottom">
                    <div className="creatorshelf-footer-status-bar">
                        <div>
                            <span className="creatorshelf-footer-dot"></span>
                            ALL SYSTEMS ONLINE
                        </div>

                        <div className="d-none d-md-block">
                            © 2026 CREATORSHELF. ALL RIGHTS RESERVED.
                        </div>
                    </div>

                    <div className="creatorshelf-footer-social-group">
                        <a href="#" className="creatorshelf-footer-social-icon">
                            X
                        </a>

                        <a href="#" className="creatorshelf-footer-social-icon">
                            IG
                        </a>

                        <a href="#" className="creatorshelf-footer-social-icon">
                            YT
                        </a>

                        <a href="#" className="creatorshelf-footer-social-icon">
                            LI
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;