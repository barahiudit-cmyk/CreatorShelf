"user client";
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="creatorshelf-public-port-section ">
      <div
       
        className="creatorshelf-public-port-cta-card"
      >
        <div className="creatorshelf-public-port-cta-glow-1" />
        <div className="creatorshelf-public-port-cta-glow-2" />

        <div className="creatorshelf-public-port-cta-content">
          {/* Left */}
          <div>
            <div className="creatorshelf-public-port-cta-badge">
              <span className="creatorshelf-public-port-cta-dot" />
              Available for collaborations
            </div>
            <h2 className="creatorshelf-public-port-cta-heading">Lets build something meaningful together.</h2>
            <p className="creatorshelf-public-port-cta-subheading">
              Open to brand partnerships, sponsorships and exciting collaborations.
            </p>
          </div>

          {/* Right */}
          <div className="creatorshelf-public-port-cta-actions">
            <a href="#" className="creatorshelf-public-port-btn creatorshelf-public-port-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book a Call
            </a>
            <a href="mailto:hello@alexcreates.dev" className="creatorshelf-public-port-btn creatorshelf-public-port-btn-outline">
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
