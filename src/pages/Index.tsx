import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DefectClassesSection from "@/components/DefectClassesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import HowToRunSection from "@/components/HowToRunSection";
import ResultsSection from "@/components/ResultsSection";
import DocumentationSection from "@/components/DocumentationSection";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DefectClassesSection />
      <ArchitectureSection />
      <HowToRunSection />
      <ResultsSection />
      <DocumentationSection />
      <DeveloperSection />
      <Footer />
    </div>
  );
};

export default Index;
