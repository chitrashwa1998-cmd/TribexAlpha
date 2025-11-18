import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TradingDashboard from "@/components/trading-dashboard";
import TechnologySection from "@/components/technology-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TradingDashboard />
        <TechnologySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
