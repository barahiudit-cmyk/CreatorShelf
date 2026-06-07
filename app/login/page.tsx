"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
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
        <Link href="/onboard" className="creatorshelf-auth-google-btn">
          <FcGoogle size={22} />
          <span className="mx-2"> Continue with Google</span>
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