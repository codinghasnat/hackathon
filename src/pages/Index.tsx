import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ThemesSection from "@/components/ThemesSection";
import TicketsSection from "@/components/TicketsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrailerSection from "@/components/TrailerSection";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-v-screen bg-haqqathon-dark text-white relative">
      {/* Background image that spans the entire site */}
      <div 
        className="fixed inset-0 bg-green-waves bg-repeat bg-center opacity-90 z-0"
        style={{ minHeight: '100vh' }}
        aria-hidden="true"
      ></div>
      
      {/* Content container with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <MissionSection />
        <ThemesSection />
        <TicketsSection />
        <TestimonialsSection />
        <TrailerSection />
        <SpeakersSection />
        <SponsorsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
