
"user client";
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div
   
      className="creatorshelf-public-port-navbar"
    >
      <div className="creatorshelf-public-port-navbar-inner">
        <a href="#" className="creatorshelf-public-port-nav-logo">
          <div className="creatorshelf-public-port-nav-logo-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7l8-4 8 4M4 7v10l8 4 8-4V7M4 7l8 4 8-4M12 11v10" />
            </svg>
          </div>
          <span>CreatorShelf</span>
        </a>

        <div className="creatorshelf-public-port-nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="creatorshelf-public-port-nav-cta">
          View Analyticreatorshelf-public-port
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
