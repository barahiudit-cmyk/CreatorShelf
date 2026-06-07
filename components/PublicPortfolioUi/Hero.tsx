
"user client";
import { motion } from 'framer-motion';

const skills = ['Developer', 'Educator', 'Content Creator', 'Open Source', 'Tech Enthusiast'];

export default function Hero() {
  return (
    <section className="creatorshelf-public-port-hero">
      <div className="creatorshelf-public-port-hero-grid">
        {/* LEFT - 65% */}
        <div>
          <div >
            {/* Verified badge */}
            <div className="creatorshelf-public-port-verified">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 2.1 3.3-.4.4 3.3L20 9.4l-2.1 2.4.4 3.3-3.3.4L12 20l-2.4-2.1-3.3.4-.4-3.3L4 9.4l2.1-2.4-.4-3.3 3.3-.4L12 2zm-1.3 11.3l4.6-4.6-1.4-1.4-3.2 3.2-1.6-1.6-1.4 1.4 3 3z" />
              </svg>
              Verified Creator
            </div>

            {/* Profile image */}
            {/* <div className="creatorshelf-public-port-avatar-wrap">
              <div className="creatorshelf-public-port-avatar-glow" />
              <div className="creatorshelf-public-port-avatar-ring">
                <div className="creatorshelf-public-port-avatar-inner">
                  <svg viewBox="0 0 160 160" width="100%" height="100%">
                    <defs>
                      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1f2b" />
                        <stop offset="100%" stopColor="#2a3140" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="80" fill="url(#avatarGrad)" />
                    <circle cx="80" cy="60" r="28" fill="#4a5568" />
                    <path d="M40 140 Q80 100 120 140 L120 160 L40 160 Z" fill="#4a5568" />
                  </svg>
                </div>
              </div>
            </div> */}

            {/* Name */}
            <h1 className="creatorshelf-public-port-name">Alex Creates</h1>
            <div className="creatorshelf-public-port-username">@alexcreates</div>

            {/* Meta row */}
            <div className="creatorshelf-public-port-meta-row">
              <span className="creatorshelf-public-port-pill creatorshelf-public-port-pill-accent">Tech Creator</span>
              <span className="creatorshelf-public-port-pill creatorshelf-public-port-pill-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Bangalore, India
              </span>
              <span className="creatorshelf-public-port-pill creatorshelf-public-port-pill-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                5+ Years
              </span>
            </div>

            {/* Bio */}
            <p className="creatorshelf-public-port-bio">
              I create videos about programming, web development and tools that help you build a better life as a developer.
            </p>

            {/* Skill tags */}
            <div className="creatorshelf-public-port-skills">
              {skills.map((skill) => (
                <span key={skill} className="creatorshelf-public-port-skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - 35% */}
        <div>
          <div
           
            className="creatorshelf-public-port-hero-actions"
          >
            <a href="#contact" className="creatorshelf-public-port-btn creatorshelf-public-port-btn-primary">
              Work With Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="mailto:hello@alexcreates.dev" className="creatorshelf-public-port-btn creatorshelf-public-port-btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
