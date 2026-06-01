// Make sure the path matches your structure
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero-section';
import SocialProof from '@/components/landing/SocialProf';
import ProblemSection from '@/components/landing/Problem-section';
import HowItWorks from '@/components/landing/how-its-work';
import FeaturesSection from '@/components/landing/Features';
import PricingSection from '@/components/landing/Pricing';
import FaqSection from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import CTA from '@/components/landing/CTA';


// import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <main className="creatorshelf-main-wrapper">
      {/* Global visual effects */}
      <div className="creatorshelf-scanline-overlay" />
      {/* <ThemeToggle /> */}

      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CTA />
      <Footer />
    </main>
  );
}




