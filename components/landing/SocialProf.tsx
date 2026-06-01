"use client";
import React from 'react';


const SocialProof = () => {
  const stats = [
    { value: "500+", label: "Creator Profiles", id: "CS_MT_01" },
    { value: "25K+", label: "Portfolio Visits", id: "CS_MT_02" },
    { value: "50+", label: "Creator Niches", id: "CS_MT_03" },
    { value: "99.9%", label: "Uptime Protocol", id: "CS_MT_04" }
  ];

  const creatorAvatars = [
    "https://i.pravatar.cc/150?u=a",
    "https://i.pravatar.cc/150?u=b",
    "https://i.pravatar.cc/150?u=c",
    "https://i.pravatar.cc/150?u=d",
    "https://i.pravatar.cc/150?u=e"
  ];

  return (
    <section className="creatorshelf-social-section creator-section" >
      <div className="creatorshelf-social-scanline " />

      <div className="container position-relative creatorshelf-warraper" style={{ zIndex: 5 }}>
        <div className="creatorshelf-intro-badge">
          <span>✦</span> TRUSTED BY CREATORS
        </div>
        <div className="row align-items-end creatorshelf-social-data">
          {/* Headline and Description */}
          <div className="col-lg-7 ">

            <h2 className="creatorshelf-problem-title">
              Built for modern <br className="d-none d-md-block" /> creators.
            </h2>
            <p className="creatorshelf-social-description ">
              Join hundreds of creators who use CreatorShelf to showcase their work,
              connect their audience across platforms, and grow their online presence.
              From designers and developers to writers and content creators,
              CreatorShelf helps turn scattered profiles into one professional portfolio.
            </p>
          </div>

          {/* Avatar and Join Text */}
          <div className="col-lg-5 text-lg-end mt-5 mt-lg-0">
            <div className="d-inline-block text-start">
              <div className="creatorshelf-social-avatar-group">
                {creatorAvatars.map((url, index) => (
                  <div key={index} className="creatorshelf-social-avatar">
                    <img src={url} alt={`Creator ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="creatorshelf-social-trust-label">
                System Status: <span className="text-white">Join 500+ creators</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="row g-0 creatorshelf-social-grid">
          {stats.map((stat, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="creatorshelf-social-card">
                <span className="creatorshelf-social-card-id">{stat.id}</span>
                <span className="creatorshelf-social-stat-value">{stat.value}</span>
                <span className="creatorshelf-social-stat-label">{stat.label}</span>

                {/* Decorative Terminal HUD Detail */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '45px',
                  right: '45px',
                  height: '1px',
                  background: 'rgba(255,255,255,0.03)'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;