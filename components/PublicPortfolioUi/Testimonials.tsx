
"user client";
import { motion } from 'framer-motion';

type Testimonial = {
  name: string;
  position: string;
  company: string;
  companyColor: string;
  companyIcon: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Sarah J.',
    position: 'Marketing Manager',
    company: 'Google',
    companyColor: '#4285F4',
    companyIcon: 'G',
    review: '"Alex is one of the most professional and creative creators we\'ve worked with. His content strategy is always on point and drives real engagement."',
  },
  {
    name: 'Daniel M.',
    position: 'Developer Relations',
    company: 'Microsoft',
    companyColor: '#00A4EF',
    companyIcon: 'M',
    review: '"His content is top-notch and truly adds value to the developer community. We\'ve seen remarkable results from our collaboration campaigns."',
  },
  {
    name: 'Priya S.',
    position: 'Community Lead',
    company: 'Figma',
    companyColor: '#F24E1E',
    companyIcon: 'F',
    review: '"Alex delivers high-quality content that our audience loves and trusts. His unique perspective and authenticity set him apart from other creators."',
  },
];

function Stars() {
  return (
    <div className="creatorshelf-public-port-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" className="creatorshelf-public-port-star" fill="currentColor">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="creatorshelf-public-port-section creatorshelf-public-port-content">
      <div className="creatorshelf-public-port-section-header">
        <div>
          {/* <div className="creatorshelf-public-port-section-eyebrow">Testimonials</div> */}
          <h2 className="creatorshelf-public-port-section-title">What People Say</h2>
        </div>
        <a href="#" className="creatorshelf-public-port-view-all">
          View all testimonials
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="creatorshelf-public-port-testimonial-grid">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
           
            className="creatorshelf-public-port-testimonial-card"
          >
            {/* Company logo */}
            <div
              className="creatorshelf-public-port-testimonial-logo"
              style={{
                backgroundColor: `${t.companyColor}20`,
                color: t.companyColor,
                border: `1px solid ${t.companyColor}30`,
              }}
            >
              {t.companyIcon}
            </div>

            {/* Review */}
            <p className="creatorshelf-public-port-testimonial-review">{t.review}</p>

            {/* Stars */}
            <Stars />

            {/* Person */}
            <div className="creatorshelf-public-port-testimonial-person">
              <div
                className="creatorshelf-public-port-testimonial-avatar"
                style={{ backgroundColor: `${t.companyColor}30`, color: t.companyColor }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="creatorshelf-public-port-testimonial-name">{t.name}</div>
                <div className="creatorshelf-public-port-testimonial-role">{t.position}, {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
