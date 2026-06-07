
"user client";
import { motion } from 'framer-motion';

const stats = [
  {
    value: '2.8M+',
    label: 'Total Reach',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: '125K+',
    label: 'Subscribers',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'Brand Collaborations',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    value: '300+',
    label: 'Content Pieces',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

export default function ImpactStats() {
  return (
    <section className="creatorshelf-public-port-section creatorshelf-public-port-content">
      <div className="creatorshelf-public-port-impact-grid">
        {stats.map((s, i) => (
          <div
            key={s.label}
           
            className="creatorshelf-public-port-impact-card"
          >
            <div className="creatorshelf-public-port-impact-icon">{s.icon}</div>
            <div className="creatorshelf-public-port-impact-value">{s.value}</div>
            <div className="creatorshelf-public-port-impact-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
