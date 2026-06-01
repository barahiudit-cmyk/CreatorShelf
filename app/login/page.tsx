"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '@/styles/Auth.css';

const LoginPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <main className="creatorshelf-auth-page">
      {/* Background Atmosphere */}
      <div className="creatorshelf-auth-bg-layers">
        <div className="creatorshelf-auth-gradient-flare" />
        <div className="creatorshelf-auth-noise" />
      </div>

      {/* Interactive Cursor Logic */}
      <div className="creatorshelf-auth-ray-v" style={{ left: mousePos.x }} />
      <div className="creatorshelf-auth-ray-h" style={{ top: mousePos.y }} />
      <div className="creatorshelf-auth-custom-cursor" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Login Interface */}
      <div className="creatorshelf-auth-card">
        {/* Logo */}
        <div className="mb-5">
          <h1 className="h4 fw-black text-white m-0" style={{ letterSpacing: '-1px' }}>
            CREATOR<span style={{ color: 'var(primary)' }}>SHELF</span>
          </h1>
        </div>

        <div className="creatorshelf-auth-badge">
          CREATOR ACCESS
        </div>

        <h2 className="creatorshelf-auth-title">Welcome to CreatorShelf</h2>
        
        <p className="creatorshelf-auth-desc">
          Build your creator portfolio, connect your platforms, and share one professional page everywhere.
        </p>

        {/* Google Authentication Only */}
        <Link href="/onboard" className="creatorshelf-auth-google-btn  ">
          <svg width="20" height="20" viewBox="0 0 24 24" className="me-2">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7。07H2。18C1。43 8。55 1 10。２２ 1 １２s。4３ ３。４５ １。１８ ４。９３l２。８５-２。２２。８１-.６２z" fill="#FBBC05"/>
            <path d="M1２ ５。３８c１。６２ ０ ３。０６。５６ ４。２１ １。６６l３。１５-３。１５C１７。４５ ２。０９ １４。９７ １ １２ １ ７。７ １ ３。９９ ３。４７ ２。１８ ７。０７l３。６６ ２。８４c。８７-２。６ ３。３-４。５３ １２-４。５３z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </Link>

        {/* <div className="mt-3">
          <span className="creatorshelf-auth-signal-item justify-content-center" style={{opacity: 0.4}}>
            No passwords required. Free to get started.
          </span>
        </div> */}

        {/* Trust Signals */}
        <div className="creatorshelf-auth-signals">
          <div className="creatorshelf-auth-signal-item">
            <div className="creatorshelf-auth-dot" />
            <span>Portfolio setup in minutes.</span>
          </div>
          <div className="creatorshelf-auth-signal-item">
            <div className="creatorshelf-auth-dot" />
            <span>Creator-focused platform.</span>
          </div>
          <div className="creatorshelf-auth-signal-item">
            <div className="creatorshelf-auth-dot" />
            <span>Professional online presence.</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="creatorshelf-auth-footer">
          <a href="#" className="creatorshelf-auth-footer-link">Terms of Service</a>
          <a href="#" className="creatorshelf-auth-footer-link">Privacy Policy</a>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;