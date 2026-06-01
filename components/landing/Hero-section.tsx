"use client";
import React, { useState, useEffect } from 'react';
import Ticker from '@/components/ui/Ticker';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Handle interactive background movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="creatorshelf-hero">
      {/* Glitching Interactive Background Character */}
      <div className="container">
        {/*  */}
        <div
          className="creatorshelf-bg-interactive"
          style={{ transform: `translate(calc(20% + ${offset.x}px), calc(-50% + ${offset.y}px))` }}
        >
          CS
        </div>

        <div className="creatorshelf-content">
          <div className="row">
            <div className="col-lg-11">
              <h1 className="creatorshelf-hero-title">
                Your creator portfolio.<br />
               One link. Always fresh.

              </h1>
              <p className="creatorshelf-hero-description">
               Connect your platforms, showcase your latest content, and create a portfolio page that helps brands instantly understand your value.
              </p>
              <div className="d-flex gap-3 flex-wrap creatorshelf-action ">
                <button className="creatorshelf-btn-notched">GET YOUR FREE PAGE</button>
                <button className="creatorshelf-btn-outline">VIEW EXAMPLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Ticker />
    </section>
  );
};

export default Hero;