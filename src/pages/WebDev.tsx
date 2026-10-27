import Navigation from "@/components/web_dev/Navigation";
import HeroSection from "@/components/web_dev/HeroSection_web_dev";
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
      <ProjectsSection />
      <FooterSection />

    </div>
  );
};

export default auto;
