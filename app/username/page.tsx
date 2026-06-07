import Navbar from '@/components/PublicPortfolioUi/Navbar';
import Hero from '@/components/PublicPortfolioUi/Hero';
import SocialProof from '@/components/PublicPortfolioUi/SocialProof';
import FeaturedWork from '@/components/PublicPortfolioUi/FeaturedWork';
import About from '@/components/PublicPortfolioUi/About';
import ImpactStats from '@/components/PublicPortfolioUi/ImpactStats';
import TrustedBy from '@/components/PublicPortfolioUi/TrustedBy';
import Testimonials from '@/components/PublicPortfolioUi/Testimonials';
import ContactCTA from '@/components/PublicPortfolioUi/ContactCTA';
import Footer from '@/components/PublicPortfolioUi/Footer';
import './style.css'

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#0B0D12', color: '#fff' }}>
      <Navbar />
      <main className="creatorshelf-public-port-container container-xl">
        <Hero />
        <SocialProof />
        <FeaturedWork />
        <About />
        <ImpactStats />
        <TrustedBy />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
