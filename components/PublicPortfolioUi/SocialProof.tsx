
"user client";
import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'YouTube',
    count: '125K',
    label: 'Subscribers',
    iconColor: '#FF0000',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1 31.3 31.3 0 00.5-5.8 31.3 31.3 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    count: '48.2K',
    label: 'Followers',
    iconColor: '#E1306C',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    count: '24.1K',
    label: 'Followers',
    iconColor: '#0A66C2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    count: '5.8K',
    label: 'Followers',
    iconColor: '#FFFFFF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12.5c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Website',
    count: 'alexcreates.dev',
    label: 'Personal Website',
    iconColor: '#8B5CF6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="creatorshelf-public-port-section " style={{ paddingTop: 0 }}>
      <div
       
        className="creatorshelf-public-port-social-bar"
      >
        {platforms.map((p) => (
          <div key={p.name} className="creatorshelf-public-port-social-item">
            <div style={{ color: p.iconColor, display: 'flex', alignItems: 'center' }}>{p.icon}</div>
            <div>
              <div className="creatorshelf-public-port-social-count">{p.count}</div>
              <div className="creatorshelf-public-port-social-label">{p.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
