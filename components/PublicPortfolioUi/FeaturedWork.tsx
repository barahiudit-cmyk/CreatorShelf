"user client";

import { motion } from 'framer-motion';

type Work = {
  title: string;
  description: string;
  platform: string;
  duration: string;
  gradient: string;
  icon: string;
};

const works: Work[] = [
  {
    title: 'Laravel 11 Full Course (2024)',
    description: 'Complete Laravel 11 course for beginners. Build real-world projects step by step.',
    platform: 'YouTube',
    duration: '18:45',
    gradient: 'grad-laravel',
    icon: 'L',
  },
  {
    title: 'Build a Portfolio Website',
    description: 'Build a modern portfolio website using React & Tailwind creatorshelf-public-portS.',
    platform: 'YouTube',
    duration: '24:31',
    gradient: 'grad-react',
    icon: '⚛',
  },
  {
    title: 'Top 10 VS Code Tips',
    description: 'Boost your productivity with these essential VS Code tips.',
    platform: 'YouTube',
    duration: '10:23',
    gradient: 'grad-vscode',
    icon: '</>',
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="creatorshelf-public-port-section creatorshelf-public-port-content">
      <div className="creatorshelf-public-port-section-header">
        <div>
          {/* <div className="creatorshelf-public-port-section-eyebrow">Portfolio</div> */}
          <h2 className="creatorshelf-public-port-section-title">Featured Work</h2>
        </div>
        <a href="#" className="creatorshelf-public-port-view-all">
          View all projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="creatorshelf-public-port-work-grid">
        {works.map((w, i) => (
          <a
            key={w.title}
            href="#"
          
            className="creatorshelf-public-port-work-card"
          >
            {/* Thumbnail */}
            <div className={`creatorshelf-public-port-work-thumb ${w.gradient}`}>
              <span>{w.icon}</span>
              <div className="creatorshelf-public-port-work-duration">{w.duration}</div>
              <div className="creatorshelf-public-port-work-play">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="creatorshelf-public-port-work-body">
              <h3 className="creatorshelf-public-port-work-title">{w.title}</h3>
              <p className="creatorshelf-public-port-work-desc">{w.description}</p>

              {/* Footer */}
              <div className="creatorshelf-public-port-work-footer">
                <div className="creatorshelf-public-port-work-platform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1 31.3 31.3 0 00.5-5.8 31.3 31.3 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
                  </svg>
                  {w.platform}
                </div>
                <span className="creatorshelf-public-port-work-cta">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
