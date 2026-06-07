"user client";
import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Experience', icon: '⭐' },
  { value: '500K+', label: 'Learners Helped', icon: '🌍' },
  { value: '100+', label: 'Projects Built', icon: '🧩' },
];

export default function About() {
  return (
    <section id="about" className="creatorshelf-public-port-section ">
      <div className="creatorshelf-public-port-about-grid creatorshelf-public-port-content">
        {/* LEFT */}
        <div

        >
          <div className="creatorshelf-public-port-section-eyebrow">About Me</div>
          <h2 className="creatorshelf-public-port-about-heading">
            Turning ideas into impact through code &amp; content.
          </h2>
        </div>

        {/* RIGHT */}
        <div
         
        >
          <p className="creatorshelf-public-port-about-story">
            I m Alex, a developer, educator and content creator. I create practical, easy-to-follow content that helps developers
            learn faster and build real-world projects. I help brands and companies by creating high-quality content that educates,
            inspires and drives real impact. With over 5 years of experience, my mission is to empower the next generation of
            developers and help companies reach their audience through authentic, engaging content.
          </p>
          <a href="#" className="creatorshelf-public-port-read-story">
            Read My Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Visual Block */}
      <div
     
        className="creatorshelf-public-port-about-visual"
      >
        <div className="creatorshelf-public-port-workspace">
          <div className="creatorshelf-public-port-lamp-glow" />

          <div className="creatorshelf-public-port-workspace-items">
            {/* Laptop */}
            <div className="creatorshelf-public-port-laptop">
              <div className="creatorshelf-public-port-laptop-screen">
                <div className="creatorshelf-public-port-laptop-bar">
                  <div className="creatorshelf-public-port-dot creatorshelf-public-port-dot-red" />
                  <div className="creatorshelf-public-port-dot creatorshelf-public-port-dot-yellow" />
                  <div className="creatorshelf-public-port-dot creatorshelf-public-port-dot-green" />
                </div>
                <div className="creatorshelf-public-port-code-lines">
                  <div className="creatorshelf-public-port-code-line w-3-4" />
                  <div className="creatorshelf-public-port-code-line w-1-2" />
                  <div className="creatorshelf-public-port-code-line w-2-3" />
                  <div className="creatorshelf-public-port-code-line w-1-3" />
                </div>
              </div>
              <div className="creatorshelf-public-port-laptop-base" />
            </div>
            {/* Mug */}
            <div className="creatorshelf-public-port-mug" />
          </div>

          {/* Floating stat cards */}
          <div className="creatorshelf-public-port-float-stats">
            {stats.map((s, i) => (
              <div
                key={s.label}
               
                className="creatorshelf-public-port-float-stat"
              >
                <div className="creatorshelf-public-port-float-icon">{s.icon}</div>
                <div>
                  <div className="creatorshelf-public-port-float-value">{s.value}</div>
                  <div className="creatorshelf-public-port-float-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
