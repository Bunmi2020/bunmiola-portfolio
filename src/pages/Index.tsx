import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AutomationsSection from "@/components/AutomationsSection";
import TrainingSection from "@/components/TrainingSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AutomationsSection />
      <TrainingSection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />

    </div>
  );
};

export default Index;
