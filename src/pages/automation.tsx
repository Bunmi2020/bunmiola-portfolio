import Navigation from "@/components/automation/Navigation";
import HeroSection from "@/components/automation/HeroSection_AI_Automation";
import AboutSection from "@/components/AboutSection";
import AutomationsSection from "@/components/AutomationsSection";
import TrainingSection from "@/components/TrainingSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";


const auto = () => {
  return (
    <div className="min-h-screen bg-background">
    <Navigation />
      <HeroSection />
      <AutomationsSection />
      <TrainingSection />
      <FooterSection />

    </div>
  );
};

export default auto;
